import React from 'react';
import { createContext, useContext, useState } from 'react';
// import {useControls} from "leva";

const ModelContext = createContext({});

export const ModelProvider = (props) => {

  // const {Model} = useControls({
  //   Model: {
  //     options: {
  //       "Druid": "druid",
  //       "Table": "table",
  //       "Bench": "bench",
  //     },
  //     onChange:(value) => {
  //       setCurrentModel(value);
  //     }
  //   }
  // })
  const [currentModel, setCurrentModel] = useState('table');

  return (
    <ModelContext.Provider
    value={{currentModel, setCurrentModel}}
    >
      {props.children}
    </ModelContext.Provider>
  )
}

export const useModelContext = () => {
  return useContext(ModelContext);
};