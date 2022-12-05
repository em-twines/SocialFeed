import React, { useState } from 'react';
import Post from '../../Components/Post/Post.jsx'

//feed where posts will be shown; all posts passed into this componenet through props. 
// then map each post to post component

//addEntryForm : CreatePostForm :: DisplayEntries : PostList


//passed: all previous posts

const PostList = (props) => {
    let posts; 
    posts = props.previousPosts.map(function(el, index){
        return(
            <div key = {index}>
                {index+= 1}
                <div>{el.username}</div>
                <div>{el.content}</div>
            </div>
            )
        })
    
    
    if (Post){

    }
    

    return (  

        <div>
            <h2>Posts</h2>
            <div>newPost</div>
            <div>{posts}</div>
        </div>

    );
}
 
export default PostList;