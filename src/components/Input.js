import React, { useRef,useState } from "react";
import {ReactComponent as Check} from '../img/check.svg'
import {ReactComponent as Eye} from '../img/eye.svg'
import {ReactComponent as EyeSlash} from '../img/eyeSlash.svg'
import "./Input.css"
const emailRegex = /^(([^<>()\[\].,;:\s@"]+(\.[^<>()\[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;
function Input() {

    const [email, setEmail] = useState(null);
    const [isPass, setIsPass] = useState('password');
    const [check , setCheck] = useState('grey');
    const [alert, setAlert] = useState('none');

    const emailVali = (e) =>{
        setEmail(e.target.value)
        if(emailRegex.test(e.target.value)){
            setCheck('green')
            setAlert('none')
        }
       else{
            setCheck('grey')
            
       }
       
    }

    const emailValiOnBlur = (e) => {
       if(emailRegex.test(e.target.value)|| e.target.value.length == 0 ){
        setAlert('none')
       }
       else{
        setAlert('block')
       }


    };


    const showPass = () =>{
        if(isPass=='password'){
            setIsPass('text')
        } 
        else if(isPass == 'text'){
        setIsPass('password')
        }
        
    }



    return (
      <div className="Input" >
          <div className="input_container" >
            <div  >E-mail</div>
            <div className="input_container_input-container"  >
                <input className="input_container_input-container_input" onBlur={(e)=>emailValiOnBlur(e)} onChange={emailVali} type='text' placeholder='E-mail' ></input>
                <div className="input_container_input-container_email-icon" >
                     <Check  width='20px' fill={check}/>
                </div>
            </div>
            <div className="input_alert" style={{display:alert}}>invalid email-address</div>
          </div>

          <div style={{display:'flex' , flexDirection:'column',alignItems:'flex-start',marginTop:'20px'}}>
            <div >Password</div>
            <div className="input_container_input-container" >
            <input  className="input_container_input-container_input"  type={isPass} placeholder='Password' ></input>
                <div className ='input_container_input-container_password-icon'  onClick={showPass}>
                    {   
                        isPass == 'password'?
                        <EyeSlash  width='20px' fill='grey' />
                        
                        :
                        <Eye  width='20px' fill='green' />
                    }

                    
                </div>
            </div>
            
          </div>
      </div>
    );
  }
  
  export default Input;