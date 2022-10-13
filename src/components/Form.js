import React, { useState } from 'react'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import SendIcon from '@mui/icons-material/Send'
import { db } from '../firebase/firebase'
import { collection, addDoc, serverTimestamp } from 'firebase/firestore'

const textFields = [['Name','text'], ['Surname','text'], ['Phone','number'], ['Email','email']]

const Form = ({items, total}) => {
    
  const [inputs, setInputs] = useState({})

  const handleChange = (e) => {
    const name = e.target.name
    const value = e.target.value
    setInputs(values => ({...values, [name]: value}))
  }
    
  const handleSubmit = (e) => {
    e.preventDefault()
    const collections = collection(db, 'sells')
    const fetchDoc = async () => {
      try {
        await addDoc(collections, {
          buyer: inputs,
          items,
          total,
          date: serverTimestamp()
        })
        alert(`Your order was loaded successfully. Your order ID is ${collection.id}`)
      } catch (e) {
        console.log(e)
      }
    }
    fetchDoc() 
  }

  return(
    <form onSubmit={handleSubmit}>
      {textFields.map((field,i) => {
        return (
          <TextField
            key={i}
            id="outlined-basic"
            type={field[1]}
            label={field[0]}
            name={field[0]}
            variant="outlined" 
            margin="normal"
            onChange = {handleChange} 
            value = {inputs.field}
          />
        )}
      )}
      <Button variant="contained" endIcon={<SendIcon />} type='submit'>
        Send
      </Button>
    </form>
  )
}

export default Form