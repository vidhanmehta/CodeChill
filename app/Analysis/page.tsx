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
};

export default Analysis;
