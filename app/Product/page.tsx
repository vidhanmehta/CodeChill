"use client"

import InputForm from "@/components/Input/InputForm";
import { Button , Chip} from "@nextui-org/react";
import { useChipsStore } from "@/store/useChipsStore";
import pic from '@/public/1.svg'
import Image from "next/image";


export default function Product( ) {
    const chips = useChipsStore((state) => state.chips);
     const handleRemoveChip = (index: number) => {
    useChipsStore.setState((state) => ({ chips: state.chips.filter((_, i) => i !== index) }));};
   
    
    return (
        <>
    <section className="relative lg:min-h-[1000px]  pt-24 pb-10 sm:pt-32 sm:pb-16 lg:pb-24">
       <div className="px-4 pt-6 mx-auto max-w-7xl sm:px-6 lg:px-8 relative z-20">
      

           
            <div className="max-w-xl mx-auto text-center">
                <h1 className="text-4xl font-bold sm:text-6xl">
                    <span className="text-[#110B09]"> IsWiseChoice? </span>
                 </h1>
                
                <h3 className="mt-5 text-3xl font-bold text-[#BA7969] sm:text-3xl"> Securely Sorted , Wisely Chosen  </h3>

              <div className="flex justify-center pt-4 mx-10">
                <InputForm />
                </div>           
         <div style={{ marginTop: '30px', display:'flex', gap:'16px'  }}>
            {chips.map((chip, index) => (
          <div key={index} style={{ display: 'flex', alignItems: 'center' }}>
          <Chip size="lg"  variant="faded"  radius="lg" onClose={() => handleRemoveChip(index)} >{chip}</Chip>
           </div>
              ))}
           </div>
         </div>
        </div>
       
    </section>
        </>
    );
}