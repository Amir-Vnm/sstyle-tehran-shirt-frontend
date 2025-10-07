import { useState } from "react"




export default function  HamburgerMenu(  ) {
    const [open, setOpen] = useState(false);

    return(
        <>
        
           <div className="relative">
     
        <button
          onClick={() => setOpen(!open)}
          className="w-14 h-14 relative focus:outline-none bg-teal-600 rounded hover:cursor-pointer hover:scale-104 transition"
        >
          <div className="block w-5 absolute left-6 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <span
              className={`block absolute h-0.5 w-7 bg-white transform transition duration-500 ease-in-out ${
                open ? "rotate-45" : "-translate-y-1.5"
              }`}
            ></span>
            <span
              className={`block absolute h-0.5 w-5 bg-white transform transition duration-500 ease-in-out ${
                open ? "opacity-0" : ""
              }`}
            ></span>
            <span
              className={`block absolute h-0.5 w-7 bg-white transform transition duration-500 ease-in-out ${
                open ? "-rotate-45" : "translate-y-1.5"
              }`}
            ></span>
          </div>
        </button>
      
    </div>
        
        
        </>
    )
}