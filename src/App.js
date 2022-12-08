import React, { useState, useEffect } from "react";


function App() {
  const [posts, setPosts] = useState([]);
  const fetchPost = async () => {
  const response = await fetch(
      "https://all-the-weather.herokuapp.com/cities"
    );
   const data = await response.json();
    setPosts(data.items);
  };

  useEffect(() => {
    fetchPost();
  }, []);
  return (
    <div className="App">
      
      {posts.map(post =><li>{post.id}</li>)}
      {posts.map(post =><li>{post.name}</li>)}
      
    </div>
  );
}

export default App;
