import React, { useEffect, useRef } from 'react'

export default function ScrollButton() {
    const btnref = useRef()
    useEffect(()=>{
        function stickNavbar(){
            if(window !== undefined){
                let windowHeight = window.scrollY
                if(windowHeight > 185){
                    btnref.current.style.display = 'block'
                }  else{
                    btnref.current.style.display = 'none'
                }
            }
        }

        window.addEventListener('scroll', stickNavbar)
        return ()=> window.removeEventListener('scroll', stickNavbar) 
    },[])
    const scrolltoTop = () =>{
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: 'smooth'
      });
      }
    return (
        <div>
            <button ref={btnref} id="scrollTop" class="scrollTopStick active" onClick={scrolltoTop}> <i
                class="fas fa-arrow-up"></i> </button>
        </div>
    )
}
