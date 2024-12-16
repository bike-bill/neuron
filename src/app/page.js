"use client";

import { useEffect } from 'react';
import * as d3 from 'd3';
const R = require('ramda');

export default function Home() {
  useEffect(() => {
    const svg = d3.select("#plot");
    svg.selectAll("circle")
      .data(randomPoints)
      .enter()
      .append("circle")
      .attr("cx", d => d.x * 250 + 250) // scale and center the points
      .attr("cy", d => d.y * 250 + 250) // scale and center the points
      .attr("r", 5)
      .attr("fill", "blue");
  }, []);

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <svg id="plot" width="500" height="500" className="border border-black"></svg>
      </main>
    </div>
  );
}

//create a function that generates 100 random points
const rand = (high, low) => Math.random() * (high - low) + low;

const randomPoints = R.range(0,100).map(_ => ({ 
  x: rand(-1, 1), 
  y: rand(-1, 1)
 }));


