import Image from 'next/image';
import React from 'react';


export default function Categaries  () {
    return (
        <div className='grid grid-cols-2 gap-5 app-container'>
           <div className='grid gap-5'>
           <div className='relative'>
            <Image src={'/img1.jpg'} width={200} height={2000} alt='img' className='w-full h-[45vh] object-cover'/>
            <div className='absolute top-0 w-full h-full flex items-center justify-center'>
                <h2 className='text-white text-3xl font-normal'>Formal Women</h2>
            </div>
        </div>
        <div className='relative'>
            <Image src={'/img2.jpg'} width={200} height={2000} alt='img' className='w-full h-[45vh] object-cover'/>
            <div className='absolute top-0 w-full h-full flex items-center justify-center'>
                <h2 className='text-white text-3xl font-normal'>Formal Men</h2>
            </div>
        </div>
            </div> 
            <div>
            <div className='relative'>
            <Image src={'/img3.jpg'} width={200} height={2000} alt='img' className='w-full h-[93vh]'/>
            <div className='absolute top-0 w-full h-full flex items-center justify-center'>
                <h2 className='text-white text-3xl font-normal'>Casual Style</h2>
            </div>
        </div>
            </div>
        </div>
    );
}


