import React from 'react';
import { Rubik } from 'next/font/google';
import Circ

const rubik = Rubik({
    subsets: ['latin-ext']
})

const Analysis:React.FC = () => {
    return (<>
        <div className="flex h-screen w-screen">
            <div className="flex-row flex-1 w-full px-10 py-8 pragyam">
                <h2  className='text-3xl font-semibold text-rose-700 bg-slate-100 h-fit w-fit p-2 -rotate-6 mt-4'>Not a Wise Choice!</h2>
                <div className='flex mt-6 ml-8'>
                    <h3 className={`text-4xl ${rubik.className} mt-4 `}>Product Name</h3>
                </div>
            </div>
            <div className="flex flex-1 w-full divyesh"></div>
        </div>
        </>
    );
};

export default Analysis;
