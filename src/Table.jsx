import React from "react";

const Table = ({ generatedNumbers }) => {
  const isGenerated = (num) => {
    return generatedNumbers.includes(num);
  };

  return (
    <div className="w-full h-auto border border-[#171717] rounded ">
      <div className="grid grid-cols-9 grid-rows-10 gap-2 p-2">
        {Array.from({ length: 90 }, (_, i) => i + 1).map((num) => (
          <div
            key={num}
            className={`w-7 h-7 flex justify-center items-center border border-[#171717] rounded-full ${
              isGenerated(num) ? "bg-green-500 text-white " : ""
            }`}
          >
            {num}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Table;
