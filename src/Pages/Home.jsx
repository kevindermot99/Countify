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
                <div className='absolute top-[-200px] left-[-200px] aspect-square z-10 h-[800px] w-[600px] bg-stone-500/45 rounded-full blur-[130px] '></div>
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
                <div className='w-full flex-1 flex items-center justify-between flex-col overflow-clip gap-10 pt-5 px-10 max-md:px-4 mt-5 z-20 max-w-[1500px] '>
                    <div className='min-w-[500px] max-md:w-[300px] h-full flex flex-col items-center justify-start gap-5 py-5'>
                        <h1 className='text-4xl font-medium max-w-[650px] text-center'>Quick and free word counting for paragraphs, essays, and PDFs.</h1>
                        <p className='font-light text-white/80 max-w-[650px] text-center'>Just paste your text or upload PDFs to get instant counts of words, characters, lines, sentences, and spaces. Quick and accurate results only!</p>
                        <Link to={`/app/counter`} type="reset" className="h-[44px] select-none min-w-[140px] rounded-xl text-base font-semibold px-5 flex items-center gap-2 bg-white transition active:scale-95 text-black">
                            Open Countify
                            <FiArrowRight className='text-xl' />
                        </Link>
                    </div>
                    <img src={CounterScreen} className=" max-w-[900px] min-w-[900px] max-md:min-w-[200px] min-h-[500px] object-cover object-top bg-white rounded-t-xl ring-[8px] ring-stone-400/15" />
                </div>
            </div>
            {/* features */}
            <div className='w-full h-fit min-h-[400px] bg-white text-black flex items-center justify-center py-20 px-20 max-md:px-4'>
                <div className=' w-1/2 flex flex-col items-start justify-start gap-2'>
                    <h1 className='text-sm font-normal max-w-[540px] opacity-70 '>Key Features</h1>
                    <h1 className='text-3xl font-medium max-w-[540px] '>All-in-One Counting: Words, Characters, Lines, Sentences, and Whitespaces, all for free.</h1>
                    <h1 className='text-base font-normal max-w-[540px] opacity-70 pt-3 '>Easily get comprehensive counts for your text with our all-in-one tool. Perfect for analyzing paragraphs, essays, and more.</h1>
                </div>
                <div className='w-1/2 flex items-start justify-center flex-col gap-2'>
                    <div className='p-3 rounded-2xl border-dashed border-[1px] border-stone-200 flex items-start justify-start gap-3'>
                        <img src="https://img.icons8.com/?size=64&id=iUA0LgO8nd9m&format=png" className="h-11" />
                        <p className='text-black/70'><span className='text-black'>PDF Scan - PDF-to-Text:</span> Turn your PDFs into editable text in a snap, making counting and analysis a Easy.</p>
                    </div>
                    <div className='p-3 rounded-2xl border-dashed border-[1px] border-stone-200 flex items-start justify-start gap-3'>
                        <img src="https://img.icons8.com/?size=100&id=10058&format=png" className="h-8 pl-2 pr-1" />
                        <p className='text-black/70'><span className='text-black'>History Tracker:</span> With Countify, you gain access to a comprehensive history of your counts, making it simple to revisit and review past analyses with ease. <br /><br />Countify doesn't store personal information, and you don't need an account to start counting.</p>
                    </div>
                    <div className='p-3 rounded-2xl border-dashed border-[1px] border-stone-200 flex items-start justify-start gap-3'>
                        <img src="https://img.icons8.com/?size=64&id=gfTAzJClXJbX&format=png" className="h-11" />
                        <p className='text-black/70'><span className='text-black'>Free Forever:</span> Enjoy unlimited access to all our features without any cost. Count words, characters, lines, sentences, and more, all at no charge!</p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Home