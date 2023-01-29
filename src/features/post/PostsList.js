import {useSelector} from "react-redux";
import {selectAllPosts} from "./postSlice";
import PostAuthor from "./PostAuthor";
import TimeAgo from "./TimeAgo";
import ReactionButton from "./ReactionButton";

const PostsList = () => {
  //Accessing state using redux Hooks
  const posts = useSelector(selectAllPosts);

  // To show New Post Added on the Top. Slice creates a shallow copy of the posts. So we iterate thru it
  const orderedPosts = posts
    .slice()
    .sort((a, b) => b.date.localeCompare(a.date));

  const renderedPosts = orderedPosts.map((post) => (
    <article key={posts.id}>
      <h3>{post.title}</h3>
      <p>{post.content.substring(0, 100)}</p>
      <p className="postCredit">
        <PostAuthor userId={post.userId} />
        <TimeAgo timestamp={post.date} />
      </p>
      <ReactionButton post={post} />
    </article>
  ));
  return (
    <section>
      <h2>{renderedPosts}</h2>
    </section>
  );
};

export default PostsList;
