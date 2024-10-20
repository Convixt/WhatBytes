'use client'

import React, { useState } from "react";
import Image from "next/image";
import iconHtml from "../public/assets/htmlIcon.svg";
import trophy from "../public/assets/trophy.png";
import notepad from "../public/assets/notebook.png";
import tick from "../public/assets/tick.png";
import ScoreModal from "../components/ScoreModal";
import { BarChart } from "../components/BarChart"; 
import SyllabusAnalysis from "../components/SyllabusAnalysis";
import { PieAnalysis } from "../components/PieAnalysis";



const SkillTest = () => {
  // State to manage the user's statistics
  const [showModal, setShowModal] = useState(false);
  const [statistics, setStatistics] = useState({
    rank: "1",
    score: "10",
    percentile: "30",
  });

  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

  const updateStats = (newStats) => {
    setStatistics({
      rank: newStats.rank || statistics.rank,
      score: newStats.score || statistics.score,
      percentile: newStats.percentile || statistics.percentile,
    });
  };

  return (
    <div className="body flex flex-col mx-8 my-5">
      <div className="headerContent">
        <p className="text-gray-800 font-sans text-lg">Skill Test</p>
      </div>

      <div className="body flex flex-col items-start md:flex-row gap-[30px]">
        <div className="graph_Statistics flex flex-col items-center">

            {/*----------------------- Update Section ----------------------*/}


            
          <div className="update border-gray-300 border-2 my-3 rounded-xl  p-3 py-7 flex flex-row mr-[10px] items-center gap-3 md:gap-7">
            <div className="htmlIcon">
              <Image src={iconHtml} width={50} height={50} alt="iconHtml" />
            </div>
            <div className="testDetails flex flex-col">
              <p className="text-black font-semibold text-lg">Hyper Text Markup Language</p>
              <p className="text-gray-800 font-sans text-md">
                Question: 08 | Duration: 15 mins | Submitted on 20 Oct 2024
              </p>
            </div>
            <div className="button rounded-md bg-blue-950 hover:bg-blue-600 p-2 px-6 cursor-pointer" onClick={openModal}>
              <p className="text-white font-semibold text-sm ">Update</p>
            </div>
          </div>

          <div className="quickStats border-gray-300 border-2 my-3 rounded-xl p-5 flex flex-col mr-[10px] md:mr-0 items-start gap-3 w-[430px] md:w-auto">
            <h1 className="text-black font-bold text-lg ">Quick Statistics</h1>
            <div className="stats flex flex-row gap-5">
              <div className="flex flex-col md:flex-row trophy gap-3 items-center">
                <div className="trophyIcon bg-gray-300 w-15 h-15 rounded-full flex items-center justify-center p-5">
                  <Image src={trophy} width={20} height={20} alt="trophy" />
                </div>
                <div className="flex flex-col items-center gap-1">
                  <p className="font-bold text-2xl md:text-xl">{statistics.rank}</p>
                  <p className="text-gray-400 text-sm">YOUR RANK</p>
                </div>
              </div>

              <div className="bg-gray-300 w-[1px] h-auto md:h-[90px]"></div>
              <div className="flex flex-col md:flex-row trophy gap-3 items-center">
                <div className="trophyIcon bg-gray-300 w-15 h-15 rounded-full flex items-center justify-center p-5">
                  <Image src={notepad} width={20} height={20} alt="notepad" />
                </div>
                <div className="flex flex-col items-center gap-1">
                  <p className="font-bold text-xl">{statistics.percentile}%</p>
                  <p className="text-gray-400 text-sm">PERCENTILE</p>
                </div>
              </div>

              <div className="bg-gray-300 w-[1px] md:h-[90px]"></div>
              <div className="flex flex-col md:flex-row trophy gap-3 items-center">
                <div className="trophyIcon bg-gray-300 w-15 h-15 rounded-full flex items-center justify-center p-5">
                  <Image src={tick} width={20} height={20} alt="tick" />
                </div>
                <div className="flex flex-col items-center gap-1">
                  <p className="font-bold text-xl">{statistics.score}/15</p>
                  <p className="text-gray-400 text-xs md:text-sm">CORRECT ANSWERS</p>
                </div>
              </div>
            </div>
          </div>

          <div className="BarChart w-[400px] md:w-[655px]">
           
            <BarChart userPercentile={statistics.percentile} />
          </div>

          <ScoreModal showModal={showModal} closeModal={closeModal} updateStats={updateStats} />
        </div>

        {/*---------------- Section 2------------------- */}

        <div className=" flex flex-col items-start gap-3">
            <div className="syllabus-analysis  w-[420px] md:w-auto border-gray-300 border-2 my-3 rounded-xl pt-3  pb-[60px]">
    
        <SyllabusAnalysis />
        </div>

        {/*--------------- Pie Chart--------------- */}
            <div className="syllabus-analysis  border-gray-300 border-2 my-3 rounded-xl pt-3  pb-[60px]">
                
            <PieAnalysis score={parseInt(statistics.score)} /> 

 

        
        </div>


        </div>




      </div>
    </div>
  );
};

export default SkillTest;
