import React, { useRef,useState,useEffect,useCallback } from "react";

function Slider() {
    const SliderRef = useRef(null);
    const SliderContainerRef = useRef(null);
    const [isClick, setIsClick] = useState(false);
   const [percent , setPercent] = useState(0);
    const clickMouse = (e) =>{
        //console.log('232323232222')
        setIsClick(true)
        //console.log(isClick)
        let first = document.documentElement.clientWidth;
        console.log(first)
       // console.log(SliderContainerRef.current.getBoundingClientRect().left)//click
        console.log('현재위치',e.nativeEvent.pageX) // 
        console.log('상위좌표',(SliderContainerRef.current.getBoundingClientRect().left+8)/first) // 현재위치
        //400-16  384
        // console.log((e.nativeEvent.clientX-SliderContainerRef.current.getBoundingClientRect().left+8) /3.84)
        if((  SliderContainerRef.current.getBoundingClientRect().left+8-e.nativeEvent.pageX ) /-3.84 >= 100) {
            setPercent(100);
            SliderRef.current.style.left = `${SliderContainerRef.current.getBoundingClientRect().left-4+384}px`
        }
        else if((  SliderContainerRef.current.getBoundingClientRect().left+8-e.nativeEvent.pageX ) /-3.84 <= 0){

            setPercent(0)
            SliderRef.current.style.left = `${SliderContainerRef.current.getBoundingClientRect().left-4}px`
        }
        else{
            setPercent(Math.round((  SliderContainerRef.current.getBoundingClientRect().left+8-e.nativeEvent.pageX ) /-3.84))
            SliderRef.current.style.left = `${e.nativeEvent.pageX-12 }px`
        }
       
    }

    const clickPercent = (e) =>{
      console.log('34343')
        if(e.target.innerHTML == '0%') {
            setPercent(0)
            SliderRef.current.style.left = `${SliderContainerRef.current.getBoundingClientRect().left-4}px`
        }
        else if(e.target.innerHTML == '25%'){

            setPercent(25)
            SliderRef.current.style.left = `${SliderContainerRef.current.getBoundingClientRect().left-4+(384/4 )}px`
        }
        else if(e.target.innerHTML == '50%'){

            setPercent(50)
            SliderRef.current.style.left = `${SliderContainerRef.current.getBoundingClientRect().left-4+(384/4 *2)}px`
        }
        else if(e.target.innerHTML == '75%'){

            setPercent(75)
            SliderRef.current.style.left = `${SliderContainerRef.current.getBoundingClientRect().left-4+(384/4 *3)}px`
        }
        else if(e.target.innerHTML == '100%'){

            setPercent(100)
            SliderRef.current.style.left = `${SliderContainerRef.current.getBoundingClientRect().left-4+(384/4 * 4 )}px`
        }
     
       
    }
    
    const mouseUp =  (e) =>{
        console.log('232323232222')
        setIsClick(1)
        console.log(isClick)
        
        document.removeEventListener('mouseup', mouseUp,false)
        document.removeEventListener('mousemove', moveMouse,false)
       
    };
    const moveMouse = (e) =>{
         // console.log(SliderContainerRef.current.getBoundingClientRect().left)//click
         console.log('현재위치',e.clientX ) // 
         console.log('상위좌표',SliderContainerRef.current.getBoundingClientRect().left+8) // 현재위치
         //400-16  384
          console.log((e.clientX-SliderContainerRef.current.getBoundingClientRect().left+8) /3.84)
         if((  SliderContainerRef.current.getBoundingClientRect().left+8-e.pageX ) /-3.84 >= 100) {
            SliderRef.current.style.left = `${SliderContainerRef.current.getBoundingClientRect().left-4+384}px`
             setPercent(100)
         }
         else if((  SliderContainerRef.current.getBoundingClientRect().left+8-e.pageX ) /-3.84 <= 0){
 
             setPercent(0)
             SliderRef.current.style.left = `${SliderContainerRef.current.getBoundingClientRect().left-4}px`
         }
         else{
             setPercent(Math.round((  SliderContainerRef.current.getBoundingClientRect().left+8-e.pageX ) /-3.84))
             SliderRef.current.style.left = `${e.clientX -12 }px`
         }
         
        console.log(e.clientX)
        console.log(isClick)
          //  SliderRef.current.style.left = `${e.clientX -12 }px`
            

        };
    const mouseDown=(e) =>{
        console.log(isClick)
        document.addEventListener('mousemove',  moveMouse,false);
        document.addEventListener('mouseup',  mouseUp,false);
    };



    //  useEffect(() => {

    //     document.addEventListener('mousemove',  moveMouse,false);
    //     document.addEventListener('mouseup',  mouseUp,false);

    //     return () => { 
    //     document.removeEventListener('mouseup', mouseUp,false)
    //     document.removeEventListener('mousemove', moveMouse,false)
    //     }
        
    //    },[v]);

    return (
      <div style={{marginTop:'40px',width:'460px',backgroundColor:'#F0F8FF',height:'200px',display:"flex",flexDirection:'column',justifyContent:'space-evenly', display:'flex',alignItems:'center'}} className="Slider"    >
          <div style={{display:'flex',justifyContent:'space-around'}}>
                <div  style={{width:'360px',height:'40px',border:'1px solid #D3D3D3 '}}>{percent}%</div>
                
          </div>
          <div style={{width:'448px',height:'30px',alignItems:'center',display:'flex' }}  >
          <div   onMouseDown = {e => mouseDown(e)} ref={SliderRef} style={{left:'4.46428%',zIndex:'5',position:"relative",width:'24px',height:'24px',backgroundColor:'red' ,borderRadius:'24px'}}></div> 
            <div onClick={e=>clickMouse(e)} style={{width:'400px' , height:'50px',marginRight:'12px',display:'flex' ,alignItems:'center'}}>
          <div  ref={SliderContainerRef} style={{backgroundColor:'#D3D3D3',width:'400px',height:'5px',display:'flex',justifyContent:'space-between',zIndex:'5',alignItems:'center',marginLeft:'auto',marginRight:'auto'}}   >
              <div  style={{width:'16px',height:'16px',backgroundColor:'#D3D3D3', borderRadius:'16px'}}></div>
              <div  style={{width:'16px',height:'16px',backgroundColor:'#D3D3D3', borderRadius:'16px'}}></div>
              <div  style={{width:'16px',height:'16px',backgroundColor:'#D3D3D3', borderRadius:'16px'}}></div>
              <div  style={{width:'16px',height:'16px',backgroundColor:'#D3D3D3', borderRadius:'16px'}}></div>
              <div  style={{width:'16px',height:'16px',backgroundColor:'#D3D3D3', borderRadius:'16px'}}></div>
          </div>
         
          </div>
     
       
          

          </div>
          
          <div style={{width:'408px',height:'30px',alignItems:'center',display:'flex' }}  >
            <div  style={{width:'400px' , height:'50px',marginLeft:'auto',marginRight:'auto',display:'flex' ,alignItems:'center'}}>
          <div  style={{width:'400px',height:'5px',display:'flex',justifyContent:'space-between',zIndex:'5',alignItems:'center',marginLeft:'auto',marginRight:'auto'}}   >
              <div onClick={e=>clickPercent(e)} style={{backgroundColor:'#D3D3D3',cursor:'pointer'}}>0%</div>
              <div onClick={e=>clickPercent(e)} style={{backgroundColor:'#D3D3D3',cursor:'pointer'}}>25%</div>
              <div onClick={e=>clickPercent(e)} style={{backgroundColor:'#D3D3D3',cursor:'pointer'}}>50%</div>
              <div onClick={e=>clickPercent(e)} style={{backgroundColor:'#D3D3D3',cursor:'pointer'}}>75%</div>
              <div onClick={e=>clickPercent(e)} style={{backgroundColor:'#D3D3D3',cursor:'pointer'}}>100%</div>
          </div>
          </div>
          </div>
      </div>
    );
  }
  
  export default Slider;