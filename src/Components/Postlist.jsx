import { useContext } from "react";
import Post from "./Post";
import { PostList } from "../../Store/Post-list-Store";

const Postlist=()=>{
    const {postList}=useContext(PostList)
    return<>
    {postList.map((post)=>
    <Post key={post.id} post={post}/>)}
   
    
    </>
}
export default Postlist;