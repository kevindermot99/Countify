import React, { useEffect, useState } from "react";
import { SiPanasonic } from "react-icons/si";
import { Link, useLocation } from "react-router-dom";
import logo from '../assets/logo.png'
import { BsInfoCircle, BsUpload } from 'react-icons/bs'
import { FiArrowLeft } from "react-icons/fi";

function Terms() {
    useEffect(() => {
        window.scrollTo(0, 0)
    },[])
    return (
        <div className="w-full h-svh flex flex-col items-start justify-start text-black">
            {/* nav */}
            <Link to="/app/counter" className="min-h-[60px] w-full flex items-center justify-between px-10 py-5">
                <div className="flex items-center justify-start gap-1">
                    <FiArrowLeft className="textlg" />
                    <p className="text-base font-normal">Go back</p>
                </div>
                <div className="flex items-center justify-end gap-5">
                    <button className="text-xl cursor-pointer">
                        <BsInfoCircle />
                    </button>
                </div>
            </Link>
            {/* Terms */}
            <div className="w-full h-fit mt-5 pb-20 font-normal flex flex-col items-start justify-start max-w-[800px] mx-auto p-4">
                <h1 className="text-3xl font-semibold py-6">Terms of Use</h1>
                {/* 1 */}
                <h2 className="text-lg">Acceptance of Terms</h2>
                <p className="text-sm font-normal text-black/50">By using Countify (the "Tool"), you agree to these Terms of Use and our Privacy Policy. If you do not agree with these terms, do not use the Tool.</p>
                {/* 2 */}
                <h2 className="text-lg mt-7">Use of the Tool</h2>
                <p className="text-sm font-normal text-black/50">Countify is provided free of charge to help users count words, characters, white spaces, lines, and sentences in text and PDF documents. You may use the Tool only for lawful purposes and in accordance with these Terms.</p>
                {/* 3 */}
                <h2 className="text-lg mt-7">User Responsibilities</h2>
                <p className="text-sm font-normal text-black/50"> You are responsible for:</p>
                <p className="text-sm font-normal text-black/50"> <span className="pr-2">&bull;</span>Ensuring that any content you upload or paste into the Tool does not violate any laws or third-party rights.</p>
                <p className="text-sm font-normal text-black/50"> <span className="pr-2">&bull;</span>Not using the Tool to upload or distribute content that is illegal, offensive, or otherwise inappropriate.</p>
                {/* 4 */}
                <h2 className="text-lg mt-7">Prohibited Activities</h2>
                <p className="text-sm font-normal text-black/50"> You agree not to:</p>
                <p className="text-sm font-normal text-black/50"> <span className="pr-2">&bull;</span>Use the Tool for any unlawful purpose or in any way that could harm, disable, overburden, or impair the Tool or interfere with any other party's use of the Tool.
                </p>
                <p className="text-sm font-normal text-black/50"> <span className="pr-2">&bull;</span>Attempt to gain unauthorized access to any part of the Tool or any related systems or networks.
                </p>
                <p className="text-sm font-normal text-black/50"> <span className="pr-2">&bull;</span>Distribute, copy, or share any content obtained from the Tool without proper authorization.
                </p>
                {/* 5 */}
                <h2 className="text-lg mt-7">No Warranty</h2>
                <p className="text-sm font-normal text-black/50">Countify is provided "as is" and "as available" without warranties of any kind. We do not guarantee that the Tool will be available at all times, will be free of errors, or will meet your expectations.</p>
                {/* 6 */}
                <h2 className="text-lg mt-7">Modification and Termination</h2>
                <p className="text-sm font-normal text-black/50">We reserve the right to modify or discontinue the Tool at any time, with or without notice. We may also terminate or suspend your access to the Tool if you violate these Terms or engage in any activity that we deem harmful.</p>
            </div>
        </div>
    )
}

export default Terms
