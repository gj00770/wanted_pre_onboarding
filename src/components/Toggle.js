import React, { useRef,useState } from "react";
import "./Toggle.css"

function Toggle() {
    const toggleRef = useRef(null);
    const [left, setLeft] = useState(true);
    const clickBtn = (e) =>{
        console.log(e.target.innerHTML)
        
        if(e.target.innerHTML == '상세'){
          toggleRef.current.style.transform = 'translateX(174px)'
          setLeft(false);
        }
        else{
          toggleRef.current.style.transform = null;
          setLeft(true);
        }
        
        
        

    }
    return (
      <div className="toggle"  style={{width:"350px",height:'50px',backgroundColor:'#D3D3D3',display:'flex',alignItems:'center',borderRadius:'20px'}}>
        <div className='toggle_name' onClick={e =>clickBtn(e)} style={{ color:left? 'black':'grey',}} >기본</div>
        <div className='toggle_name' onClick={e =>clickBtn(e)} style={{ color:left? 'grey':'black'}}>상세</div>
      <div className='toggle_box' ref={toggleRef}> </div>
      </div>
    );
  }
  
  export default Toggle;