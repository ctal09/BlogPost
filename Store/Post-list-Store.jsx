import { Children, createContext, useReducer } from "react";
import Postlist from "../src/Components/Postlist";

export const PostList = createContext({
  postList: [],
  addpost: () => {},
  deletepost: () => {},
});

const postListreducer = (currPostList, action) => {
  let newpostlist = currPostList;
  if (action.type === "Delete_post") {
    newpostlist = currPostList.filter(
      (post) => post.id != action.payload.postID
    );
  } else if (action.type === "Add_post") {
    newpostlist = [action.payload, ...currPostList];
  }
  return newpostlist;
};

const PostListProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(
    postListreducer,
    Default_Postlist
  );

  const addpost = (UserId, title, body, reactions, tag) => {
    dispatchPostList({
      type: "Add_post",
      payload: {
        id: Date.now,
        Post_Title: title,
        body: body,
        no_of_reaction: reactions,
        userID: UserId,
        tags: tag,
      },
    });
  };

  const deletepost = (postID) => {
    dispatchPostList({
      type: "Delete_post",
      payload: {
        postID,
      },
    });
  };

  return (
    <PostList.Provider value={{ postList, addpost, deletepost }}>
      {children}
    </PostList.Provider>
  );
};

const Default_Postlist = [
  {
    id: "1",
    Post_Title: "Go To Pokhara",
    body: "Hi Friends, I am going to Pokhara for my vacation. I Hope I will enjoy it a lot. Peace Out",
    no_of_reaction: "2",
    userID: "user-76",
    tags: ["vacation", "Pokhara"],
  },
  {
    id: "2",
    Post_Title: "Go To Chitwan",
    body: "Hi Friends, I am going to Chitwan for my vacation. I Hope I will enjoy it a lot. Peace Out",
    no_of_reaction: "27",
    userID: "user-71",
    tags: ["vacation", "Chitwan"],
  },
  {
    id: "2354",
    Post_Title: "How Your ",
    body: "Hi Friends,  Peace Out",
    no_of_reaction: "276",
    userID: "user-71",
    tags: ["Peace", "Chill"],
  },
  {
    id: "223354",
    Post_Title: "How adsjajdYour ",
    body: "Hi Friends, adslajdla Peace Out",
    no_of_reaction: "2476",
    userID: "user-7ss1",
    tags: ["Peace", "Chalkjdlaill"],
  },
  {
    id: "22eee3354",
    Post_Title: "How adsdfbsbfs,sjajdYour ",
    body: "Hi Frsdfjskdfiends, adslajdla Peace Out",
    no_of_reaction: "23e34476",
    userID: "usesdfbskdfhsfr-7ss1",
    tags: ["sfakjhfjls", "Chalkjdlaill"],
  },
];
export default PostListProvider;
