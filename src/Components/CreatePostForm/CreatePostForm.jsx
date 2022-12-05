import React, { useState } from 'react';
import './CreatePostForm.css'

//addEntryForm : CreatePostForm :: DisplayEntries : PostList


// Within the CreatePostForm component create a form with 2 input fields. There should be an input field for the user’s name, as well as the body of their post, and each should be bound to its own state variable.



//props: addNewPost = {addNewPost}
//returns: handled username and content

const CreatePostForm = (props) => {


    const[username, setUsername] = useState('');
    const[content, setContent] = useState(''); 
    
    
    function handleSubmit(event){
        event.preventDefault();
        let newPost = {
            username: username,
            content: content
        }
        console.log(newPost);
        props.addNewPost(newPost);
    }


    return (  

 
        <form onSubmit ={handleSubmit}>
            <div>
                <label>Enter Username</label>
                <input type = 'text'className ='form-control' value={username} onChange={(event) => setUsername(event.target.value)}/>
            </div>
            <div>
                <label>Create New Post</label>
                <input type = 'text' className ='form-control' value={content} onChange={(event) => setContent(event.target.value)}/>
            </div>
            <button type = 'submit'>Post Now</button>
        </form>
    );
}
 

export default CreatePostForm;