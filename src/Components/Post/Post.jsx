
import CreatePostForm from '../../Components/CreatePostForm/CreatePostForm.jsx'
//user's name, body of post, like and dislike buttons

//returns handled and formatted username and content as well as like and dislike uttons

const Post = () => {

    let posts; 
    posts = props.previousPosts.map(function(el, index){
        return(
            <div key = {index}>
                <div>{el.username}</div>
                <div>{el.content}</div>
            </div>
            )
        })
    
        
        let newPost = props.map(function(el, index){
            return(
                <div key = {index}>
                    <div>{el.username}</div>
                    <div>{el.content}</div>
                </div>
            )
        })



        
    // return (  

    // <div>
        
    //     <p>{CreatePostForm.username}</p>
    //     <p>{CreatePostForm.content}</p>
    //     <span><button>Like</button></span>
    //     <span><button>Dislike</button></span>

    // </div>



    );
}
 
    
       
export default Post;

 
