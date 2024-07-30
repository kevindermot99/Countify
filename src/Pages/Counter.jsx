import React, { useState } from "react";
import { SiPanasonic } from "react-icons/si";

function Counter() {
  const [loading, setLoading] = useState(true);
  return (
    <>
    {loading && 
      <div className="w-full h-svh flex items-center justify-center">
        <span className="loader"></span>
      </div>
    }
    </>
  );
}

export default Counter;
