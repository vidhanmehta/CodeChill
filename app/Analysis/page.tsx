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
        <div className="flex h-screen background__container w-screen ">
            <div className="flex-row flex-1 w-full px-10 py-8 pragyam">
                <h2  className='text-3xl font-semibold text-rose-700 bg-[#eec0c0] h-fit w-fit p-2 -rotate-12 mt-4'>Not a Wise Choice!</h2>
                <div className='flex mt-6 ml-8 w-full justify-evenly'>
                    <h1 className='text-4xl border-b-4 border-[#BA7969] mt-4 '>Product Name</h1>
                   
                    <CircularProgress
                       color="danger"
                        label="Safety Score"
                        size="lg"
                        
                        value={70}
                       
                        showValueLabel={true}
                        />
                </div>
                <p className='text-md mt-4 text-[0.8rm] analysis__container font-semibold'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
                <div className='flex gap-6 pt-5'>
                    <div className="flex-1 flex-row mt-4  pt-4">
                        <h4>Ingredients</h4>
                        <ul className=' flex flex-wrap gap-2 analysis__container items-start pt-16 w-full'>
                        <div className="flex flex-col shadow__input"></div>
                            <li><Chip color="danger" variant="shadow" className='my-2'>Ingredient</Chip></li>
                            <li><Chip color="danger" variant="faded" className='my-2'>Ingredient</Chip></li>
                            <li><Chip color="danger" variant="shadow" className='my-2'>Ingredient</Chip></li>
                            <li><Chip color="danger" variant="faded" className='my-2'>Ingredient</Chip></li>
                            <li><Chip color="danger" variant="shadow" className='my-2'>Ingredient</Chip></li>
                            <li><Chip color="danger" variant="faded" className='my-2'>Ingredient</Chip></li>
                            <li><Chip color="danger" variant="shadow" className='my-2'>Ingredient</Chip></li>
                            <li><Chip color="danger" variant="faded" className='my-2'>Ingredient</Chip></li>
                            <li><Chip color="danger" variant="shadow" className='my-2'>Ingredient</Chip></li>
                            
                        </ul>
                    </div>
                    <div className='flex-1 flex-row gap-4 pt-8'>
                        
                    <Slider 
                    
                    label="Sentimental  analysis" 
                    color="foreground"
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
                    <p className='mt-10 analysis__container'>t is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Cont</p>
                    </div>
                </div>
            </div>
            <div className="flex flex-1 w-full divyesh"></div>
        </div>
        <Recomended />
      
       
        </> 
    );
};

export default Analysis;
