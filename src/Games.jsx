// Games.js
import React, { useState } from "react";
import Table from "./Table";
import Controller from "./Controller";
import Record from "./Record";

const Games = () => {
  const [generatedNumbers, setGeneratedNumbers] = useState([]);
  const [resetFlag, setResetFlag] = useState(false);

  const addGeneratedNumber = (number) => {
    setGeneratedNumbers((prevNumbers) => [...prevNumbers, number]);
    setResetFlag(false);
  };

  const resetGeneratedNumbers = () => {
    setGeneratedNumbers([]);
    setResetFlag(true); 
  };

  return (
    <div className="w-full min-h-screen md:max-w-[500px] container mx-auto ">
        <h1 className="text-center font-bold text-4xl my-4 " >Tambola</h1>
      <div className="w-full h-auto ">
        <div className="w-screen md:w-full h-[20vh] p-2 ">
          <Record generatedNumbers={generatedNumbers} resetFlag={resetFlag} />
        </div>
        <div className="w-screen md:w-full h-auto p-2 ">
          <Controller
            addGeneratedNumber={addGeneratedNumber}
            resetGeneratedNumbers={resetGeneratedNumbers}
            setGeneratedNumbers={setGeneratedNumbers}
            generatedNumbers={generatedNumbers}
          />
        </div>
        <div className="w-screen md:w-full h-auto p-2  ">
          <Table generatedNumbers={generatedNumbers} />
        </div>
      </div>
    </div>
  );
};

export default Games;
