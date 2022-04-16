import React, { useRef,useState } from "react";
import './Tab.css'

function Tab() {
    const tabRef = useRef(null);
    const [current, setCurrent] = useState(true);
    const clickBtn = (e) =>{
        console.log(e.target.innerHTML)
        if(e.target.innerHTML === '감자'){
            tabRef.current.style.transform=null
        }
        else if(e.target.innerHTML === '고구마'){
            tabRef.current.style.transform = 'translateX(100%)'  
                            
        }
        else if(e.target.innerHTML === '카레라이스'){
            tabRef.current.style.transform = 'translateX(200%)'  
        }

    }


    return (
      <div className='Tab'   >
          <div className='tab_menu' >
                <div className='tab_menu_food' onClick={(e)=>clickBtn(e)} >감자</div>
                <div className='tab_menu_food' onClick={(e)=>clickBtn(e)} >고구마</div>
                <div className='tab_menu_food' onClick={(e)=>clickBtn(e)} >카레라이스</div>
          </div>
          <div className='tab_line'>
              <div className='tab_line_level' ref={tabRef} >
              </div>
          </div>
      </div>
    );
  }
  
  export default Tab;