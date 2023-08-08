import { useState, useEffect } from 'react'
import DisplayAllPosts from './components/DisplayAllPosts'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/NavBar'
import MessagesPage from './components/Messages'
import LoginPage from './components/LoginPage'
import RegistrationForm from './components/Auth'

const COHORT_NAME = '2306-FSA-ET-WEB-FT-SF'
const BASE_URL = `https://strangers-things.herokuapp.com/api/${COHORT_NAME}/posts`




function App() {
  const [posts, setPosts] = useState([])
  useEffect(() => {
    const fetchAllPosts = async () => {
      try {
        const response = await fetch(BASE_URL);
        const data = await response.json();
        const fetchedPosts = data.data.posts;
        // console.log(fetchedPosts);
        setPosts(fetchedPosts);
      } catch (error) {
        console.log(error);
      };

    }
    fetchAllPosts()

  }, [])
  console.log(posts)
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/posts" element={<DisplayAllPosts allPosts={posts} />} />
        <Route path="/messages" element={<MessagesPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegistrationForm />} /> 
      </Routes>
    </>
  )
}

export default App
