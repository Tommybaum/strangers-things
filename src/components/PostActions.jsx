import React, { useState } from 'react';

const COHORT_NAME = '2306-FSA-ET-WEB-FT-SF';
const BASE_URL = `https://strangers-things.herokuapp.com/api/${COHORT_NAME}/posts`;

const PostActions = ({ authToken }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [location, setLocation] = useState('');
  const [willDeliver, setWillDeliver] = useState(false);

  const handleAddPost = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch(BASE_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${authToken}`,
        },
        body: JSON.stringify({
          post: {
            title,
            description,
            price,
            location,
            willDeliver,
          },
        }),
      });
     
      if (response.ok) {
        alert('Post added successfully');
        // Clear form fields after successful post
        setTitle('');
        setDescription('');
        setPrice('');
        setLocation('');
        setWillDeliver(false);
      } else {
        console.log('Failed to add post');
      }
    } catch (error) {
      console.error('Error adding post:', error);
    }
  };

  return (
    <div className="post-actions">
      <h3>Add New Post</h3>
      <form onSubmit={handleAddPost}>
        <label>
          Title:
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </label>
        <br />
        <label>
          Description:
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </label>
        <br />
        <label>
          Price:
          <input
            type="text"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </label>
        <br />
        <label>
          Location:
          <input
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </label>
        <br />
        <label>
          Will Deliver:
          <input
            type="checkbox"
            checked={willDeliver}
            onChange={(e) => setWillDeliver(e.target.checked)}
          />
        </label>
        <br />
        <button type="submit">Add Post</button>
      </form>
    </div>
  );
};

export default PostActions;