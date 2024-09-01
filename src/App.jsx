import { useState } from 'react'
import './App.css'
import Header from './Components/header'
import "bootstrap/dist/css/bootstrap.min.css"
import Footer from './Components/footer'
import Sidebar from './Components/sidebar'
import CreatePost from './Components/createpost'

import Postlist from './Components/Postlist'
import PostListProvider from '../Store/Post-list-Store'
function App() {
  
  const [selectedTab,setSelectedTab]=useState("Home");


  return (
    <PostListProvider>
    <div className='app-container'>
      <Sidebar 
          selectedTab={selectedTab} 
          setSelectedTab={setSelectedTab}>
      </Sidebar>
    <div className="content">
    <Header></Header>
    { selectedTab==="Home"? (<Postlist></Postlist>) : (<CreatePost></CreatePost>)}
    <Footer></Footer>
    </div>
        
     </div>
     </PostListProvider>
    
  )
}

export default App
