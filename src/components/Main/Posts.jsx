import Post from "./Post";
import Featured from "./Featured";
import posts from "../../assets/data/posts";

const Posts = () => {
  var posts2 = posts.slice();
  posts2.shift();

  return (
    <>
      <Featured post={posts[0]} />
      <section className="posts">
        {posts2.map((elem, index) => (
          <Post key={index} post={elem} />
        ))}
      </section>
    </>
  );
};

export default Posts;
