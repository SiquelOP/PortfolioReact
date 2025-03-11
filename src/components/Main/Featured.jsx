const Featured = ({ post }) => {
  return (
    <article class="post featured">
      <header class="major">
        <span class="date">{post.date}</span>
        <h2>
          <a href={post.url}>{post.title}</a>
        </h2>
        <p>{post.text}</p>
      </header>
      <a href="#" class="image main">
        <img src={post.src} alt={post.title} />
      </a>
      {/* <ul class="actions special">
        <li>
          <a href="#" class="button large">
            Full Story
          </a>
        </li>
      </ul> */}
    </article>
  );
};

export default Featured;
