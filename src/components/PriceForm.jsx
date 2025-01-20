import React, { useState } from 'react'
import '../assets/styles/componentStyles/PriceForm.css'

export default function PriceForm() {

    const [userBudget,setUserBudget] = useState('')
    const [userService, setUserService] = useState('')
    const [output, setOutput] = useState('')


    const handleSubmit = (e) => {
        e.preventDefault()
        

        if(userBudget === ''){
            setOutput('Please provide a budget')
        }else if(userService === ''){
            setOutput('Please select a service')
        }else{
            calculateService(userBudget, userService)
        }

    }

    const calculateService = (budget, service) => {
        switch (service){
            case 'socials':
                if(budget <= 250){
                    setOutput('socials <250') 
                }else if(budget <= 500){

                }else if (budget <= 1000){

                }else if(budget <= 2500){

                }else{
                    
                }
            case 'web':
                if(budget <= 250){

                }else if(budget <= 500){

                }else if (budget <= 1000){

                }else if(budget <= 2500){

                }else{
                    
                }
            case 'logo':
                    if(budget <= 250){

                    }else if(budget <= 500){

                    }else if (budget <= 1000){

                    }else if(budget <= 2500){

                    }else{
                        
                    }
            case 'ads':
                if(budget <= 250){

                }else if(budget <= 500){

                }else if (budget <= 1000){

                }else if(budget <= 2500){

                }else{
                    
                }
            case 'marketing':
                if(budget <= 250){

                }else if(budget <= 500){

                }else if (budget <= 1000){

                }else if(budget <= 2500){

                }else{
                    
                }
            case 'email':
                if(budget <= 250){

                }else if(budget <= 500){

                }else if (budget <= 1000){

                }else if(budget <= 2500){

                }else{
                    
                }
            case 'print':
                if(budget <= 250){

                }else if(budget <= 500){

                }else if (budget <= 1000){

                }else if(budget <= 2500){

                }else{
                    
                }
            }
    }

  return (
    <div>
      <form onSubmit={handleSubmit} className='priceForm'>
                
                <input type='number' name='budget' id='budget' placeholder='Budget' value={userBudget} onChange={(e) => setUserBudget(e.target.value)}></input>
                <select name='service' id='service' value={userService} onChange={(e) => setUserService(e.target.value)}>
                    <option value="" disabled selected>Select Required Service</option>
                    <option value="socials">Social Media Management</option>
                    <option value='web'>Website Development/Design</option>
                    <option value='logo'>Logo Design</option>
                    <option value='ads'>Digital Advertising</option>
                    <option value='marketing'>Marketing Strategy</option>
                    <option value='email'>Email Setup w/Custom Domain</option>
                    <option value='print'>Print Media</option>
                    <input type="submit" id="submit-form" value="Submit" className="hidden"/>
                </select>

            </form>
            <label for="submit-form" tabindex="0" className='submitText' > <div className='connectWUs' id='priceSubmit'>Submit</div> </label> 

            <p>{output}</p>
    </div>
  )
}
