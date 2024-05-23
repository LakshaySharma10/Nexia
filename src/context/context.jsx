// import { createContext, useState } from "react";
// import run from "../config/nexia";

// export const Context= createContext();

// const ContextProvider=(props)=>{
//     const [input,setInput]=useState("");
//     const [recentprompt,setRecentPrompt]=useState("");
//     const [previousprompt,setPreviousPrompt]=useState([]);
//     const [showresult,setShowResult]=useState(false);
//     const [loading,setLoading]=useState(false);
//     const [resultdata,setResultData]=useState("");

//     const onSent=async(prompt)=>{
        
//         setResultData("")
//         setLoading(true)
//         setShowResult(true)
//         setRecentPrompt(input)
//         const response = await run(input)
//         setResultData(response)
//         setLoading(false)
//         setInput("")
//     }

    

//     const ContextValue={
//         previousprompt,
//         setPreviousPrompt,
//         onSent,
//         setRecentPrompt,
//         recentprompt,
//         showresult,
//         loading,
//         resultdata,
//         input,
//         setInput
//     }

//     return (
//         <Context.Provider value={ContextValue}>
//             {props.children}
//         </Context.Provider>
//     )
// }

// export default ContextProvider
import React, { createContext, useState } from "react";
import run from "../config/nexia";

export const Context = createContext();

const ContextProvider = ({ children }) => {
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [showresult, setShowresult] = useState(false);
  const [resultdata, setResultdata] = useState("");
  const [recentprompt, setRecentprompt] = useState("");

  const delayPara = (index, nextWord) => {
    setTimeout(() => {
      setResultdata(prevData => prevData + nextWord);
    }, index * 100); // Adjust delay time (milliseconds)
  };

  const onSent = async (prompt) => {
    setResultdata("");
    setLoading(true);
    setRecentprompt(prompt);
    try {
      const response = await run(prompt); // Assuming run() returns the response directly
      const responseArray = response.split("**");
      let newResponse = "";
      for (let i = 0; i < responseArray.length; i++) {
        if (i === 0 || i % 2 !== 1) {
          newResponse += responseArray[i];
        } else {
          newResponse += "\n<b>" + responseArray[i] + "</b>";
        }
      }
      const words = newResponse.split(/\s+/);
      words.forEach((word, index) => delayPara(index, word + " "));
      setShowresult(true);
    } finally {
      setLoading(false);
    }
  };

  const ContextValue = {
    input,
    setInput,
    loading,
    showresult,
    resultdata,
    recentprompt,
    onSent,
  };

  return (
    <Context.Provider value={ContextValue}>
      {children}
    </Context.Provider>
  );
};

export default ContextProvider;






