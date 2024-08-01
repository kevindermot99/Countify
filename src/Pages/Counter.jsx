import React, { useEffect, useState } from "react";
import { SiPanasonic } from "react-icons/si";
import { Link, useLocation } from "react-router-dom";
import logo from '../assets/logo.png'
import { BsInfoCircle, BsUpload } from "react-icons/bs";
import pdfToText from 'react-pdftotext'
import { LuUpload } from "react-icons/lu";
import { MdOutlineFileUpload } from "react-icons/md";
import { AiOutlineClose } from "react-icons/ai";

function Counter() {
  const [loading, setLoading] = useState(true);
  const location = useLocation()
  const [counting, setCounting] = useState(false)
  const [wordCount, setWordCount] = useState(0)
  const [characterCount, setCharacterCount] = useState(0)
  const [whiteSpaceCount, setWhiteSpaceCount] = useState(0)
  const [linesCount, setLinesCount] = useState(0)
  const [sentencesCount, setSentencesCount] = useState(0)
  const [text, setText] = useState('')
  const [showinfo, setShowInfo] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 1600);
  }, [location])

  function extractText(event) {
    const file = event.target.files[0]
    pdfToText(file)
      .then(text => setText(text))
      .catch(error => console.error("Failed to extract text from pdf"))

      // console.log(text)
  }


  const submitText = (e) => {
    const resultSection = document.getElementById('result-section')
    e.preventDefault()
    setCounting(true)
    console.log(text)

    const words = text.trim().split(/\s+/).length;
    const spaces = (text.match(/\s/g) || []).length;
    const lines = (text.split(/\r?\n/)).length;
    const sentences = (text.match(/(?:[.!?](?!\w))|(?:[.!?](?=\s))/g) || []).length;

    setWordCount(words)
    setCharacterCount(text.length)
    setWhiteSpaceCount(spaces)
    setLinesCount(lines)
    setSentencesCount(sentences)

    setTimeout(() => {
      setCounting(false)
      resultSection.scrollIntoView({ behavior: 'smooth' });
    }, 900);

  }

  const clearEverything = () => {
    setText('')
    setWordCount(0)
    setCharacterCount(0)
    setWhiteSpaceCount(0)
    setLinesCount(0)
    setSentencesCount(0)
  }

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = async (event) => {
        const pdfData = new Uint8Array(event.target.result);
        await extractTextFromPDF(pdfData);
      };
      reader.readAsArrayBuffer(file);
    }
  };
  return (
    <>
      {loading &&
        <div className="w-full h-svh flex items-center justify-center">
          <span className="loader"></span>
        </div>
      }
      {!loading &&
        <div className="w-full h-svh flex flex-col items-start justify-start text-black relative">
          {/* info fixed */}
          <div className={` w-full h-svh bg-body/95 backdrop-blur-md py-5 px-10 fixed top-0 right-0 ${showinfo ? 'transition duration-300 z-10' : 'translate-y-20 -z-10 opacity-0 pointer-events-none'}`}>
            <button onClick={() => setShowInfo(false)} className="absolute top-7 right-10 max-md:right-6 bg-stone-200 rounded-full p-2">
              <AiOutlineClose className="text-lg" />
            </button>
            <div className="flex-1 h-full flex-col flex items-center justify-center">
              <h2 className="text-lg">Countify</h2>
              <p className="text-sm font-normal text-black/50">Version 1.0 | © 2024 All Rights Reserved | Free to use | <Link to={`/app/terms of service`}>Terms of Use</Link></p>
              <p className="text-sm font-normal absolute bottom-4 text-black/50">Created By <a href="https://kevinmk.onrender.com/" target="_blank" className="text-black">Kevin MK.</a></p>
            </div>
          </div>

          {/* nav */}
          <div className="min-h-[60px] w-full flex items-center justify-between px-10 max-md:px-3 py-5">
            <a href={`/`} className="flex items-center justify-start gap-1">
              <img src={logo} className="h-9" />
              <p className="text-2xl font-semibold max-md:text-xl">Countify</p>
            </a>
            <div className="flex items-center justify-end gap-5">
              <input id="pdf-upload" hidden type="file" accept="application/pdf" onChange={extractText} />
              <label htmlFor="pdf-upload" disabled={counting} className="text-sm flex items-center gap-1 py-1 rounded-md px-3 bg-stone-200 cursor-pointer transition active:scale-90">
                <MdOutlineFileUpload className="text-2xl opacity-30" />
                <p className="max-md:hidden">Upload PDF</p>
              </label>
              <button onClick={() => setShowInfo(true)} className="text-xl cursor-pointer">
                <BsInfoCircle />
              </button>
            </div>
          </div>
          {/* hero */}
          <div className=" w-full h-fit flex flex-col items-center justify-start py-10 max-md:py-16 gap-3 px-4">
            <h1 className="text-4xl font-semibold max-w-[500px] text-center max-md:text-2xl">Count Words Fast, Free, and Effortlessly.</h1>
            <p className="text-base text-black/70 max-w-[400px] text-center max-md:text-sm">Copy and paste your text/paragraphs in the textbox bellow or upload PDFs and click count button</p>
          </div>
          {/* input */}
          <div className="w-full h-fit flex flex-col max-md:flex-col-reverse gap-5 items-center justify-start">
            {/* result */}
            <div id="result-section" className=" scroll-m-[50px] w-[95%] max-w-[1000px] h-[70px] bg-white rounded-xl flex items-center justify-center max-md:flex-col max-md:px-6 max-md:h-fit py-4 px-10">
              <div className="w-full border-r-[1px] border-black/10 mr-7 max-md:mr-0 max-md:border-b-[1px] max-md:mb-4 max-md:pb-3 max-md:border-r-transparent">
                <h1> Words</h1>
                <p className="text-xl">
                  {counting ? <span className="w-[80px] h-[24px] flex rounded-sm bg-gradient-to-tl from-stone-300/50 via-stone-200 to-stone-100 animate-pulse"></span> : <span>{wordCount}</span>}
                </p>
              </div>
              <div className="w-full border-r-[1px] border-black/10 mr-7 max-md:mr-0 max-md:border-b-[1px] max-md:mb-4 max-md:pb-3 max-md:border-r-transparent">
                <h1> Characters</h1>
                <p className="text-xl">
                  {counting ? <span className="w-[80px] h-[24px] flex rounded-sm bg-gradient-to-tl from-stone-300/50 via-stone-200 to-stone-100 animate-pulse"></span> : <span>{characterCount}</span>}
                </p>
              </div>
              <div className="w-full border-r-[1px] border-black/10 mr-7 max-md:mr-0 max-md:border-b-[1px] max-md:mb-4 max-md:pb-3 max-md:border-r-transparent">
                <h1> Whitespaces</h1>
                <p className="text-xl">
                  {counting ? <span className="w-[80px] h-[24px] flex rounded-sm bg-gradient-to-tl from-stone-300/50 via-stone-200 to-stone-100 animate-pulse"></span> : <span>{whiteSpaceCount}</span>}
                </p>
              </div>
              <div className="w-full border-r-[1px] border-black/10 mr-7 max-md:mr-0 max-md:border-b-[1px] max-md:mb-4 max-md:pb-3 max-md:border-r-transparent">
                <h1> Sentences</h1>
                <p className="text-xl">
                  {counting ? <span className="w-[80px] h-[24px] flex rounded-sm bg-gradient-to-tl from-stone-300/50 via-stone-200 to-stone-100 animate-pulse"></span> : <span>{sentencesCount}</span>}
                </p>
              </div>
              <div className="w-full">
                <h1> Lines</h1>
                <p className="text-xl">
                  {counting ? <span className="w-[80px] h-[24px] flex rounded-sm bg-gradient-to-tl from-stone-300/50 via-stone-200 to-stone-100 animate-pulse"></span> : <span>{linesCount}</span>}
                </p>
              </div>
            </div>
            {/* input */}
            <form onSubmit={submitText} className="w-[95%] max-w-[1000px] mx-auto h-full flex items-start justify-start flex-col">
              <textarea value={text} onChange={(e) => setText(e.target.value)} type="text" required className="w-full h-[400px] bg-white rounded-xl p-10 max-md:p-5 text-lg max-md:text-sm text-justify max-md:pr-2 resize-none custom-scrollbar" placeholder="Paste your text here.." />
              <div className="flex items-center justify-start mt-5 gap-5 max-md:gap-3 max-md:flex-col max-md:w-full">
                <button type="submit" className="h-[45px] select-none min-w-[140px] max-md:w-full rounded-xl text-base font-semibold px-5 bg-black text-white transition active:scale-95">
                  {counting ? (
                    <div className="flex items-center justify-center gap-2">
                      <span className="button-loader"></span>
                      <p>One sec!</p>
                    </div>
                  ) : (
                    <p>Count</p>
                  )}
                </button>
                <button onClick={clearEverything} type="reset" className="h-[45px] select-none min-w-[140px] max-md:w-full rounded-xl text-base font-semibold px-5 bg-stone-300/60 hover:bg-stone-400/70 transition active:scale-95 text-black">
                  Clear
                </button>
              </div>
            </form>
            
          </div>
          {/* footer */}
          <div className="mt-5 text-sm py-3 text-black/40 flex items-center justify-center flex-wrap text-center px-4 max-md:mt-0">
              Countify does not store your data. By using this tool, you agree to our <Link to={'/app/terms of service'} className="hover:underline text-black/70 pl-1">Terms of Service</Link>
            </div>
        </div>
      }
    </>
  );
}

export default Counter;
