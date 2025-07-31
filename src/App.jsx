import React, { useEffect, useState } from "react";
import EditMatrix from "./components/EditMatrix";

export default function App() {
  const [str1, setStr1] = useState("");
  const [str2, setStr2] = useState("");
  const [matrix, setMatrix] = useState(null);
  const [distance, setDistance] = useState(null);
  const [message, SetMessage] = useState("");

  const generateMatrix = () => {
    if (str1 == "" || str2 == "") {
      return SetMessage("Please enter the string");
    }
    const m = str1.length;
    const n = str2.length;
    const dp = Array.from({ length: m + 1 }, () => Array(n + 1).fill(-1));

    for (let i = 0; i <= m; i++) dp[i][0] = i;
    for (let j = 0; j <= n; j++) dp[0][j] = j;

    for (let i = 1; i <= m; i++) {
      for (let j = 1; j <= n; j++) {
        const cost = str1[i - 1] === str2[j - 1] ? 0 : 1;
        dp[i][j] = Math.min(
          dp[i - 1][j] + 1,
          dp[i][j - 1] + 1,
          dp[i - 1][j - 1] + cost
        );
      }
    }
    SetMessage("Levenshtein Matrix is generated");
    setMatrix(dp);
    setDistance(dp[m][n]);
  };

  return (
    <div className="min-h-screen bg-radial from-sky-200 via-blue-200 to-indigo-300  p-4 flex flex-col items-center">
      <h1 className="text-2xl font-bold mb-4">Levenshtein Distance</h1>

      <div className="flex flex-col md:flex-row gap-4 mb-4">
        <input
          type="text"
          className="p-2 border rounded"
          placeholder="Enter first string"
          value={str1}
          onChange={(e) => setStr1(e.target.value)}
        />
        <input
          type="text"
          className="p-2 border rounded"
          placeholder="Enter second string"
          value={str2}
          onChange={(e) => setStr2(e.target.value)}
        />
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-800"
          onClick={generateMatrix}
        >
          Generate Matrix
        </button>
      </div>
      {message && <p className="text-red-400 text-lg">{message}</p>}
      {matrix && (
        <>
          <EditMatrix matrix={matrix} str1={str1} str2={str2} />
          <div className="mt-4 text-lg font-semibold">
            Levenshtein Distance: <span className="text-blue-600">{distance}</span>
          </div>
        </>
      )}
    </div>
  );
}
