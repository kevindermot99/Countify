import React, { useState } from 'react'
import { BsInfoCircle } from 'react-icons/bs'
import { MdOutlineFileUpload } from 'react-icons/md'
import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'
import CounterScreen from '../assets/countify-counter.png'
import CounterScreenMobile from '../assets/countify-counter-mobile.png'
import { FiArrowRight } from "react-icons/fi";
import { FaCaretDown } from "react-icons/fa6";
import { Faqs } from '../content/data'
import Reveal from "react-awesome-reveal";
import { keyframes } from "@emotion/react";

function Home() {
    const [activeIndex, setActiveIndex] = useState(null);
    const toggleAnswer = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };
    const scrollToFeatures = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const customAnimation = keyframes`
  from {
    opacity: 0;
    transform: translateY(100px);
    filter: blur(6px)
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

    return (
        <div className="w-full h-fit flex flex-col items-start justify-start relative text-white bg-white">

            {/* hero */}
            <div id='hero' className="flex items-center justify-start flex-col bg-black text-white relative w-full h-fit overflow-clip">
                {/* light */}
                <div className='absolute top-[-200px] left-[-200px] aspect-square -z-0 h-[800px] w-[600px] bg-stone-500/45 rounded-full blur-[130px] '></div>
                {/* nav */}
                <div className="min-h-[60px] w-full flex items-center justify-between px-10 max-md:px-4 py-5 z-20 ">
                    <Link to={`/`} className="flex items-center justify-start gap-1">
                        <img src={logo} className="h-9" />
                        <p className="text-2xl font-semibold max-md:text-xl">Countify</p>
                    </Link>
                    <div className="flex items-center justify-end gap-8 max max-md:hidden">
                        <button onClick={() => scrollToFeatures('hero')} className="h-fit select-none rounded-xl text-sm font-normal">
                            Home
                        </button>
                        <button onClick={() => scrollToFeatures('features')} className="h-fit select-none rounded-xl text-sm font-normal">
                            Features
                        </button>
                        <button onClick={() => scrollToFeatures('faqs')} className="h-fit select-none rounded-xl text-sm font-normal">
                            FAQs
                        </button>
                        <a className="h-fit select-none rounded-xl text-sm font-normal" target='_blank' href="https://docs.google.com/forms/d/e/1FAIpQLSdkHgxQlSd-Y9M7GHH_QSyhRhkBgy6zzWcKK7VdSC53r9vaVA/viewform?usp=pp_url">Support</a>
                    </div>
                    <div className="flex items-center justify-end gap-5">
                        <Link to={'/app/counter'} className="h-fit select-none min-w-[100px] rounded-xl max-md:text-sm text-base font-medium px-5 max-md:px-0 flex items-center gap-1 transition active:scale-95">
                            Open Countify
                            <FiArrowRight />
                        </Link>
                    </div>
                </div>
                {/* visuals */}
                <Reveal triggerOnce keyframes={customAnimation} className='w-full'>
                    <div className='w-full flex-1 flex items-center justify-between flex-col overflow-clip gap-10 pt-5 px-10 max-md:px-4 mt-5 z-20 max-w-[1500px] '>
                        <div className='min-w-[500px] max-md:min-w-fit h-full flex flex-col items-center justify-start gap-5 py-5'>
                            <h1 className='text-4xl max-md:text-3xl font-medium max-w-[650px] text-center'>Quick and free word counting for paragraphs, essays, and PDFs.</h1>
                            <p className='font-light text-white/80 max-w-[650px] text-center max-md:text-sm'>Just paste your text or upload PDFs to get instant counts of words, characters, lines, sentences, and spaces. Quick and accurate results only!</p>
                            <Link to={`/app/counter`} type="reset" className="h-[44px] select-none min-w-[140px] rounded-xl text-base font-semibold px-5 flex items-center gap-2 bg-white transition active:scale-95 text-black">
                                Open Countify
                                <FiArrowRight className='text-xl' />
                            </Link>
                        </div>
                        {/* Pc */}
                        <img src={CounterScreen} className=" max-md:hidden lg:max-w-[900px] bg-stone-100 rounded-t-2xl pt-3 ring-[8px] ring-stone-400/15" />
                        {/* mobile */}
                        <img src={CounterScreenMobile} className=" hidden max-md:flex object-cover object-top" />
                    </div>
                </Reveal>
            </div>

            {/* features */}
            <Reveal triggerOnce keyframes={customAnimation} className='w-full'>
                <div id='features' className='w-full h-fit min-h-[400px] bg-white text-black flex items-center justify-center max-lg:flex-col py-20 max-md:py-10 px-20 max-lg:px-4 max-md:px-4 max-w-[1200px] mx-auto'>
                    <div className=' w-1/2 max-lg:w-full max-lg:text-center flex flex-col items-end justify-start max-lg:items-center max-lg:pb-10 gap-2'>
                        <h1 className='text-sm font-normal max-w-[540px] opacity-70 max-md:max-w-full text-left w-full '>Key Features</h1>
                        <h1 className='text-3xl font-medium max-w-[540px] max-md:max-w-full max-lg:text-xl text-left w-full '>All-in-One Counting: Words, Characters, Lines, Sentences, and Whitespaces, all for free.</h1>
                        <h1 className='text-base font-normal max-w-[540px] opacity-70 pt-3 max-md:max-w-full max-lg:text-sm max-lg:pt-0 text-left w-full '>Easily get comprehensive counts for your text with our all-in-one tool. Perfect for analyzing paragraphs, essays, and more.</h1>
                    </div>
                    <div className='w-1/2 max-lg:w-full max-lg:text-center flex items-start justify-center flex-col gap-2'>
                        <div className='p-3 rounded-2xl bg-stone-100 flex items-start justify-start gap-3'>
                            <img src="https://img.icons8.com/?size=64&id=iUA0LgO8nd9m&format=png" className="h-11" />
                            <p className='text-black/70 text-left'><span className='text-black'>PDF Scan - PDF-to-Text:</span> Turn your PDFs into editable text in a snap, making counting and analysis a Easy.</p>
                        </div>
                        <div className='p-3 rounded-2xl bg-stone-100 flex items-start justify-start gap-3'>
                            <img src="https://img.icons8.com/?size=64&id=gfTAzJClXJbX&format=png" className="h-11" />
                            <p className='text-black/70 text-left'><span className='text-black'>Free Forever:</span> Enjoy unlimited access to all our features without any cost. Count words, characters, lines, sentences, and more, all at no charge!</p>
                        </div>
                        <div className='p-3 rounded-2xl bg-stone-100 flex items-start justify-start gap-3'>
                            <img src="https://img.icons8.com/?size=100&id=10058&format=png" className="h-8 pl-2 pr-1" />
                            <p className='text-black/70 text-left'><span className='text-black'>History Tracker:</span> With Countify, you gain access to a comprehensive history of your counts, making it simple to revisit and review past analyses with ease. <br /><br />Countify doesn't store personal information, and you don't need an account to start counting.</p>
                        </div>

                    </div>
                </div>
            </Reveal>

            {/* Faqs */}
            <Reveal triggerOnce keyframes={customAnimation} className='w-full'>
                <div id='faqs' className="w-full h-fit flex items-center pt-10 justify-start flex-col bg-stone-100 text-black max-w-[1200px] mx-auto rounded-3xl max-md:rounded-none overflow-clip">
                    <div className=' w-1/2 max-lg:w-full text-center flex flex-col justify-start items-center pb-10 gap-2 px-4'>
                        <h1 className='text-sm font-normal max-w-[540px] opacity-70 max-md:max-w-full '>FAQs</h1>
                        <h1 className='text-3xl font-medium max-w-[540px] max-md:max-w-full max-lg:text-xl '>Common Questions</h1>
                        <h1 className='text-base font-normal max-w-[540px] opacity-70 max-md:max-w-full max-lg:text-sm '>If you cannot find the information you are looking for, please contact us for further assistance.</h1>
                    </div>
                    {/* Faqs */}
                    <div className="w-full h-full bg-stone-100 px-10 max-md:px-3 pb-5 flex flex-col items-center justify-start text-dark-text ">
                        <div className="w-full h-fit flex flex-col items-center justify-start mb-3 max-w-[900px]">
                            {Faqs.map((item, index) => (
                                <div
                                    key={index}
                                    className=" py-4 px-5 bg-white text-dark-body-color rounded-xl w-full mb-2 flex justify-between items-start gap-5"
                                >
                                    <div className="flex flex-col items-start justify-start">
                                        <h1 className="font-normal tracking-tight text-base leading-5 min-h-[30px] w-full flex items-center justify-start">
                                            {item.question}
                                        </h1>
                                        <p
                                            className={`text-sm text-black/50 leading-5 font-normal transition-all duration-500 ease-in-out overflow-hidden ${activeIndex === index ? "max-h-96" : "max-h-0"
                                                }`}
                                        >
                                            {item.answer}
                                        </p>
                                    </div>
                                    <button
                                        onClick={() => toggleAnswer(index)}
                                        className=" h-[30px] aspect-square rounded-full transition duration-150 active:scale-90 text-black hover:bg-stone-200 flex items-center justify-center   "
                                    >
                                        <FaCaretDown className="text-[20px] " />
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </Reveal>

            {/* footer */}
            <div className="w-full text-sm py-9 bg-white text-black/40 flex items-center justify-center flex-wrap text-center px-4 max-md:mt-0">
                Countify does not store your data. By using this tool, you agree to our <Link to={'/app/terms of service'} className="hover:underline text-black/70 pl-1">Terms of Service</Link>
            </div>
        </div>
    )
}

export default Home