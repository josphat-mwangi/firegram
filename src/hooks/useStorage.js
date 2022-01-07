import  { useEffect, useState } from 'react'
import  {projectStorage, projectFirestore}  from "../config";
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';
import { collection, addDoc, Timestamp } from "firebase/firestore"; 

const useStorage = (file) => {
    const [progress, setProgress] = useState(0);
    const [error, setError ] = useState(null);
    const [url, setUrl] = useState(null);

    useEffect(()=>{
       
        const storageRef = ref(projectStorage, `/file/${file.name}`);
        const uploadTask = uploadBytesResumable(storageRef, file);
    
        uploadTask.on("state_changed", (snapshot)=>{
            const prog = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
            setProgress(prog);
        },
        (err) => {
            setError(err)
        },
        async() => {
            const url = await getDownloadURL(uploadTask.snapshot.ref);
            await addDoc(collection(projectFirestore, 'images'),{
                url:url,
                created: Timestamp.now()
            })
            setUrl(url)
        });
    },[file])
    return { progress, url, error}
}

export default useStorage;


  
