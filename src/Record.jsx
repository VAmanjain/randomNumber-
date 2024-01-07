
import React from 'react';

const Record = ({ generatedNumbers, resetOccurred }) => {
  return (
    <div className='w-full h-full rounded border border-[#171717] p-2 flex justify-between items-center gap-4 '>
      <div className='w-[30%] h-full border border-[#171717] text-3xl flex justify-center items-center font-semibold rounded ' >
        {resetOccurred ? 'N/A' : generatedNumbers.length > 0 ? generatedNumbers[generatedNumbers.length - 1] : 'N/A'}
      </div>
      <div className='w-[70%] h-full border border-[#171717] text-2xl flex justify-center items-center font-semibold rounded ' >
        {resetOccurred ? '' : generatedNumbers.slice(-5).join(' ')}
      </div>
    </div>
  )
}

export default Record;
