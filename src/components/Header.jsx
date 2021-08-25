import React, { useState } from 'react'

function Header() {

   const [darkMode, setDarkmode] = useState(false);

   function changeMode() {
      setDarkmode(!darkMode);
      const root = document.documentElement;
      root.style.setProperty('--position', darkMode? '30px': '4px');
      root.style.setProperty('--header', darkMode? '#FFEBCD': '#000000');
      root.style.setProperty('--white', darkMode? '#FFFFFF': '#000');
      root.style.setProperty('--textcolor', darkMode? '#000': '#FFFFFF');
   }

   return (
      <div className="header">
         <div className="logo">React Note App</div>
         
         <div className="change-mode">
            <span>Dark Mode</span>
            <div className="slide" onClick={changeMode}></div>
         </div>
      </div>
   )
}

export default Header
