import React, { useState } from 'react'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import SendIcon from '@mui/icons-material/Send'
import { db } from '../firebase/firebase'
import { collection, addDoc, serverTimestamp } from 'firebase/firestore'

const textFields = [['Name','text'], ['Surname','text'], ['Phone','tel'], ['Email','email']]

const Form = ({items, total, submit}) => {
    
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
        const newDoc = await addDoc(collections, {
          buyer: inputs,
          items,
          total,
          date: serverTimestamp()
        })
        submit(newDoc.id)
      } catch (e) {
        console.log(e)
      }
    }
    fetchDoc()
  }

  return(
    <>
      <form onSubmit={handleSubmit}>
        <h1 style={{textAlign: 'center'}}>
          Form
        </h1>
        {textFields.map((field,i) => {
          return (
            <div style={styles} key={i}>
              <TextField
                required
                key={i}
                id="outlined-basic"
                type={field[1]}
                label={field[0]}
                name={field[0]}
                variant="outlined" 
                onChange = {handleChange} 
                value = {inputs.field}
                margin="normal"
                sx={{ width: 1/4}}
              />
            </div>
          )}
        )}
        <div style={styles}>
          <Button variant="contained" endIcon={<SendIcon />} type='submit' sx={{width: 1/4, my: 5}}>
            Send
          </Button>
        </div>
      </form>
    </>
  )
}

export default Form

const styles = {
  display: 'flex',  
  justifyContent:'center'
}