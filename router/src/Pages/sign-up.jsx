import { useState } from "react"
import {Link , useNavigate} from 'react-router-dom'

export function SignUp(){
    const[error, setError] = useState('');
    const[nameInputValue, setNameInputValue] = useState('')
    const[emailInputValue, setEmailInputValue] = useState('')
    const[numberInputValue, setNumberInputValue] = useState('')
    const navigat = useNavigate()

    const infoValues = ()=>{
        setNameInputValue('')
        setEmailInputValue('')
        setNumberInputValue('')
        setError('')
        navigat('/home')
    }
    
    const enterKey = (event) => {
        if(event.key === 'Enter'){
            if(nameInputValue.length >= 4 && emailInputValue.length >= 11 && numberInputValue.length === 13){
                infoValues();
            }
            else{
                setError("Juda qisqa yoki bo'sh maydon mavjud !")
            }
        }
    }

    const inputComdition = () => {
        if(nameInputValue.length <= 4 || emailInputValue.length < 11 || numberInputValue.length < 13){
            setError(`Juda qisqa yoki bo'sh maydon mavjud !`)
        }
        else{
            infoValues();
        }
    }
    
    return(<>
    <div className="sign-up-main">
        <h1 className="sign-up-h1">Sing Up</h1>
        <input value={nameInputValue} onKeyDown={enterKey} onChange={(e)=> setNameInputValue(e.target.value)} className="text" type="text" placeholder="Name"/>
        <input value={emailInputValue} onKeyDown={enterKey} onChange={(e)=> setEmailInputValue(e.target.value)} className="email" type="email" placeholder="Email"/>
        <input maxLength={13} value={numberInputValue} onKeyDown={enterKey} onChange={(e)=> setNumberInputValue(e.target.value)} className="phone-number" type="tel" placeholder="Phone Number"/>
        {nameInputValue.length >= 4 && emailInputValue.length >= 11 && numberInputValue.length === 13 ? 
        <Link to={'/home'}><button className="sing-up">Sing Up</button></Link> : 
        <button onClick={inputComdition} className="sing-up">Sing Up</button>}
        <p className="error">{error}</p>
        </div>
    </>)
}