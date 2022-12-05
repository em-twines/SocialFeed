

import React, { useState } from 'react';
import CreatePostForm from './Components/CreatePostForm/CreatePostForm.jsx'
import NavBar from './Components/NavBar/NavBar.jsx'
import Post from './Components/Post/Post.jsx'
import PostList from './Components/PostList/PostList.jsx'
import './App.css'


//detect change on create post form only.



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
      <div >
        {/* <NavBar displayNavBar =  */}
        <div className = 'border-box'><Post username = {CreatePostForm.username} content = {CreatePostForm.content}/></div>
        <PostList previousPosts = {posts}/>
        <div className = 'border-box'><CreatePostForm addNewPost = {addNewPost}/></div>
      </div>



    </div>
  );
}

export default App;
