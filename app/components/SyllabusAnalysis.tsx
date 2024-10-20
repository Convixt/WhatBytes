import React from 'react'
import ProgressBar from '@ramonak/react-progress-bar';

const SyllabusAnalysis = () => {
  return (
    <div className='flex flex-col justify-start items-start px-5 text-gray-500 w-[400px] md:w-[440px]  '>
        <h1 className='text-xl text-black font-bold '>Syllabus Wise Analysis</h1>

        <div className='flex flex-col gap-2 mt-[40px] '>
         <p className='text-5'>HTML Tools , Forms and History</p>
         <div className='flex justify-between items-center '>

        <ProgressBar  bgColor='#0D92F4' width='320px' baseBgColor='#BCF2F6' height='7px' labelAlignment="outside"  completed={'80'}/>
        <p className='text-md text-[#0D92F4] font-bold'>80%</p>
        </div>
        </div>
        <div className='flex flex-col gap-2 mt-[40px]'>
         <p className='text-5'>Tags and References in HTML</p>
         <div className='flex justify-between items-center '>

        <ProgressBar  bgColor='#FF9D3D' width='320px' baseBgColor='#FFE6A5' height='7px' labelAlignment="outside"  completed={'60'}/>
        <p className='text-md text-[#FF9D3D] font-bold'>60%</p>
        </div>
        </div>
        <div className='flex flex-col gap-2 mt-[40px]'>
         <p className='text-5'>Tables and References in HTML</p>
         <div className='flex justify-between items-center '>

        <ProgressBar  bgColor='#E4003A' width='320px' baseBgColor='#FFF5E0' height='7px' labelAlignment="outside"  completed={'24'}/>
        <p className='text-md text-[#E4003A] font-bold'>24%</p>
        </div>
        </div>
        <div className='flex flex-col gap-2 mt-[40px]'>
         <p className='text-5'>Tables and CSS Basics</p>
         <div className='flex justify-between items-center '>

        <ProgressBar  bgColor='#06D001' width='320px' baseBgColor='#ECFFE6' height='7px' labelAlignment="outside"  completed={'96'}/>
        <p className='text-md text-[#06D001] font-bold'>96%</p>
        </div>
        </div>

    
        

      
    </div>
  )
}

export default SyllabusAnalysis
