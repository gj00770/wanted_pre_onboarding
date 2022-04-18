import React, { useRef,useState } from "react";
import "./Toggle.css"

function Toggle() {
    const [left, setLeft] = useState(true);
    const clickBtn = (e) =>{
        console.log(e.target.innerHTML)
        
        if(e.target.innerHTML == '상세'){
          setLeft(false);
        }
        else{
          setLeft(true);
        }
        
        
        
        

    }
    return (
      <div className="toggle" >
        <div className='toggle_name' onClick={e =>clickBtn(e)} style={{ color:left? 'black':'grey',}} >기본</div>
        <div className='toggle_name' onClick={e =>clickBtn(e)} style={{ color:left? 'grey':'black'}}>상세</div>
      <div className='toggle_box' style={{transform : left? 'translateX(0px)' : "translateX(174px)" }}></div>
      </div>
    );
  }
  
  export default Toggle;