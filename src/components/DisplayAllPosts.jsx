import PostActions from "./PostActions";

const DisplayAllPosts = ({ allPosts, authToken }) => {
    console.log(authToken)
  return (
   
    <>
    <PostActions authToken={authToken} />
      {allPosts.map((post) => (
        <div id='post-container'key={post._id}>
          <h1>{post.title}</h1>
          <h3>{post.price}</h3>
          <p>{post.description}</p>
          
        </div>
      ))}
    </>
  );
}

export default DisplayAllPosts;