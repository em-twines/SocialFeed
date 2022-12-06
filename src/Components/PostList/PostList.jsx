import Post from "../../Components/Post/Post.jsx";
import "../../App.css";

//addEntryForm : CreatePostForm :: DisplayEntries : PostList

//Within the PostList component, create the feed where all your posts will be displayed in your app. All posts should be passed into this component using props. Then, utilize the “map” higher order array method to map each post to its own Post component.

//passed: all previous posts

const PostList = (props) => {


  return (
    <div className = 'screenWidth'>
        {props.previousPosts.map((el) => {
            return (
            <div >
                    <div><Post username = {el.username} content = {el.content} date = {el.date}/></div>
            </div>
            );
        })}
    </div>
  );
};

export default PostList;
