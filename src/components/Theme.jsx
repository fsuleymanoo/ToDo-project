import React, { useEffect, useState } from 'react'
import { MdOutlineWbSunny } from "react-icons/md";
import { FaRegMoon } from "react-icons/fa";

function Theme() {

    const [theme, setTheme] = useState('light');

    const toggler = () => {
        setTheme((prev) => (prev === "dark" ? "light" : "dark"));
    };

    useEffect(() => {
        document.documentElement.setAttribute("data-bs-theme", theme);
    }, [theme]);

  return (
  
      <button className='btn' onClick={toggler}>
        {theme === 'light' ? <MdOutlineWbSunny className='text-warning-emphasis' /> : <FaRegMoon />}
      </button>
  
  )
}

export default Theme
