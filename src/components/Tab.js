import React, { useState } from "react";
import './Tab.css'

function Tab() {
    const [current, setCurrent] = useState("감자");
    const clickBtn = (e) =>{
        console.log(e.target.innerHTML)
        if(e.target.innerHTML === '감자'){
            setCurrent('감자')
        }
        else if(e.target.innerHTML === '고구마'){
            setCurrent('고구마')             
        }
        else if(e.target.innerHTML === '카레라이스'){
            setCurrent('카레라이스')           
        }

    }

    

    return (
      <div className='Tab'   >
          <div className='tab_menu' >
                <div className='tab_menu_food' onClick={(e)=>clickBtn(e)}  style={{color: current==='감자'? 'black' :"#D3D3D3"}}>감자</div>
                <div className='tab_menu_food' onClick={(e)=>clickBtn(e)} style={{color: current==='고구마'? 'black' :"#D3D3D3"}}>고구마</div>
                <div className='tab_menu_food' onClick={(e)=>clickBtn(e)} style={{color: current==='카레라이스'? 'black' :"#D3D3D3"}}>카레라이스</div>
          </div>
          <div className='tab_line'>
              <div className='tab_line_level'  
               style={{transform:current === "감자" ? "translateX(0%)": 
               current == "고구마"? 'translateX(100%)':
               current=='카레라이스'? 'translateX(200%)':null }} >
              </div>
          </div>
      </div>
    );
  }
  
  export default Tab;