import React from 'react';
import useFirestore from '../hooks/useFirestore';
import { motion } from 'framer-motion';
import { Container } from 'react-bootstrap';


const ImageGrid = ({setSelectedImg}) => {
    const { docs } = useFirestore('images');

    return (
        <Container>
            <div className='img-grid'>
                { docs && docs.map(doc =>(
                    <motion.div className='img-wrap' key={doc.id}
                    layout
                    whileHover={{ opacity: 1}}
                    onClick={() => setSelectedImg(doc.url)}
                    >
                        <motion.img src={doc.url} alt="uploaded pic"  initial={{ opacity: 0}}
                            animate={{ opacity: 1}}
                            transition={{ delay: 1}}
                        />
                        
                    </motion.div>
                ))}
          
            </div>
        </Container>
        
    )
}

export default ImageGrid
