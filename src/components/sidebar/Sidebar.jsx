import axios from "axios";
import { useEffect, useState } from "react";
import "./sidebar.css";

export default function Sidebar({posts,handleCategorie}) {
  const [cats, setCats] = useState([]);



  useEffect(() => {
    const getCats = async () => {
      const res = await axios.get("/api/categories");
      setCats(res.data);
    };
    getCats();
  }, []);
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT ME</span>
        <img
          src="https://as2.ftcdn.net/v2/jpg/01/58/41/01/500_F_158410140_ECNBx9OhabPdCtjwTYldf1O0khDrUddZ.jpg"
          alt=""
        />
        <p> 
        <br></br> <tr></tr> To say hello or to discuss a project, <br></br> <tr></tr> <br></br> <tr></tr>

         My email address: rahoubarouis5@gmail.com <br></br> <tr></tr>

         <br></br> <tr></tr><br></br>
         Goodbye ! 😉
        </p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarList">
          {cats.map((c) => (
            <div className="link" onClick={()=>handleCategorie(c.name)}>
            <li className="sidebarListItem">{c.name}</li>
            </div>
          ))}
        </ul>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW US</span>
        <div className="sidebarSocial">
          <i className="sidebarIcon fab fa-facebook-square"></i>
          <i className="sidebarIcon fab fa-twitter-square"></i>
          <i className="sidebarIcon fab fa-pinterest-square"></i>
          <i className="sidebarIcon fab fa-instagram-square"></i>
        </div>
      </div>
    </div>
  );
}