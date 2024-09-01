import {AiFillDelete} from "react-icons/ai"
import { useContext } from "react";
import { PostList } from "../../Store/Post-list-Store";




const Post=({post})=>{

  const {deletepost}= useContext(PostList);


 return <div className="card post-card">
  <div className="card-body">
  <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
    <AiFillDelete onClick={()=>deletepost(post.id)}/>
  
  </span>
   <h5 className="card-title">{post.Post_Title}</h5>
   <p className="card-text">{post.body}</p>
   {post.tags.map(tag=><span key={tag} className="badge rounded-pill text-bg-primary hashtag">{tag}</span>)}
   <div className="alert alert-success reactions" role="alert">This post has been reacted by {post.no_of_reaction} people.</div>
 </div>
</div>
}
export default Post;