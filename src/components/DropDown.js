import React, { useRef, useState } from "react";
import { ReactComponent as SearchIcon } from '../img/searchIcon.svg'
import { ReactComponent as Down } from '../img/down.svg'
import './DropDown.css';

const LIST = ["BTCUSD.PREP", "ETHUSD.PREP", "BCUHED.PREP", "LCDTUDS.PREP", "XRPUSD.PREP", "1000PDSF.PREP"]

function DropDownItem({ name, onChange }) {
  const onMouseEnterList = (e) => {
    e.target.style.backgroundColor = '#D3D3D3'

  }
  const onMouseLeaveList = (e) => {
    e.target.style.backgroundColor = 'white'

  }

  return (
    <div className='dropdown_value-combobox_list-container-list'
      data-name={name} onMouseEnter={onMouseEnterList} onMouseLeave={onMouseLeaveList} >{name}</div>
  )

}

function DropDown() {

  const [current, setCurrent] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  const [currentValue, setCurrentValue] = useState('All Symbols');
  const search = (e) => {
    setCurrent(e.target.value)

  }
  const openModal = () => {
    setIsOpen(!isOpen);
  }

  const clickValue = (e) => {
    setCurrentValue(e.target.dataset.name);
    setIsOpen(false);

  }

  return (
    <div className='dropdown' >
      <div className='dropdown_value-container' onClick={openModal} >
        <div className='dropdown_value-container_current' >{currentValue}</div>
        <div className='dropdown_value-container_icon-container' >
          <Down height='17px' />
        </div>

      </div>
      <div className='dropdown_value-combobox' style={{ display: isOpen ? 'block' : 'none' }}>
        <div className='dropdown_value-combobox_icon' >
          <SearchIcon width='30px' />
          <input className='searchInput' placeholder='Search Symbol' onChange={search}></input>
        </div>

        <div className='dropdown_value-combobox_list-container' onClick={clickValue}>
          <DropDownItem name='All Symbols' />
          {
            LIST
              .filter(val =>
              (
                !current || val.toLowerCase().includes(current.toLowerCase())))
              .map((el, key) =>
                <DropDownItem name={el} key={key} />

              )}
        </div>
      </div>

    </div>
  );
}

export default DropDown;