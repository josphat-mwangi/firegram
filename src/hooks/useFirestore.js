import { useEffect, useState } from "react";
import { projectFirestore } from "../firebase/config";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore"; 


const useFirestore = (collect) => {
    const[docs, setDocs] = useState([]);

    useEffect(()=>{
        const unsub = query(collection(projectFirestore, collect),orderBy("created", "desc"))
        onSnapshot(unsub, (snap)=>{
            let documents = [];
            snap.forEach(doc =>{
                documents.push({...doc.data(), id: doc.id})
            });
            setDocs(documents);
        });

        return () => unsub;
    },[collect])



    return { docs }
}

export default useFirestore
