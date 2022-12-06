import Post from "../../Components/Post/Post.jsx";
import "./PostList.css";
import "../../App.css";

//addEntryForm : CreatePostForm :: DisplayEntries : PostList

//Within the PostList component, create the feed where all your posts will be displayed in your app. All posts should be passed into this component using props. Then, utilize the “map” higher order array method to map each post to its own Post component.

//passed: all previous posts

const PostList = (props) => {


  return (
    <div>
        <h3>Posts</h3>
        {props.previousPosts.map((el) => {
            return (
            <div className="border-box">
                    <div className = 'border-box'><Post username = {el.username} content = {el.content}/></div>
            </div>
            );
        })}
    </div>
  );
};

export default PostList;
