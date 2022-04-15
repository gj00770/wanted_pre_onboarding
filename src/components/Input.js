import React, { useRef,useState } from "react";
import {ReactComponent as Check} from '../img/check.svg'
import {ReactComponent as Eye} from '../img/eye.svg'
import {ReactComponent as EyeSlash} from '../img/eyeSlash.svg'
function Input() {

    const [email, setEmail] = useState(null);
    const [isPass, setIsPass] = useState('password');
    const [check , setCheck] = useState('grey');
    const [alert, setAlert] = useState('none');
    const [searchTerm, setSearchTerm] = useState("");
    const emailVali = (e) =>{
        setEmail(e.target.value)
        console.log(email)
        const emailRegex = /^(([^<>()\[\].,;:\s@"]+(\.[^<>()\[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;
        if(emailRegex.test(e.target.value)){
            setCheck('green')
            setAlert('none')
        }
       else{
            setCheck('grey')
            
       }
    

    }
    const isEmail = (e) => {
        const emailRegex = /^(([^<>()\[\].,;:\s@"]+(\.[^<>()\[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;
        console.log(e.target.value.length)
       console.log(emailRegex.test(e.target.value))
       if(emailRegex.test(e.target.value)|| e.target.value.length == 0 ){
        setAlert('none')
       }
       else{
        setAlert('block')
       }


      };


    const showPass = () =>{
        console.log('hi')    
        if(isPass=='password'){
            setIsPass('text')
        } 
        else if(isPass == 'text'){
        console.log('hi')    
        setIsPass('password')
        }
        
    }



    return (
      <div style={{marginTop:"40px",width:"420px",backgroundColor:"#F0F8FF",height:"300px",display:'flex',flexDirection:'column' ,alignItems:'center'}}>
          <div style={{display:'flex' , flexDirection:'column',alignItems:'flex-start',marginTop:'30px'}}>
            <div  >E-mail</div>
            <div style={{display:'flex'}}>
                <input  onBlur={(e)=>isEmail(e)} onChange={emailVali} type='text' placeholder='E-mail' style={{height:'40px',width:'380px',fontSize:'16px'  }}></input>
                <div style={{position:'absolute',marginLeft:'350px',marginTop:'13px'}}>
                     <Check  width='20px' fill={check}/>
                </div>
            </div>
            <div style={{display:alert,color:'red'}}>invalid email-address</div>
          </div>

          <div style={{display:'flex' , flexDirection:'column',alignItems:'flex-start',marginTop:'20px'}}>
            <div >Password</div>
            <div style={{display:'flex' }}>
            <input  type={isPass} placeholder='Password' style={{height:'40px',width:'380px',fontSize:'16px'}}></input>
                <div style={{position:'absolute',marginLeft:'350px',marginTop:'14px',cursor:'pointer'}} onClick={showPass}>
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