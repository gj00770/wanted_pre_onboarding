import React, { useRef,useState } from "react";


function Toggle() {
    const toggleRef = useRef(null);
    const [left, setLeft] = useState(true);
    const clickBtn = (e) =>{
        console.log(e.target.innerHTML)
        
        if(e.target.innerHTML == '상세'){
          toggleRef.current.style.transform = 'translateX(172px)'
          setLeft(false);
        }
        else{
          toggleRef.current.style.transform = null;
          setLeft(true);
        }
        
        
        

    }
    return (
      <div className="Toggle"  style={{width:"350px",height:'50px',backgroundColor:'#D3D3D3',display:'flex',alignItems:'center',borderRadius:'20px'}}>
        <div onClick={e =>clickBtn(e)} style={{lineHeight:'50px',cursor:'pointer',width:'50%',height:'100%',zIndex:'5',marginRight:'auto',marginLeft:'auto' ,color:left? 'black':'grey',}} >기본</div>
        <div onClick={e =>clickBtn(e)} style={{lineHeight:'50px',cursor:'pointer',width:'50%',height:'100%',zIndex:'5',marginRight:'auto',marginLeft:'auto',color:left? 'grey':'black'}}>상세</div>
      <div style={{position:"absolute", width:"174px",height:'44px',backgroundColor:'white',marginLeft:'2px',borderRadius:'20px',transition:'0.3s'}} ref={toggleRef}> </div>
      </div>
    );
  }
  
  export default Toggle;