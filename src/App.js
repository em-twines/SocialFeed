

import React, { useState } from 'react';
import CreatePostForm from './Components/CreatePostForm/CreatePostForm.jsx'
import NavBar from './Components/NavBar/NavBar.jsx'
import Post from './Components/Post/Post.jsx'
import PostList from './Components/PostList/PostList.jsx'
import './App.css'

function App() {

  const[posts, setPosts] = useState([{username: 'testUserName', content: "hello world."}, {username: 'testUserName1', content: "hello world again."}])

  function addNewPost(post){
    let tempPost = [posts, post];
    setPosts(tempPost);
  }


  return (
    <div className="App">
      <header className="App-header">
      </header>
      <div>
        {/* <NavBar displayNavBar =  */}
  
        <PostList previousPosts = {posts}/>
        <CreatePostForm addNewPost = {addNewPost}/>
      </div>



    </div>
  );
}

export default App;
