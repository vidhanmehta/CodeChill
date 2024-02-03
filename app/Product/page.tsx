"use client"
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import LampContainer from '../../components/LampContainer';


export default function Product() {
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    return (
        <>
            {isClient && (
                <LampContainer className='flex items-center justify-center h-screen'>
                    <motion.h1
                        initial={{ opacity: 0.5, y: 200 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{
                            delay: 0.3,
                            duration: 0.8,
                            ease: "easeInOut",
                        }}
                        className=" bg-gradient-to-br from-green-300 to-gray-200  bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
                    >
                        <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold '>IsWiseChoice?</h1>
                        <div className='flex justify-center items-center'>
                            <p className='md:text-xl sm:text-4xl text-xl font-bold '>
                                Securely Sorted , Wisely Chosen  
                            </p>
                            
                        </div>

                        {/* <InputForm />

                        <Filter /> */}
                        


                    </motion.h1>
                </LampContainer>
            )}
        </>
    );
}