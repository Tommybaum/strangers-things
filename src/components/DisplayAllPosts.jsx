import PostActions from "./PostActions";

const DisplayAllPosts = ({ allPosts, authToken }) => {
    console.log(authToken)
  return (
   
    <>
    <PostActions authToken={authToken} />
      {allPosts.map((post) => (
        <div key={post.id}>
          <h1 key={post.id}>{post.title}</h1>
          
        </div>
      ))}
    </>
  );
}

export default DisplayAllPosts;