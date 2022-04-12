import React, { useRef,useState } from "react";


function Toggle() {
    const toggleRef = useRef(null);
    const [left, setLeft] = useState(true);
    const clickBtn = () =>{
        console.log(toggleRef.current)
        
        left?
        toggleRef.current.style.transform = 'translateX(172px)'
        :
        toggleRef.current.style.transform = null

        setLeft(!left)
    }
    return (
      <div className="Toggle" onClick={clickBtn} style={{width:"350px",height:'50px',backgroundColor:'#D3D3D3',display:'flex',alignItems:'center',borderRadius:'20px',cursor:'pointer'}}>
        <div style={{zIndex:'5',marginRight:'auto',marginLeft:'auto' ,color:left? 'black':'grey'}} >123232</div>
        <div style={{zIndex:'5',marginRight:'auto',marginLeft:'auto',color:left? 'grey':'black'}}>123232</div>
      <div style={{position:"absolute", width:"174px",height:'44px',backgroundColor:'white',marginLeft:'2px',borderRadius:'20px',transition:'0.3s'}} ref={toggleRef}> </div>
      </div>
    );
  }
  
  export default Toggle;