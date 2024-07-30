import React, { useEffect, useState } from "react";
import { SiPanasonic } from "react-icons/si";
import { useLocation } from "react-router-dom";
import logo from '../assets/logo.png'

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
        <div className="w-full h-svh flex flex-col items-start justify-start">
          {/* nav */}
          <div className="min-h-[60px] w-full flex items-center justify-between px-10 py-5">
            <div className="flex items-center justify-start gap-1">
              <img src={logo} className="h-9" />
              <p className="text-2xl font-semibold">Countify</p>
            </div>
            <div className="flex items-center justify-end">
              
            </div>
          </div>
        </div>
      }
    </>
  );
}

export default Counter;
