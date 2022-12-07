

import React, { useState } from 'react';
import CreatePostForm from './Components/CreatePostForm/CreatePostForm.jsx'
import NavBar from './Components/NavBar/NavBar.jsx'
import PostList from './Components/PostList/PostList.jsx'
import './App.css'


//detect change on create post form only.

//post inherits previous posts and new posts, postlist inherits post


function App() {

  

  const[posts, setPosts] = useState([{username: 'coolUser3000', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec non mattis velit. Nunc laoreet est sed lacus feugiat, quis accumsan ex feugiat. Morbi vehicula, nunc eget malesuada tempor, ante eros eleifend odio, sit amet interdum ex quam nec massa. In congue orci sed hendrerit vestibulum. Etiam varius vestibulum ultricies. Ut posuere libero lectus, eu aliquet tellus facilisis id. Maecenas imperdiet, nisi at mollis volutpat, lorem quam tincidunt velit, vitae luctus tortor libero eleifend eros. Cras lacus ante, tincidunt pharetra posuere id, vulputate vitae sem. Nunc ut nibh lacinia, maximus ex eget, convallis sapien. Duis ex diam, tristique quis euismod a, aliquet nec diam. Phasellus pharetra viverra feugiat. Maecenas nisl neque, rutrum vitae tortor nec, dapibus auctor risus.  Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Duis sodales elit ac pharetra fringilla. Suspendisse nec mauris a libero ornare pretium. Nunc hendrerit ornare pellentesque. Nullam feugiat consectetur feugiat. Mauris nulla dui, bibendum quis mauris nec, vehicula viverra leo. Vestibulum bibendum pretium magna non rhoncus. Suspendisse molestie ut nulla ac pulvinar. Sed eu efficitur diam. Maecenas nec tempor odio, nec euismod metus. Duis sed congue lorem.', date: '2022-12-01'}, {username: 'greatestEver', content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque laoreet faucibus est id dictum. Quisque ut purus ut nisi venenatis tempus. Donec volutpat rutrum lacus, id fringilla mi vehicula quis. Nullam finibus luctus urna. Vivamus at dolor ut ex efficitur semper. Nulla semper mauris a lorem consectetur, ac imperdiet neque tristique. Donec feugiat eget tortor nec rhoncus. ", date: '2022-11-03'}])

  function addNewPost(post){
    let tempPost = [post, ...posts];
    setPosts(tempPost);
  }


  return (
    <div className="App">
      <header className="App-header">
      </header>
      <div >
        {<NavBar/>}
        <div className = 'border-box'><CreatePostForm addNewPost = {addNewPost}/></div>
        <div className = 'border-box'><PostList previousPosts = {posts}/></div>
      </div>



    </div>
  );
}

export default App;
