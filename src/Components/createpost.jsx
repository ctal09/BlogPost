import { useContext, useRef } from "react";
import { PostList } from "../../Store/Post-list-Store";

const CreatePost = () => {
  const { addpost } = useContext(PostList);

  const UserIdele = useRef();
  const titleele = useRef();
  const bodyele = useRef();
  const reactionsele = useRef();
  const tagsele = useRef();

  const handlesubmit = (event) => {
    event.preventDefault();
    const UserId = UserIdele.current.value;
    const title = titleele.current.value;
    const body = bodyele.current.value;
    const reactions = reactionsele.current.value;
    const tags = tagsele.current.value.split(" ");

    addpost(UserId, title, body, reactions, tags);
  };

  return (
    <form className="Createpost" onSubmit={handlesubmit}>
      <div className="mb-3">
        <label htmlFor="UserId" className="form-label">
          Enter your User ID here...
        </label>
        <input
          type="text"
          className="form-control"
          id="UserId"
          placeholder="Enter Your User Id..."
          ref={UserIdele}
        />
      </div>

      <div className="mb-3">
        <label htmlFor="title" className="form-label">
          Post Title
        </label>
        <input
          type="text"
          className="form-control"
          id="title"
          placeholder="How are you feeling today...."
          ref={titleele}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="body" className="form-label">
          Post Content
        </label>
        <textarea
          type="text"
          className="form-control"
          id="title"
          placeholder="Tell us more about it..... "
          ref={bodyele}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="reactions" className="form-label">
          Number of Reactions on this post?
        </label>
        <input
          type="number"
          className="form-control"
          id="reactions"
          placeholder="How many people reacted to your post?"
          ref={reactionsele}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="tags" className="form-label">
          Enter tags
        </label>
        <input
          type="text"
          className="form-control"
          id="tags"
          placeholder="You can enter multiple tags...."
          ref={tagsele}
        />
      </div>

      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};
export default CreatePost;
