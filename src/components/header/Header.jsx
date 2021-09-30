
import "./header.css";

export default function Header() {
 
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleLg">Blog</span>
     
      </div>
      <img
        className="headerImg"
        src="https://beckyvandijk.com/wp-content/uploads/2018/06/responsible-blogger-1-Large-1000x500.jpg"
        alt=""
      />
    </div>
  );
}