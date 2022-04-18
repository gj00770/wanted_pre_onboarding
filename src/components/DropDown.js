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
    }
    const onMouseEnterList = (e) => {
       e.target.style.backgroundColor='#D3D3D3'
       
    }
    const onMouseLeaveList = (e) => {
        e.target.style.backgroundColor='white'
       
    }
    const clickValue = (e) =>{
        setCurrentValue(e.target.innerHTML);
        setIsOpen(false);
    }


    return (
      <div  className='dropdown' >
        <div className='dropdown_value-container' onClick={openModal} > 
                <div className='dropdown_value-container_current' >{currentValue}</div>
                <div className='dropdown_value-container_icon-container' >
                <Down  height='17px'/>
                </div>
                
        </div>
       <div className='dropdown_value-combobox' style={{display: isOpen? 'block' : 'none'}}>
           <div className='dropdown_value-combobox_icon' >
           <SearchIcon width='30px'/>
           <input className='searchInput' placeholder='Search Symbol' onChange={search}></input>
           </div>
           
           <div className='dropdown_value-combobox_list-container'>
               <div className='dropdown_value-combobox_list-container-list' >All Symbols</div>
               {
               List.filter((val) =>{
                if(current == ""){
                    return val
                  }else if(val.toLowerCase().includes(current.toLowerCase())){
                    return val
                  }
               }).map((el, key)=><div className='dropdown_value-combobox_list-container-list_item'  onClick={clickValue} onMouseEnter={onMouseEnterList} onMouseLeave={onMouseLeaveList} key={key}  >{el}</div>)}
           </div>
       </div>
         
      </div>
    );
  }
  
  export default DropDown;