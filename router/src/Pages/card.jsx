import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"

export const Card = () => {

    const [cardNumber, setCardNumber] = useState('')
    const [cardDate, setCardDate] = useState('')
    const [cvv, setCvv] = useState('')
    const [error, setError] = useState('')
    const navigate = useNavigate()

    const emptyInputValue = () => {
        setCardNumber('')
        setCardDate('')
        setCvv('')
        setError('')
        navigate('/home.jsx/kiyimlar.jsx')
    }

    const handReset = () => {
        if(cardNumber.length !== 16 || cardDate.length !== 5 || cvv.length !== 3){
            setError("Bo'sh yoki qisqa maydon mavjud !")
            return
        }
        else{
            emptyInputValue();
        }
    }

    const enterKey = (event) => {
        if(event.key === "Enter"){
            handReset();
        }
    }

    useEffect(()=>{
        const interval = setTimeout(()=>{
            setError('')
        },5000)

        return () =>  clearInterval(interval)
    },[error])

    return(
        <>
        <div className="card-main">
            <h1 className="card-exciting">Karta raqamingizni qo'shing !</h1>
            <div className="card-inputs">
                <input maxLength={16} onKeyDown={enterKey} onChange={(e)=> setCardNumber(e.target.value)} type="tel" value={cardNumber} placeholder="0000 0000 0000 0000"/>
                <div className="card-date-input">
                <input maxLength={5} onKeyDown={enterKey} onChange={(e) => setCardDate(e.target.value)} type="tel" value={cardDate} placeholder="00/00"/>
                <input maxLength={3} onKeyDown={enterKey} onChange={(e)=> setCvv(e.target.value)} type="tel" value={cvv} placeholder="CVV" />
                </div>
                {cardNumber.length === 16 && cardDate.length === 5 && cvv.length === 3 ? 
                <button className="card-add-button" onClick={emptyInputValue}>Qo'shish <i class="fa-brands fa-cc-visa"></i></button>
                :
                <button className="card-add-button" onClick={handReset}>Qo'shish <i class="fa-brands fa-cc-visa"></i></button>
                }
                <p className="card-error">{error}</p>
            </div>
        </div>
        </>
    )
}