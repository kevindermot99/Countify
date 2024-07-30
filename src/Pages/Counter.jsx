import React, { useEffect, useState } from "react";
import { SiPanasonic } from "react-icons/si";
import { Link, useLocation } from "react-router-dom";
import logo from '../assets/logo.png'
import { BsInfoCircle, BsUpload } from "react-icons/bs";

function Counter() {
  const [loading, setLoading] = useState(true);
  const location = useLocation()
  const [counting, setCounting] = useState(false)
  const [wordCount, setWordCount] = useState(0)
  const [characterCount, setCharacterCount] = useState(0)
  const [whiteSpaceCount, setWhiteSpaceCount] = useState(0)
  const [linesCount, setLinesCount] = useState(0)
  const [text, setText] = useState('')

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 1600);
  }, [location])

  const submitText = async (e) => {
    const resultSection = document.getElementById('result-section')
    e.preventDefault()
    setCounting(true)
    console.log(text)
    const words = await text.trim().split(/\s+/).length;
    const spaces = await (text.match(/\s/g) || []).length;
    const lines = await (text.split(/\r?\n/)).length;
    if(words && spaces && lines){
      setWordCount(words)
      setCharacterCount(text.length)
      setWhiteSpaceCount(spaces)
      setLinesCount(lines)
    }

    setTimeout(() => {
      setCounting(false)
      resultSection.scrollIntoView({ behavior: 'smooth' });
    }, 1000);
  }
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
            {/* result */}
            <div id="result-section" className=" scroll-m-[50px] w-[95%] max-w-[1000px] min-h-[70px] bg-white rounded-xl flex items-center justify-center py-4 px-10">
              <div className="w-full border-r-[1px] border-black/10 mr-7">
                <h1> Words</h1>
                <p>
                  {counting ? <span className="w-[80px] h-[24px] flex rounded-sm bg-gradient-to-tl from-stone-300/50 via-stone-200 to-stone-100 animate-pulse"></span> : <span>{wordCount}</span>}
                </p>
              </div>
              <div className="w-full border-r-[1px] border-black/10 mr-7">
                <h1> Characters</h1>
                <p>
                  {counting ? <span className="w-[80px] h-[24px] flex rounded-sm bg-gradient-to-tl from-stone-300/50 via-stone-200 to-stone-100 animate-pulse"></span> : <span>{characterCount}</span>}
                </p>
              </div>
              <div className="w-full border-r-[1px] border-black/10 mr-7">
                <h1> Whitespaces</h1>
                <p>
                  {counting ? <span className="w-[80px] h-[24px] flex rounded-sm bg-gradient-to-tl from-stone-300/50 via-stone-200 to-stone-100 animate-pulse"></span> : <span>{whiteSpaceCount}</span>}
                </p>
              </div>
              <div className="w-full">
                <h1> Lines</h1>
                <p>
                  {counting ? <span className="w-[80px] h-[24px] flex rounded-sm bg-gradient-to-tl from-stone-300/50 via-stone-200 to-stone-100 animate-pulse"></span> : <span>{linesCount}</span>}
                </p>
              </div>
            </div>
            {/* input */}
            <form onSubmit={submitText} className="w-[95%] max-w-[1000px] mx-auto h-full flex items-start justify-start flex-col">
              <textarea onChange={(e) => setText(e.target.value)} type="text" required className="w-full h-[400px] bg-white rounded-xl p-10 text-lg resize-none custom-scrollbar" placeholder="Paste your text here.." />
              <div className="flex items-center justify-start mt-5 gap-5">
                <button type="submit" className="h-[48px] select-none min-w-[140px] rounded-xl text-base font-semibold px-5 bg-black text-white transition active:scale-95">
                  {counting ? (
                    <div className="flex items-center justify-center gap-2">
                      <span className="button-loader"></span>
                      <p>One sec!</p>
                    </div>
                  ) : (
                    <p>Count</p>
                  )}
                </button>
                <button type="reset" className="h-[48px] select-none min-w-[140px] rounded-xl text-base font-semibold px-5 bg-stone-300/60 hover:bg-stone-400/70 transition active:scale-95 text-black">
                  Clear
                </button>
              </div>
            </form>
            {/* footer */}
            <div className="mt-5 text-sm py-3 text-black/40 flex items-center justify-center">
              Countify does not store your data. By using this tool, you agree to our <Link to={'/'} className="hover:underline text-black/70 pl-1">Terms of Service</Link>
            </div>
          </div>

        </div>
      }
    </>
  );
}

export default Counter;
