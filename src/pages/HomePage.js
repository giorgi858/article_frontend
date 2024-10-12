import axios from "axios"
import React, { useEffect, useState } from "react"
import Form from "../components/Form"
import List from "../components/List"
import useAuth from "../hooks/useAuth"
import { useNavigate } from "react-router-dom"



const HomePage = () => {
  const API_URL = 'https://jsonplaceholder.typicode.com/'
  const navigate = useNavigate()

  const [reqType, setReqType] = useState('users')
  const [items, setItems] = useState([])
  const [error, setError] = useState('')
  const { setAuth } = useAuth()


  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await axios.get(`${API_URL}${reqType}`)
        const data = await response.data
        setItems(data)
      }
       catch (err) {
        setError(err)
      }
    }
    fetchItems()

  },[reqType])

  


  return (
    <div>
    <Form reqType={reqType} setReqType={setReqType} />
    <List items={items}/>
  </div>
  )
}

export default HomePage