import React from 'react';
import { Rubik } from 'next/font/google';
import {CircularProgress} from "@nextui-org/react";
import {Chip} from "@nextui-org/react";
import {Slider} from "@nextui-org/react";
"use client"
import React, { useState, useEffect } from 'react';
import SideEffectsCards from '@/components/SideEffectsCards';

const Analysis: React.FC = () => {


  return (
    <>
      <div className="flex  w-screen bg-white">
        <div className="flex flex-1 w-full pragyam"></div>
        <div className="flex flex-1 flex-row w-full justify-center pt-16 ">
     <SideEffectsCards />
  

        </div>  
      </div>
      
    </>
  );


const Analysis:React.FC = () => {
    return (<>
        <div className="flex h-screen w-screen bg-white">
            <div className="flex-row flex-1 w-full px-10 py-8 pragyam">
                <h2  className='text-3xl font-semibold text-rose-700 bg-[#eec0c0] h-fit w-fit p-2 -rotate-12 mt-4'>Not a Wise Choice!</h2>
                <div className='flex mt-6 ml-8 w-full justify-evenly'>
                    <h3 className={`text-4xl ${rubik.className} mt-4 `}>Product Name</h3>
                    <CircularProgress
                        label="Safety Score"
                        size="lg"
                        value={70}
                        color="warning"
                        showValueLabel={true}
                        />
                </div>
                <p className='text-md mt-4 font-medium'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                <div className='flex'>
                    <div className="flex-1 flex-row mt-4 px-5">
                        <h4>Ingredients</h4>
                        <ul className=' flex flex-wrap gap-2 items-start w-full'>
                            <li><Chip color="danger" variant="faded" className='my-2'>Ingredient</Chip></li>
                            <li><Chip color="danger" variant="faded" className='my-2'>Ingredient</Chip></li>
                            <li><Chip color="danger" variant="faded" className='my-2'>Ingredient</Chip></li>
                            <li><Chip color="danger" variant="faded" className='my-2'>Ingredient</Chip></li>
                            <li><Chip color="danger" variant="faded" className='my-2'>Ingredient</Chip></li>
                            <li><Chip color="danger" variant="faded" className='my-2'>Ingredient</Chip></li>
                            <li><Chip color="danger" variant="faded" className='my-2'>Ingredient</Chip></li>
                            <li><Chip color="danger" variant="faded" className='my-2'>Ingredient</Chip></li>
                            <li><Chip color="danger" variant="faded" className='my-2'>Ingredient</Chip></li>
                            <li><Chip color="danger" variant="faded" className='my-2'>Ingredient</Chip></li>
                        </ul>
                    </div>
                    <div className='flex-1 flex-row gap-4'>
                    <Slider 
                    
                    label="Sentimental  analysis" 
                    showTooltip={true}
                    step={0.01} 
                    formatOptions={{style: "percent"}}
                    maxValue={1}
                    minValue={0}
                    marks={[
                        {
                        value: 0.2,
                        label: "20%",
                        },
                        {
                        value: 0.4,
                        label: "40%",
                        },
                        {
                        value: 0.6,
                        label: "40%",
                        },
                        {
                        value: 0.8,
                        label: "80%",
                        },
                    ]}
                    defaultValue={0.2}
                    className="max-w-md"
                    />
                    <p className='mt-10'>t is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Cont</p>
                    </div>
                </div>
            </div>
            <div className="flex flex-1 w-full divyesh"></div>
        </div>
        </>
    );
};

export default Analysis;
