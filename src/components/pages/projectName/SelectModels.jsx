import React, { useState } from 'react'
import { useModelContext } from '../../../context/ModelContext';
import Bench from "../../../assets/images/bench.png";
import Desk from "../../../assets/images/desk.png";


const SelectModels = () => {
const {currentModel, setCurrentModel} = useModelContext();
const handleTable = () => {
    setCurrentModel('table');
    console.log(currentModel);
}

const handleBench = () => {
    setCurrentModel('bench');
    console.log(currentModel);
}

  return (
    <div>
        <h2 className=' text-xl text-black'>Select Models</h2>
        <div className=' size-32 border-solid border-4 p-2'>
            <img  src={Desk} onClick={handleTable}/>
        </div>
        <br/>
        <div className=' size-32 border-solid border-4 p-2'>
            <img src={Bench} onClick={handleBench}/>
        </div>
    </div>
  )
}

export default SelectModels