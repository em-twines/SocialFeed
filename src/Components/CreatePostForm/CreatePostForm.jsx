import React, { useState } from 'react';
import './CreatePostForm.css'

//addEntryForm : CreatePostForm :: DisplayEntries : PostList


// Within the CreatePostForm component create a form with 2 input fields. There should be an input field for the user’s name, as well as the body of their post, and each should be bound to its own state variable.



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
        setUsername('');
        setContent('');

    }


    

    return (  

 
        <form onSubmit ={handleSubmit} className = 'table'>
            
            <label className = 'name'>Name</label>
            <input className ='form-control username' type = 'text'  value={username} onChange={(event) => setUsername(event.target.value)}></input>
    
            <label className = 'post' >Post</label>
            <textarea className ='form-control content' value={content} onChange={(event) => setContent(event.target.value)} ></textarea>
        
            <button className = 'badge badge-pill btn btn-primary create ' type = 'submit'>Create</button>
        </form>
    );
}
 

export default CreatePostForm;