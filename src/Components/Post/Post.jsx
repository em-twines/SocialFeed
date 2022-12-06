import React, {useState, useEffect} from "react";
import './Post.css'
//user's name, body of post, like and dislike buttons

// Within the Post component create a template of how you would like each individual post to be displayed. This will include the user’s name, the body of the post, and the “like” and “dislike” buttons.



const Post = (props) => {

    const [active, setActive] = useState(true);
    const [activeDislike, setActiveDislike] = useState(true);



        const handleClick = () => {
            setActive(!active);
            setActiveDislike(true); 
       
        }
        
            
        const handleClickDislike = () => {
            setActiveDislike(!activeDislike);
            setActive(true);
        }
 
    return (  

    <div>
        <div className = 'container'>
            <p className = 'username'>{props.username}</p>
            <p className = 'content'>{props.content}</p>
        </div>
        <div className = 'likes-container'>

        <button  type="button"  className ="button btn bg-transparent" ><i onClick = {handleClick}className={active? "bi bi-hand-thumbs-up-fill icon-size like": "bi bi-hand-thumbs-up-fill icon-size liked"} ></i></button>

        <button  type="button" className ="button btn bg-transparent" ><i onClick = {handleClickDislike} className={activeDislike? "bi bi-hand-thumbs-down-fill icon-size dislike": "bi bi-hand-thumbs-down-fill icon-size disliked"} ></i></button>

        </div>  
    </div>

    );
}
    
       
export default Post;

 
