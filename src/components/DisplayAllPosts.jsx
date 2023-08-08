

const DisplayAllPosts = ({ allPosts }) => {
    return (
        <>
            {allPosts.map((post) => (
                <div key={post.id}>
                    <h1 key={post.id}>{post.title}</h1>
                    {/* <button onClick={() => onPlayerDetailsClick(player.id)}>View Details</button> */}
                </div>
            ))}
        </>


    )
}

export default DisplayAllPosts;