import React from "react";

export default function EditMatrix({ matrix, str1, str2 }) {
  return (
    <div className="overflow-auto border mt-4">
      <table className="table-auto border-collapse">
        <thead>
          <tr>
            <th className="border px-2 py-1 bg-sky-100"> </th>
            <th className="border px-2 py-1 bg-sky-100">Ø</th>
            {str2.split("").map((char, idx) => (
              <th key={idx} className="border px-2 py-1 bg-sky-100">
                {char}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {matrix.map((row, i) => (
            <tr key={i}>
              <th className="border px-2 py-1 bg-sky-100">
                {i === 0 ? "Ø" : str1[i - 1]}
              </th>
              {row.map((cell, j) => (
                <td key={j} className="border px-2 py-1 text-center">
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
