import React, { useEffect, useState } from "react";
import { useSpring, animated, useSprings } from "react-spring";
import { ArrayInput } from "./ArrayInput";
import { TargetInput } from "./TargetInput";
import { binarySearch, linearSearch } from "@/algorithms";

interface SearchAnimationProps {
  defaultTarget: number;
}

const searchAnimationStyles = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  padding: "20px",
  border: "1px solid #000000",
  borderRadius: "4px",
  width: "400px",
  margin: "0 auto",
};

const tempArray: Array<number> = [
  2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32,
];

export const SearchAnimation: React.FC<SearchAnimationProps> = ({
  defaultTarget,
}) => {
  const [target, setTarget] = useState(defaultTarget);
  const [selectedFunction, setSelectedFunction] = useState("linear");
  const [resultIndex, setResultIndex] = useState(-1);
  const [array, setArray] = useState(tempArray);
  const [timeAndSpace, setTimeAndSpace] = useState({
    time: "O(n)",
    space: "O(1)",
  });

  // Animation for search result
  const resultAnimation = useSpring({
    opacity: resultIndex !== -1 ? 1 : 0,
    transform: `scale(${resultIndex !== -1 ? 1 : 0.5})`,
    color: resultIndex !== -1 ? "#00AA00" : "#FF0000",
    fontSize: resultIndex !== -1 ? "16px" : "16px",
    display: "flex",
    justifyContent: "center",
  });

  const [springs, setSprings] = useSprings(array.length, (index) => ({
    opacity: 1,
    color: "#000000",
    config: { duration: 300 },
  }));

  const handleSearch = () => {
    const searchFunction =
      selectedFunction === "linear" ? linearSearch : binarySearch;
    searchFunction(array, target, setTimeAndSpace, setResultIndex, setSprings);
  };

  const handleTargetChange = (value: number) => {
    setTarget(value);
  };

  const handleArrayChange = (newArray: number[]) => {
    setArray(newArray);
  };

  return (
    <div style={{ marginTop: "10px" }}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "4px",
          alignItems: "center",
        }}
      >
        <p>Time Complexity: {timeAndSpace?.time}</p>
        <p>Space Complexity: {timeAndSpace?.space}</p>
      </div>
      <TargetInput
        defaultTarget={defaultTarget}
        onTargetChange={handleTargetChange}
        array={array}
      />{" "}
      {/* Pass the array state to TargetInput */}
      <ArrayInput array={array} onArrayChange={handleArrayChange} />
      <div
        style={{
          display: "flex",
          gap: "4px",
          marginTop: "6px",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <select
          value={selectedFunction}
          onChange={(e) => setSelectedFunction(e.target.value)}
          style={{ padding: "4px 8px" }}
        >
          <option value="linear">Linear Search</option>
          <option value="binary">Binary Search</option>
        </select>
        <button onClick={handleSearch} style={{ padding: "4px 8px" }}>
          Search
        </button>
      </div>
      <animated.div style={resultAnimation}>
        {resultIndex !== -1 ? `Found at index ${resultIndex}` : "Not Found"}
      </animated.div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          fontSize: "18px",
        }}
      >
        {springs.map((props, i) => (
          <animated.div key={i} style={props}>
            {array[i]}
          </animated.div>
        ))}
      </div>
    </div>
  );
};
