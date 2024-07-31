import React, { useState } from 'react'
import Form from '../../common/Form'
import './index.css'

const Index = () => {
  const [data,setData] = useState([]);
  const getDataHandler = (e) => {
    setData([...data,e]);
    console.log(data)
  }
  return (
    <>
    <Form fetchData={getDataHandler}/>
    <div className="container showdata">
      
      {data.map((item) => (
        <>
          <ul>
            <div className="li-div">
              <li>Expence : {item.name}</li>
              <li>Price : {item.amount}</li>
              <li>Date : {item.date}</li>
            </div>
          </ul>
        </>
      ))}  
      
    </div>
    </>
  )
}

export default Index