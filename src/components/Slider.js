import React, { useRef,useState,useEffect,useCallback } from "react";

function Slider() {
    const SliderRef = useRef(null);
    const SliderContainerRef = useRef(null);
    const [isClick, setIsClick] = useState(false);
   const [percent , setPercent] = useState(0);
    const clickMouse = (e) =>{
        console.log('232323232222')
        setIsClick(true)
        console.log(isClick)
       
        console.log(SliderContainerRef.current.getBoundingClientRect().left)
        console.log(e.nativeEvent.clientX)
        //400-16  384
        console.log((e.nativeEvent.clientX-SliderContainerRef.current.getBoundingClientRect().left) /3.84)
        if((e.nativeEvent.clientX-12-SliderContainerRef.current.getBoundingClientRect().left) /4 >= 100){
            setPercent(100)
        }
        else if((e.nativeEvent.clientX-12-SliderContainerRef.current.getBoundingClientRect().left) /4 >= 100){

            setPercent(0)
            SliderRef.current.style.left = `${e.nativeEvent.clientX - 12}px`
        }
        else{
            setPercent((e.nativeEvent.clientX-SliderContainerRef.current.getBoundingClientRect().left-12) /3.84)
            SliderRef.current.style.left = `${e.nativeEvent.clientX - 12}px`
        }
       
    }
    const mouseUp =  (e) =>{
        console.log('232323232222')
        setIsClick(1)
        console.log(isClick)
       // return () =>{
        // document.removeEventListener('mousemove',e=> moveMouse(e))
        // document.removeEventListener('mousedown',e=> mouseDown(e))
        // //}
        // return function cleanUp() {
        //     console.log("Clean UP");
        //     document.removeEventListener("mousemove", e=> mouseDown(e))
        // };
        document.removeEventListener('mouseup', mouseUp,false)
        document.removeEventListener('mousemove', moveMouse,false)
       
      //  document.removeEventListener('mousedown', e=>mouseDown(e),false)
    };
    const moveMouse = (e) =>{
        console.log(e.clientX)
        console.log(isClick)
      //  console.log(isClick)
            //if(e.nativeEvent.clientX)
            SliderRef.current.style.left = `${e.clientX -12 }px`
            

        };
    const mouseDown=(e) =>{
        //setIsClick(1)
        console.log(isClick)
     //  if(isClick !== 1 ){
        document.addEventListener('mousemove',  moveMouse,false);
     //  }
       document.addEventListener('mouseup',  mouseUp,false);
    };

     useEffect(() => {
        // document.removeEventListener('mouseup', mouseUp(),false)
         document.removeEventListener('mousemove', e=>moveMouse(e),false)
          
    //        // document.addEventListener('mousedown', e=> mouseDown(e));
    //         //}
    //         if(isClick === 1 ){
    //         document.addEventListener('mouseup', e=> mouseUp(e));
    //         }
        
    //         return function cleanUp() {
    //                 console.log("Clean UP");
    //                 document.removeEventListener('mouseup',e=> mouseUp(e))
    //                 document.removeEventListener('mousemove',e=> moveMouse(e))
    //                  document.removeEventListener('mousedown',e=> mouseDown(e))
                
                
    //         };
        
       },[]);

    return (
      <div style={{marginTop:'40px',width:'400px',backgroundColor:'#F0F8FF',height:'200px',display:"flex",flexDirection:'column',justifyContent:'space-evenly', display:'flex',alignItems:'center'}} className="Slider"    >
          <div style={{display:'flex',justifyContent:'space-around'}}>
                <div  style={{width:'360px',height:'40px',border:'1px solid #D3D3D3 '}}>{percent}%</div>
                
          </div>
          <div style={{width:'400px',height:'30px',alignItems:'center',display:'flex' }} onClick={e=>clickMouse(e)} ref={SliderContainerRef}>
          <div   style={{backgroundColor:'#D3D3D3',width:'400px',height:'4px',display:'flex',justifyContent:'space-between',zIndex:'5',alignItems:'center'}}   >
              <div  style={{width:'16px',height:'16px',backgroundColor:'#D3D3D3', borderRadius:'16px'}}></div>
              <div  style={{width:'16px',height:'16px',backgroundColor:'#D3D3D3', borderRadius:'16px'}}></div>
              <div  style={{width:'16px',height:'16px',backgroundColor:'#D3D3D3', borderRadius:'16px'}}></div>
              <div  style={{width:'16px',height:'16px',backgroundColor:'#D3D3D3', borderRadius:'16px'}}></div>
              <div  style={{width:'16px',height:'16px',backgroundColor:'#D3D3D3', borderRadius:'16px'}}></div>
              <div   onMouseDown = {e => mouseDown(e)}ref={SliderRef} style={{position:"absolute",width:'24px',height:'24px',backgroundColor:'red' ,borderRadius:'24px'}}></div>
          </div>
          </div>
      </div>
    );
  }
  
  export default Slider;