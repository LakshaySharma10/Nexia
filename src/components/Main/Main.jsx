// // import React, { useContext } from 'react'
// // import './Main.css'
// // import { assets } from '../../assets/assets'
// // import { Context } from '../../context/context'


// // const Main = () => {

// //     const { onSent, recentprompt, showresult, loading, resultdata, setInput, input } = useContext(Context);

// //     return (
// //         <div className='main'>
// //             <div className="nav">
// //                 <p>Nexia</p>
// //                 <img src={assets.user_icon} alt="" />
// //             </div>
// //             <div className="main-container">
// //                 {!showresult ? (
// //                     <>
// //                         <div className="greet">
// //                             <p><span>Hello, Lakshay.</span></p>
// //                             <p>How can I help you today?</p>
// //                         </div>
// //                         <div className="cards">
// //                             <div className="card">
// //                                 <p>How does React.js differ from other JavaScript frameworks like Angular and Vue.js?</p>
// //                                 <img className='q1' src={assets.react_icon} alt="React Icon" />
// //                             </div>
// //                             <div className="card">
// //                                 <p>What are some tools or software used for automated progress tracking and reporting in project management?</p>
// //                                 <img className='q2' src={assets.line_icon} alt="Line Icon" />
// //                             </div>
// //                             <div className="card">
// //                                 <p>How does a neural network learn from data?</p>
// //                                 <img className='q3' src={assets.browser_icon} alt="Browser Icon" />
// //                             </div>
// //                             <div className="card">
// //                                 <p>How do you balance short-term priorities with long-term vision when designing a roadmap?</p>
// //                                 <img className='q4' src={assets.hacker_icon} alt="Hacker Icon" />
// //                             </div>
// //                         </div>
// //                     </>
// //                 ):
// //                 <div className='result'>
// //                     <div className="result-title">
// //                         <img src={assets.user_icon} alt="" />
// //                         <p>{recentprompt}</p>
// //                     </div>
// //                     <div className="result-data">
// //                         <img src={assets.gemini_icon} alt="" />
// //                         <p dangerouslySetInnerHtml={{__html:resultdata}}></p>
// //                     </div>
// //                 </div>
// //                 }


// //                     < div className="main-bottom">
// //                 <div className="searchbox">
// //                     <input onChange={(e) => setInput(e.target.value)} type="text" placeholder='Enter a prompt here' />
// //                     <div>
// //                         <img src={assets.gallery_icon} alt="" />
// //                         <img src={assets.mic_icon} alt="" />
// //                         <img onClick={() => onSent()} src={assets.send_icon} alt="" />
// //                     </div>
// //                 </div>
// //                 <p className="bottom-info">While Nexia endeavors to provide valuable assistance, it's essential to independently verify critical information. Exercise caution and seek professional advice when necessary.</p>
// //             </div>
// //         </div>

// //         </div >
// //     )
// // }

// // export default Main


import React, { useContext } from 'react';
import './Main.css';
import { assets } from '../../assets/assets';
import { Context } from '../../context/context';

const Main = () => {
  const { onSent, recentprompt, showresult, loading, resultdata, setInput, input } = useContext(Context);

  return (
    <div className='main'>
      <div className="nav">
        <p>Nexia</p>
        <img src={assets.user_icon} alt="User Icon" />
      </div>
      <div className="main-container">
        {!showresult ? (
          <>
            <div className="greet">
              <p><span>Hello, Lakshay.</span></p>
              <p>How can I help you today?</p>
            </div>
            <div className="cards">
              <div className="card">
                <p>How does React.js differ from other JavaScript frameworks like Angular and Vue.js?</p>
                <img className='q1' src={assets.react_icon} alt="React Icon" />
              </div>
              <div className="card">
                <p>What are some tools or software used for automated progress tracking and reporting in project management?</p>
                <img className='q2' src={assets.line_icon} alt="Line Icon" />
              </div>
              <div className="card">
                <p>How does a neural network learn from data?</p>
                <img className='q3' src={assets.browser_icon} alt="Browser Icon" />
              </div>
              <div className="card">
                <p>How do you balance short-term priorities with long-term vision when designing a roadmap?</p>
                <img className='q4' src={assets.hacker_icon} alt="Hacker Icon" />
              </div>
            </div>
          </>
        ) : (
          <div className='result'>
            <div className="result-title">
              <img src={assets.user_icon} alt="User Icon" />
              <p>{recentprompt}</p>
            </div>
            <div className="result-data">
              <img src={assets.gemini_icon} alt="Gemini Icon" />
              {loading
              ?<div className='loader'>
                <hr />
                <hr />
                <hr />
              </div>
              :<p dangerouslySetInnerHTML={{ __html: resultdata }}></p>
              }
              
            </div>
          </div>
        )}
        
        <div className="main-bottom">
          <div className="searchbox">
            <input
              type="text"
              placeholder="Enter a prompt here"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <div>
              <img src={assets.gallery_icon} alt="Gallery Icon" />
              <img src={assets.mic_icon} alt="Mic Icon" />
              <img onClick={() => onSent(input)} src={assets.send_icon} alt="Send Icon" />
            </div>
          </div>
          <p className="bottom-info">
            While Nexia endeavors to provide valuable assistance, it's essential to independently verify critical information. Exercise caution and seek professional advice when necessary.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Main;


