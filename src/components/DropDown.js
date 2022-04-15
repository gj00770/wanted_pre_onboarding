import React, { useRef,useState } from "react";
import {ReactComponent as SearchIcon} from '../img/searchIcon.svg'
import {ReactComponent as Down} from '../img/down.svg'
import './DropDown.css';
function DropDown() {
    const List = ["BTCUSD.PREP","ETHUSD.PREP","BCUHED.PREP","LCDTUDS.PREP","XRPUSD.PREP","1000PDSF.PREP"]
    const [current, setCurrent] = useState('');
    const [isOpen, setIsOpen] = useState(false);
    const [currentValue, setCurrentValue] = useState('All Symbols');
    const search = (e) => {
        setCurrent(e.target.value)
      
    }
    const openModal = () => {
       
        setIsOpen(!isOpen);
        console.log(isOpen);
    }
    const onMouseEnterList = (e) => {
       e.target.style.backgroundColor='#D3D3D3'
       
    }
    const onMouseLeaveList = (e) => {
        e.target.style.backgroundColor='white'
        console.log('hi')
       
    }
    const clickValue = (e) =>{
        setCurrentValue(e.target.innerHTML);
        setIsOpen(false);
    }
    return (
      <div  style ={{marginTop:'40px',width:'400px',height:'500px',backgroundColor:'#F0F8FF'}}>
        <div onClick={openModal}  style = {{display:'flex',justifyContent:'space-between',width:'360px',margin:'auto',marginTop:'20px',height:'40px' , border:'1px solid black',alignItems:'center',cursor:'pointer',backgroundColor:'white'}}> 
                <div style={{marginLeft:'10px'}}>{currentValue}</div>
                <div style={{marginRight:'10px'}}>
                <Down  height='17px'/>
                </div>
        </div>
       <div style={{marginTop:'6px',display: isOpen? 'block' : 'none'}}>
           <div style={{display:'flex',width:'358px' , backgroundColor:'white',marginLeft:'auto',marginRight:'auto'}}>
           <SearchIcon width='30px'/>
           <input className='searchInput' placeholder='Search Symbol' style={{width:'328px',height:'40px',backgroundColor:'white',border:'none'}} onChange={search}></input>
           </div>
           
           <div  style={{width:'358px' , display:'flex', flexDirection:'column', alignItems:'flex-start',border:'1px solid black',marginLeft:'20px',backgroundColor:'#D3D3D3'}}>
               <div style={{height:'40px',width:'358px',display:'flex',flexDirection:'column',backgroundColor:'white',borderBottom:'1px solid black'}}>All Symbols</div>
               {
               List.filter((val) =>{
                if(current == ""){
                    return val
                  }else if(val.toLowerCase().includes(current.toLowerCase())){
                    return val
                  }
               }).map((el, key)=><div onClick={clickValue} onMouseEnter={onMouseEnterList} onMouseLeave={onMouseLeaveList} key={key} style={{height:'40px',cursor:'pointer',backgroundColor:'#D3D3D3',padding:'0px 0px 0px 0px',width:'100%',backgroundColor:'white'}} >{el}</div>)}
           </div>
       </div>
         
      </div>
    );
  }
  
  export default DropDown;