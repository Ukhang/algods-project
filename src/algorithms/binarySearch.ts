import React from "react";

type COMPLEXITY = {
  time: string;
  space: string;
};

const binarySearch = (
  arr: number[],
  target: number,
  setTimeAndSpace: React.Dispatch<React.SetStateAction<COMPLEXITY>>,
  setResultIndex: React.Dispatch<React.SetStateAction<number>>,
  setSprings: any
) => {
  setTimeAndSpace({
    time: "O(log n)",
    space: "O(1)",
  });
  setResultIndex(-1);
  setSprings((i: number) => ({
    opacity: 1,
    color: "#000000",
    config: { duration: 300 },
  }));

  // const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));
  const delay = (ms: number) =>
    new Promise((resolve) => setTimeout(resolve, ms));
  const animate = async () => {
    let left = 0;
    let right = arr.length - 1;
    while (left <= right) {
      const mid = Math.floor((left + right) / 2);
      await delay(500);
      setSprings((j: number) => ({
        opacity: j === mid ? 1 : 0.5,
        color:
          arr[j] === target ? "#00AA00" : j === mid ? "#FF0000" : "#000000",
      }));

      if (arr[mid] === target) {
        setResultIndex(mid);
        return;
      } else if (arr[mid] < target) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
    setResultIndex(-1);
  };

  animate();
};

export default binarySearch;