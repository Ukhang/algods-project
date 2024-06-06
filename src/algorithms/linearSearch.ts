import React from "react";

type COMPLEXITY = {
  time: string;
  space: string;
};

const linearSearch = (
  arr: number[],
  target: number,
  setTimeAndSpace: React.Dispatch<React.SetStateAction<COMPLEXITY>>,
  setResultIndex: React.Dispatch<React.SetStateAction<number>>,
  setSprings: any
) => {
  setTimeAndSpace({
    time: "O(n)",
    space: "O(1)",
  });
  setResultIndex(-1);
  setSprings((i: number) => ({
    opacity: 1,
    color: "#000000", // Set default color to black
    config: { duration: 300 },
  }));
  const delay = (ms: number) =>
    new Promise((resolve) => setTimeout(resolve, ms));
  const animate = async () => {
    for (let i = 0; i < arr.length; i++) {
      await delay(500); // Adjust the delay time as needed
      setSprings((j: number) => ({
        opacity: j === i ? 1 : 0.5,
        color: arr[j] === target ? "#00AA00" : j === i ? "#FF0000" : "#000000", // Set color based on conditions
      }));
      if (arr[i] === target) {
        setResultIndex(i);
        return;
      }
    }
    setResultIndex(-1); // If not found, set resultIndex to -1
  };
  animate();
};

export default linearSearch;