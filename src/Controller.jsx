import React from "react";
import { TbPlayerTrackNextFilled } from "react-icons/tb";
import { MdOutlineRestartAlt } from "react-icons/md";

const Controller = ({ addGeneratedNumber, generatedNumbers, setGeneratedNumbers }) => {
 async function  generateRandomNumber  () {
    const availableNumbers = Array.from({ length: 90 }, (_, i) => i + 1);
    const remainingNumbers = availableNumbers.filter(
      (num) => !generatedNumbers.includes(num)
    );

    if (remainingNumbers.length === 0) {
      alert('All numbers have been generated');
      return;
    }

    const randomIndex = Math.floor(Math.random() * remainingNumbers.length);
    const randomNumber = remainingNumbers[randomIndex];

    addGeneratedNumber(randomNumber);

  
  await  speakNumber(randomNumber);
  };

  const restartGame = () => {
    setGeneratedNumbers([]); 
  };


  const speakNumber = (randomNumber) => {
    const lastNumber =randomNumber;
    if (!window.speechSynthesis) {
      alert('Speech synthesis is not supported in your browser');
      return;
    }

    const speech = new SpeechSynthesisUtterance();
    speech.text = lastNumber ? lastNumber.toString() : "No number generated yet";

    window.speechSynthesis.speak(speech);
  };

  return (
    <div className="w-full h-full border border-[#171717] flex justify-around items-center p-4 rounded  ">
      <div className="w-[40%] h-full flex justify-center items-center rounded ">
        <button type="submit" >
          <MdOutlineRestartAlt size={40} onClick={restartGame} />
        </button>
      </div>
      <div className="w-[40%] h-full  flex justify-center items-center rounded ">
        <button type="submit">
          <TbPlayerTrackNextFilled size={40} onClick={generateRandomNumber
          } />
        </button>
      </div>
      <div></div>
    </div>
  );
};

export default Controller;
