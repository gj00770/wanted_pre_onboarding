import React, { useRef,useState,useEffect,useCallback } from "react";
import "./Slider.css"
function Slider() {
    const SliderRef = useRef(null);
    const SliderContainerRef = useRef(null);
    const [percent , setPercent] = useState(0);
    const [length, setLength] = useState('12px');


    const clickMouse = (e) =>{
        const containerX = SliderContainerRef.current.getBoundingClientRect().left+8;
        const redDotX = e.nativeEvent.pageX;
        if((  containerX-redDotX ) /-3.84 >= 100) {
            setPercent(100);
            SliderRef.current.style.left = '404px'
            setLength('392px')
        }
        else if((  containerX-redDotX) /-3.84 <= 0){

            setPercent(0)
            SliderRef.current.style.left = '20px'
            setLength('0px')
        }
        else{
            
            setPercent(Math.round((  containerX-redDotX) /-3.84))
            SliderRef.current.style.left = `${(containerX-redDotX-20 )*-1}px`
            setLength(`${(containerX-redDotX-8 )*-1}px`)
        }              
        document.addEventListener('mousemove',  moveMouse,false);
        document.addEventListener('mouseup',  mouseUp,false);
    }


    const clickPercent = (e) =>{
      
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
            
        }
     
       
    }
    
    const mouseUp =  (e) =>{
        
        
        
        document.removeEventListener('mouseup', mouseUp,false)
        document.removeEventListener('mousemove', moveMouse,false)
       
    };
    const moveMouse = (e) =>{
        const containerX = SliderContainerRef.current.getBoundingClientRect().left+8
        const redDotX = e.pageX
         if((  containerX-redDotX ) /-3.84 >= 100) {
            SliderRef.current.style.left = `404px`
             setPercent(100)
             setLength('392px')
         }
         else if(( containerX-redDotX ) /-3.84 <= 0){
 
             setPercent(0)
             SliderRef.current.style.left = `20px`
             setLength('0px')
         }
         else{
             setPercent(Math.round((  containerX-redDotX) /-3.84))
             SliderRef.current.style.left = `${(containerX-redDotX-20 )*-1}px`
             setLength(`${(containerX-redDotX-8 )*-1}px`)
         
         }
        

        };
    const mouseDown=(e) =>{
        

        



        document.addEventListener('mousemove',  moveMouse,false);
        document.addEventListener('mouseup',  mouseUp,false);
    };



    

    return (
      <div className='slider' >
          <div className='slider_percent-container'>
                <div className='slider_percent'>{percent}%</div>
                
          </div>

          <div className='slider_toggle-container'   >
          
            <div   className='slider_red-dot' onMouseDown = {e => mouseDown(e)} ref={SliderRef}></div> 

                <div className='slider-bar' onMouseDown={e=>clickMouse(e)} >
                    <div className='slider-bar_amount' style={{  width:`${length}` }}></div> 
                    <div  className='slider-bar_container' ref={SliderContainerRef}    >
                        <div className='slider-bar_flag' style={{backgroundColor:'blue'}}></div>
                        <div className='slider-bar_flag'  style={{ backgroundColor:percent >= 25? 'blue' : '#D3D3D3'}}></div>
                        <div className='slider-bar_flag'  style={{backgroundColor:percent >= 50? 'blue' : '#D3D3D3'}}></div>
                        <div className='slider-bar_flag'  style={{backgroundColor:percent >= 75? 'blue' : '#D3D3D3'}}></div>
                        <div className='slider-bar_flag'  style={{backgroundColor:percent >= 100? 'blue' : '#D3D3D3'}}></div>
                    </div>
            
            </div>
     
          

          </div>
          
          <div className='slider_flag-button-container'   >
              <div className='slider_flag-button' onClick={e=>clickPercent(e)} >0%</div>
              <div className='slider_flag-button' onClick={e=>clickPercent(e)} >25%</div>
              <div className='slider_flag-button' onClick={e=>clickPercent(e)} >50%</div>
              <div className='slider_flag-button' onClick={e=>clickPercent(e)} >75%</div>
              <div className='slider_flag-button' onClick={e=>clickPercent(e)} >100%</div>
          </div>
      </div>
    );
  }
  
  export default Slider;