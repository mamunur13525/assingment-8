import React, { useState, useEffect } from 'react';
import Post from '../Post/Post';
import './Home.css'

const Home = () => {
    const [posts, setPosts] = useState([]);
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => setPosts(data))
    },[])
    return (
        <div style={{backgroundColor: "#F0F2F5"}}>
            <h1 style={{marginLeft: "130px", paddingTop: "70px"}}>Total Posts: {posts.length}</h1>
            {
                posts.map(post => <Post key={post.id} post={post}></Post>)
            }
        </div>
    );
};

export default Home;