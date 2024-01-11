import React from 'react'
import { Layout, Button } from "antd";


const Login = () => {
 
  return (
    <div className='login'>
                   
  <section className="user">
    <div className="user_options-container">
      <div className="user_options-text">
        <div className="user_options-unregistered">
          <h2 className="user_unregistered-title">Don't have an account?</h2>
          <p className="user_unregistered-text">
          Unlock the future of finance with our cutting-edge
                          blockchain technology. Experience swift and secure
                          transactions, effortlessly converting crypto to fiat.
                          Revolutionize the way you move money globally.
          </p>
          

        </div>
        
      </div>
      <div className="user_options-forms" id="user_options-forms">
        <div className="user_forms-login">
          <h2 className="forms_title">Login</h2>
          <Button style={{border:"1px solid blue", color:"white", padding:"0 10px"}} type={"primary"} onClick={()=>{
            }}>
              Connect Wallet
            </Button>
        </div>

      </div>
    </div>
  </section>


    </div>
  )
}

export default Login