import React, { useEffect, useState } from "react";
import { SiPanasonic } from "react-icons/si";
import { useLocation } from "react-router-dom";
import logo from '../assets/logo.png'
import { BsInfoCircle, BsUpload } from "react-icons/bs";

function Counter() {
  const [loading, setLoading] = useState(true);
  const location = useLocation()

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 1600);
  }, [location])
  return (
    <>
      {loading &&
        <div className="w-full h-svh flex items-center justify-center">
          <span className="loader"></span>
        </div>
      }
      {!loading &&
        <div className="w-full h-svh flex flex-col items-start justify-start text-black">
          {/* nav */}
          <div className="min-h-[60px] w-full flex items-center justify-between px-10 py-5">
            <div className="flex items-center justify-start gap-1">
              <img src={logo} className="h-9" />
              <p className="text-2xl font-semibold">Countify</p>
            </div>
            <div className="flex items-center justify-end gap-5">
              <button className="text-xl cursor-pointer">
                <BsUpload />
              </button>
              <button className="text-xl cursor-pointer">
                <BsInfoCircle />
              </button>
            </div>
          </div>
          {/* hero */}
          <div className=" w-full h-fit flex flex-col items-center justify-start py-10 gap-3">
            <h1 className="text-4xl font-semibold max-w-[500px] text-center">Count Words Fast, Free, and Effortlessly.</h1>
            <p className="text-base text-black/70 max-w-[400px] text-center">Copy and paste your text or paragraphs in the textbox bellow and click count button</p>
          </div>
          {/* input */}
          <div className="w-full h-fit flex flex-col gap-5 items-center justify-start">
            {/* resul */}
            <div className="w-[95%] max-w-[1000px] min-h-[70px] bg-white rounded-xl flex items-center justify-center py-4 px-10">
              <div className="w-full border-r-[1px] border-black/10 mr-7">
                <h1> Words</h1>
                <p>0</p>
              </div>
              <div className="w-full border-r-[1px] border-black/10 mr-7">
                <h1> Characters</h1>
                <p>0</p>
              </div>
              <div className="w-full border-r-[1px] border-black/10 mr-7">
                <h1> Whitespaces</h1>
                <p>0</p>
              </div>
              <div className="w-full">
                <h1> Lines</h1>
                <p>0</p>
              </div>
            </div>
            {/* input */}
            <form className="w-[95%] max-w-[1000px] mx-auto h-full flex items-start justify-center">
              <textarea type="text" className="w-full h-[400px] bg-white rounded-xl p-10 text-lg resize-none custom-scrollbar" placeholder="Paste your text here.." />
            </form>
          </div>

        </div>
      }
    </>
  );
}

export default Counter;
