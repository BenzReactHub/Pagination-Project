import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Posts } from './components/Posts.js';
import { Pagination } from './components/Pagination.js';

function App() {
  // 博客總數
  const [posts, setPosts] = useState([]);
  // 加載提示
  const [loading, setLoading] = useState(false);
  // 當前頁碼
  const [currentPage, setCurrentPage] = useState(1);
  // 每一頁顯示的博客數
  const [postsPerPage] = useState(10);

  // 請求資料
  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true)
      const res = await axios.get('https://jsonplaceholder.typicode.com/posts')
      // console.log(res.data)
      setPosts(res.data)
      setLoading(false)
    }
    fetchPosts()
  }, [])

  // 獲取當前頁面顯示的post
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost)

  return (
    <div className="container mt-5">
      <h1 className='text-primary mb-3'>BenzHub Blog</h1>
      <Posts posts={currentPosts} loading={loading} />
      <Pagination postsPerPage={postsPerPage} totalPosts={posts.length} setCurrentPage={setCurrentPage} />
    </div>
  );
}

export default App;
