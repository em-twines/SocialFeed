
import CreatePostForm from '../../Components/CreatePostForm/CreatePostForm.jsx'
//user's name, body of post, like and dislike buttons

// Within the Post component create a template of how you would like each individual post to be displayed. This will include the user’s name, the body of the post, and the “like” and “dislike” buttons.

//needs to be passed post username and content

//returns handled and formatted username and content as well as like and dislike 

const Post = (props) => {



    return (  

    <div>
        
        <p>{props.username}</p>
        <p>{props.content}</p>
        <span><button>Like</button></span>
        <span><button>Dislike</button></span>

    </div>



    );
}
 
    
       
export default Post;

 
