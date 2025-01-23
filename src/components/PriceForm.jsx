import React, { useState } from 'react'
import '../assets/styles/componentStyles/PriceForm.css'
import { Link } from 'react-router-dom'

export default function PriceForm() {

    const [userBudget,setUserBudget] = useState('')
    const [userService, setUserService] = useState('')
    const [output, setOutput] = useState('')
    const [error, setError] = useState('')


    const handleSubmit = (e) => {
        e.preventDefault()
        

        if(userBudget === ''){
            setError('Please provide a budget')
        }else if(userService === ''){
            setError('Please select a service')
        }else{
            calculateService(userBudget, userService)
        }

    }

    const calculateService = (budget, service) => {
        switch (service){
            case 'socials':
                if(budget <= 250){
                    setOutput('3 post templates that can be utilized on all platforms.') 
                }else if(budget <= 500){
                    setOutput('3 fully customized posts a week with 1 round of reviews.') 
                }else if (budget <= 1000){
                    setOutput('Monthly social media management including: 3 posts/week and daily engagement management.') 
                }else if(budget <= 2500){
                    setOutput('Monthly social media management including: 5 posts/week and daily engagement management. Full brand rebuild - new logo, story & post templates, and styling.') 
                }else{
                    setOutput("Customized 'Alias +' social media package tailored to your needs - whatever they may be. Let's chat for more details") 
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
    <div className='formWrapper'>
      <h1>Alias Studios Name Your Price Tool</h1>
      <form onSubmit={handleSubmit} className='priceForm'>

                <input type='number' name='budget' id='budget' placeholder='Budget ($)' value={userBudget} onChange={(e) => setUserBudget(e.target.value)}></input>
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

           {output != '' ? <div className='serviceWrapper'><p style={{fontSize: '4svh', fontWeight:'bold'}}>Available Service: <br/><br/> {output}</p>    <Link to={'/contact' }className="connectWUs">  Let's Get To Work!</Link></div>: <p>{error}</p>}
    </div>
  )
}
