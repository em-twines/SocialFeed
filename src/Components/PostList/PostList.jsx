import { getByDisplayValue } from '@testing-library/react';
import React, { useState } from 'react';
import Post from '../../Components/Post/Post.jsx'
import CreatePostForm from '../CreatePostForm/CreatePostForm.jsx';
import './PostList.css'
import '../../App.css'


//addEntryForm : CreatePostForm :: DisplayEntries : PostList


//Within the PostList component, create the feed where all your posts will be displayed in your app. All posts should be passed into this component using props. Then, utilize the “map” higher order array method to map each post to its own Post component.


//passed: all previous posts

const PostList = (props) => {
    let posts; 
    posts = props.previousPosts.map(function(el, index){
        return(
            <div className = 'border-box'>
                <div>{el.username}</div>
                <div>{el.content}</div>
            </div>
            )

        })
    
    
    // if (CreatePostForm){
    //     <Post username = {CreatePostForm.username} content = {CreatePostForm.content}/>
    // }
    

    return (  

        <div>
            <h2>Posts</h2>
            <div className = 'border-box'>{posts}</div>
        </div>

    );
}
 
export default PostList;