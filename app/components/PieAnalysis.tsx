"use client";

import React from "react";
import { PieChart, Pie, Cell, Label } from "recharts";


export function PieAnalysis({ score }) {
  const data = [
    { name: "Scored", value: score },
    { name: "Remaining", value: 15 - score },
  ];

  const COLORS = ["#007bff", "#e0e0e0"]; // Blue for score, Gray for remaining

  return (
    
     <div className="items-center px-5">


      <div className="flex justify-between items-center">

      <h1 className="text-black font-bold text-10">Question Analysis</h1>
      <p className="text-[#007bff] font-bold text-sm">{score}/15</p>
      </div>
      <div className="paraGraph">
        <p><span className="font-bold text-black">You scored {score} questions correct out of 15.</span> However it<br />  still needs some improvement</p>
      </div>
      <PieChart className="ml-[90px]" width={200} height={200}>
        <Pie
          data={data}
          innerRadius={50}
          outerRadius={80}
          fill="#8884d8"
          paddingAngle={0}
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index]} />
          ))}
            <Label
          value={`${score}/15`}
          position="center"
          fill="#007bff"
          style={{ fontSize: "20px", fontWeight: "bold" }}
        />
        </Pie>
      </PieChart>
      </div>

      
    
  );
}
