
import CreatePostForm from '../../Components/CreatePostForm/CreatePostForm.jsx'
//user's name, body of post, like and dislike buttons

//returns handled and formatted username and content as well as like and dislike 

const Post = () => {



    return (  

    <div>
        
        <p>{CreatePostForm.username}</p>
        <p>{CreatePostForm.content}</p>
        <span><button>Like</button></span>
        <span><button>Dislike</button></span>

    </div>



    );
}
 
    
       
export default Post;

 
