import React, { useState } from 'react'
import './Form.css'

const Index = (props) => {

    const [data,setData] = useState({
        name:"",
        amount:"",
        date:"",
    })
    const getDataHandler = (e) =>{
        setData((previousState) => ({
            ...previousState,
            [e.target.name]:e.target.value,
        }))
    }
    const onSubmitHandler = (e) =>{
        e.preventDefault();
        if (e.target.name.value.trim() && e.target.amount.value && e.target.date.value) {
            props.fetchData(data)
        }
        // e.target.name.value.trim() && e.target.amount.value && e.target.date.value? props.fetchData(data):"";
    }
  return (
    <>
        <form className='container' onSubmit={onSubmitHandler}>
            <div className='form'>
                <div className="input-field">
                    <div className="name">
                        <label htmlFor="name">Expence</label>
                        <input type="text" name="name" id="name"  onChange={getDataHandler}/>
                    </div>
                    <div className="amount">
                        <label htmlFor="amount">Amount</label>
                        <input type="number" name="amount" id="amount"  onChange={getDataHandler}/>
                    </div>
                    <div className="date">
                        <label htmlFor="date">Date</label>
                        <input type="date" name="date" id="date"  onChange={getDataHandler}/>
                    </div>
                </div>
                <div className="btn">
                    <input className='button' type="submit" value="Add Expence" />
                </div>
            </div>
        </form>
    </>
  )
}

export default Index