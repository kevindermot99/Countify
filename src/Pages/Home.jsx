import React from 'react'
import { BsInfoCircle } from 'react-icons/bs'
import { MdOutlineFileUpload } from 'react-icons/md'
import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'
import CounterScreen from '../assets/countify-counter.png'
import { FiArrowRight } from "react-icons/fi";

function Home() {
    return (
        <div className="w-full h-fit flex flex-col items-start justify-start relative text-white bg-black">
            {/* hero */}
            <div className="flex items-center justify-start flex-col bg-black text-white relative w-full h-fit">
                {/* light */}
                <div className='absolute top-[-200px] left-[-200px] aspect-square z-10 h-[600px] w-[600px] bg-stone-500/25 rounded-full blur-[130px] '></div>
                {/* nav */}
                <div className="min-h-[60px] w-full flex items-center justify-between px-10 py-5 z-20 ">
                    <Link to={`/`} className="flex items-center justify-start gap-1">
                        <img src={logo} className="h-9" />
                        <p className="text-2xl font-semibold">Countify</p>
                    </Link>
                    <div className="flex items-center justify-end gap-8">
                        <button className="h-fit select-none rounded-xl text-sm font-normal">
                            Home
                        </button>
                        <button className="h-fit select-none rounded-xl text-sm font-normal">
                            Features
                        </button>
                        <button className="h-fit select-none rounded-xl text-sm font-normal">
                            Reach out
                        </button>
                        <button className="h-fit select-none rounded-xl text-sm font-normal">
                            FAQs
                        </button>
                    </div>
                    <div className="flex items-center justify-end gap-5">
                        <Link to={'/app/counter'} className="h-fit select-none min-w-[100px] rounded-xl text-base font-medium px-5 flex items-center gap-1 transition active:scale-95">
                            Open Countify
                            <FiArrowRight />
                        </Link>
                    </div>
                </div>
                {/* visuals */}
                <div className='w-full flex-1 flex items-center justify-between overflow-clip gap-10 pt-5 px-10 max-md:px-4 mt-5 z-20 max-w-[1500px] max-h-[550px] '>
                    <div className='min-w-[500px] max-md:w-[300px] h-full flex flex-col items-start justify-center gap-5'>
                        <h1 className='text-4xl font-medium'>Quick and free word counting for paragraphs, essays, and PDFs.</h1>
                        <p className='font-light text-white/80'>Just paste your text or upload PDFs to get instant counts of words, characters, lines, sentences, and spaces. Quick and accurate results only!</p>
                        <Link to={`/app/counter`} type="reset" className="h-[44px] select-none min-w-[140px] rounded-xl text-base font-semibold px-5 flex items-center gap-2 bg-white transition active:scale-95 text-black">
                            Open Countify
                            <FiArrowRight className='text-xl' />
                        </Link>
                    </div>
                    <img src={CounterScreen} className=" h-[550px] rounded-t-xl ring-[10px] ring-stone-100/10" />
                </div>
            </div>
            {/* features */}
            <div className='w-full h-fit min-h-[400px] bg-stone-500/5 flex flex-col items-center justify-start py-20'>
                <h1 className='text-3xl font-medium max-w-[440px] text-center'>Top Features You’ll get</h1>
                
            </div>
        </div>
    )
}

export default Home