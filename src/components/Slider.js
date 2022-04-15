import React, { useRef,useState,useEffect,useCallback } from "react";

function Slider() {
    const SliderRef = useRef(null);
    const SliderContainerRef = useRef(null);
    const [isClick, setIsClick] = useState(false);
    const [percent , setPercent] = useState(0);
    const [length, setLength] = useState('12px');
    const [paintCircle , setPaintCircle] = useState(1);


    const clickMouse = (e) =>{
        //console.log('232323232222')
        setIsClick(true)
        //console.log(isClick)
        let first = document.documentElement.clientWidth;
        console.log(first)
       // console.log(SliderContainerRef.current.getBoundingClientRect().left)//click
        console.log('현재위치',e.nativeEvent.pageX-12) // 
        console.log('상위좌표',SliderContainerRef.current.getBoundingClientRect().left) // 현재위치
        console.log((SliderContainerRef.current.getBoundingClientRect().left+8-e.nativeEvent.pageX)/-4.48 )
        //400-16  384
        // console.log((e.nativeEvent.clientX-SliderContainerRef.current.getBoundingClientRect().left+8) /3.84)
        if((  SliderContainerRef.current.getBoundingClientRect().left+8-e.nativeEvent.pageX ) /-3.84 >= 100) {
            setPercent(100);
            SliderRef.current.style.left = '404px'
            setLength('392px')
        }
        else if((  SliderContainerRef.current.getBoundingClientRect().left+8-e.nativeEvent.pageX ) /-3.84 <= 0){

            setPercent(0)
            SliderRef.current.style.left = '20px'
            setLength('0px')
        }
        else{
            setPercent(Math.round((  SliderContainerRef.current.getBoundingClientRect().left+8-e.nativeEvent.pageX ) /-3.84))
            //SliderRef.current.style.left = `${(SliderContainerRef.current.getBoundingClientRect().left+8-e.nativeEvent.pageX)  /-3.84 }%`
            SliderRef.current.style.left = `${(SliderContainerRef.current.getBoundingClientRect().left-e.nativeEvent.pageX-12 )*-1}px`
            setLength(`${(SliderContainerRef.current.getBoundingClientRect().left-e.nativeEvent.pageX-12 )*-1-(12)}px`)
        }
       
    }
//20 - 404
//  384
//  91
// 111
// 202
// 292
// 192 + 20
// 2
    const clickPercent = (e) =>{
      console.log('34343')
        if(e.target.innerHTML == '0%') {
            setPercent(0)
            SliderRef.current.style.left = '20px'
            setLength('0px')
        }
        else if(e.target.innerHTML == '25%'){

            setPercent(25)
            SliderRef.current.style.left = '115.5px'
            setLength('103.5px')
        }
        else if(e.target.innerHTML == '50%'){

            setPercent(50)
            SliderRef.current.style.left = '212px'
            setLength('200px')
        }
        else if(e.target.innerHTML == '75%'){
            setPercent(75)
            SliderRef.current.style.left = '308px'
            setLength('296px')

        }
        else if(e.target.innerHTML == '100%'){

            setPercent(100)
            SliderRef.current.style.left = '404px'
            setLength('392px')
            //SliderRef.current.style.left = `${SliderContainerRef.current.getBoundingClientRect().left-4+(384/4 * 4 )}px`
            
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
            SliderRef.current.style.left = `404px`
             setPercent(100)
             setLength('392px')
         }
         else if((  SliderContainerRef.current.getBoundingClientRect().left+8-e.pageX ) /-3.84 <= 0){
 
             setPercent(0)
             SliderRef.current.style.left = `20px`
             setLength('0px')
         }
         else{
             setPercent(Math.round((  SliderContainerRef.current.getBoundingClientRect().left+8-e.pageX ) /-3.84))
             SliderRef.current.style.left = `${(SliderContainerRef.current.getBoundingClientRect().left-e.pageX-12 )*-1}px`
             setLength(`${(SliderContainerRef.current.getBoundingClientRect().left-e.pageX-12 )*-1 -(12)}px`)
         
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



    

    return (
      <div style={{marginTop:'40px',width:'460px',backgroundColor:'#F0F8FF',height:'200px',display:"flex",flexDirection:'column',justifyContent:'space-evenly', display:'flex',alignItems:'center'}} className="Slider"    >
          <div style={{display:'flex',justifyContent:'space-around'}}>
                <div  style={{width:'360px',height:'40px',border:'1px solid #D3D3D3 '}}>{percent}%</div>
                
          </div>
          <div style={{width:'448px',height:'30px',alignItems:'center',display:'flex' }}  >
          <div   style={{marginLeft:'27px',zIndex:'5',position:"absolute",width:`${length}`,height:'6px',backgroundColor:'blue',zIndex:'6' }}></div> 
          <div   onMouseDown = {e => mouseDown(e)} ref={SliderRef} style={{left:'20px',zIndex:'7',position:"relative",width:'24px',height:'24px',backgroundColor:'red' ,borderRadius:'24px'}}></div> 
            <div onClick={e=>clickMouse(e)} style={{width:'400px' , height:'50px',marginRight:'12px',display:'flex' ,alignItems:'center'}}>
          <div  ref={SliderContainerRef} style={{backgroundColor:'#D3D3D3',width:'400px',height:'5px',display:'flex',justifyContent:'space-between',zIndex:'5',alignItems:'center',marginLeft:'auto',marginRight:'auto'}}   >
              <div  style={{width:'16px',height:'16px',backgroundColor:'#D3D3D3', borderRadius:'16px',backgroundColor:'blue'}}></div>
              <div  style={{width:'16px',height:'16px',backgroundColor:'#D3D3D3', borderRadius:'16px', backgroundColor:percent >= 25? 'blue' : '#D3D3D3'}}></div>
              <div  style={{width:'16px',height:'16px',backgroundColor:'#D3D3D3', borderRadius:'16px',backgroundColor:percent >= 50? 'blue' : '#D3D3D3'}}></div>
              <div  style={{width:'16px',height:'16px',backgroundColor:'#D3D3D3', borderRadius:'16px',backgroundColor:percent >= 75? 'blue' : '#D3D3D3'}}></div>
              <div  style={{width:'16px',height:'16px',backgroundColor:'#D3D3D3', borderRadius:'16px',backgroundColor:percent >= 100? 'blue' : '#D3D3D3'}}></div>
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