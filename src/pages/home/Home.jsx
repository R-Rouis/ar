import { useEffect, useState } from "react";
import Header from "../../components/header/Header";
import Posts from "../../components/posts/Posts";
import Sidebar from "../../components/sidebar/Sidebar";
import "./home.css";
import axios from "axios";
import { useLocation } from "react-router";

export default function Home() {
const [posts, setPosts] = useState([]);
const { search } = useLocation();

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get("/api/posts" + search);
      setPosts(res.data);
    };
    fetchPosts();
  }, [search]);
  
  const [filtered, setFiltered]=useState([])
  const handleCategorie =(name)=>{
   
    const filter = posts.filter( el => el.title.toUpperCase().includes(name.toUpperCase()))
    
    if(filter.length===0){
      setFiltered(filter)
    }
    else{
      setFiltered(filter)
    }
  }
  return (
    <>
      <Header />
      <div className="home">
      { filtered.length ===0 ? <Posts  posts={posts}/>:
      <div>
         <Posts posts={filtered}/>
      </div>
     
  }
     {   <Sidebar  posts={posts} handleCategorie={handleCategorie} />
       }     

      </div>
    </>
  );
}