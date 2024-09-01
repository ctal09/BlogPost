import { Children, createContext, useReducer } from "react";
import Postlist from "../src/Components/Postlist";


 export const PostList = createContext({
    postList: [],
    addpost: ()=>{},
    deletepost:()=>{},
});

const postListreducer = (currPostList, action) =>{
    let newpostlist = currPostList;
    if(action.type==='Delete_post'){
        newpostlist= currPostList.filter(post=>post.id!=action.payload.postID);
    }
    return newpostlist;
}




const PostListProvider =({ children })=>{

        const [postList,dispatchPostList]= useReducer(postListreducer, Default_Postlist);


        const addpost=(UserId,title,body,reactions,tag)=>{
            console.log(`${UserId},${title},${body},${reactions},${tag}`)

        };
        
        
        const deletepost = (postID)=>{
            dispatchPostList({
                type: 'Delete_post',
                payload: {
                    postID,
                },
            });
        
        };


     return <PostList.Provider value={{postList, addpost, deletepost}}>{children}</PostList.Provider>
}


const Default_Postlist = [{
    id:'1',
    Post_Title:'Go To Pokhara',
    body:'Hi Friends, I am going to Pokhara for my vacation. I Hope I will enjoy it a lot. Peace Out',
    no_of_reaction:'2',
    userID:'user-76',
    tags:["vacation", "Pokhara"],
},
{
    id:'2',
    Post_Title:'Go To Chitwan',
    body:'Hi Friends, I am going to Chitwan for my vacation. I Hope I will enjoy it a lot. Peace Out',
    no_of_reaction:'27',
    userID:'user-71',
    tags:["vacation", "Chitwan"],
}]
export default PostListProvider;
