const Post = ({ post }) => {
  return (
    <article>
      <header>
        <span className="date">{post.date}</span>
        <h2>{post.title}</h2>
      </header>
      <a href={post.url} className="image fit">
        <img src={post.src} alt={post.title} />
      </a>
      <p>{post.text}</p>
    </article>
  );
};

export default Post;
