import React from "react";

type COMPLEXITY = {
  time: string;
  space: string;
};

const jumpSearch = (
  arr: number[],
  target: number,
  setTimeAndSpace: React.Dispatch<React.SetStateAction<COMPLEXITY>>,
  setResultIndex: React.Dispatch<React.SetStateAction<number>>,
  setSprings: any
) => {
  setTimeAndSpace({
    time: "O(√n)",
    space: "O(1)",
  });
  setResultIndex(-1);
  setSprings((i: number) => ({
    opacity: 1,
    color: "#000000",
    config: { duration: 300 },
  }));

  const blockSize = Math.floor(Math.sqrt(arr.length));
  let blockStart = 0;
  let blockEnd = blockSize;

  const delay = (ms: number) =>
    new Promise((resolve) => setTimeout(resolve, ms));
  const animate = async () => {
    while (blockEnd < arr.length && arr[blockEnd] < target) {
      blockStart = blockEnd;
      blockEnd += blockSize;
    }

    for (let i = blockStart; i <= Math.min(blockEnd, arr.length - 1); i++) {
      await delay(500);

      setSprings((j: number) => ({
        opacity: j === i ? 1 : 0.5,
        color: arr[j] === target ? "#00AA00" : j === i ? "#FF0000" : "#000000",
      }));

      if (arr[i] === target) {
        setResultIndex(i);
        return;
      }
    }

    setResultIndex(-1);
  };
  animate();
};

export default jumpSearch;
