import React, { useRef,useState } from "react";


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
      <div style={{marginTop:'40px',width:'400px',backgroundColor:'#F0F8FF',height:'90px',display:"flex",flexDirection:'column',justifyContent:'space-evenly'}} className="Slider" >
          <div style={{display:'flex',justifyContent:'space-around'}}>
                <div onClick={(e)=>clickBtn(e)} style={{width:'33%',cursor:'pointer'}}>감자</div>
                <div onClick={(e)=>clickBtn(e)} style={{width:'33%',cursor:'pointer'}}>고구마</div>
                <div onClick={(e)=>clickBtn(e)} style={{width:'33%',cursor:'pointer'}}>카레라이스</div>
          </div>
          <div style={{backgroundColor:'#D3D3D3',width:'400px',height:'2px'}}>
              <div ref={tabRef} style={{width:"33.33333%",backgroundColor:'blue',height:'2px',transition:'0.3s'}}>
              </div>
          </div>
      </div>
    );
  }
  
  export default Tab;