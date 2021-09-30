import { useContext, useEffect, useState } from "react";

import "./write.css";
import axios from "axios";
import { Dropdown } from 'semantic-ui-react'
import { Context } from "../../context/Context";

export default function Write() {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [file, setFile] = useState(null);
  const [category, setCategory] = useState("")

  const { user } = useContext(Context);
  const [cats, setCats] = useState([]);
  
  const options = [
    { key: 1, text: 'music', value: 1 },
    { key: 2, text: 'voyage', value: 2 },
    { key: 3, text: 'nature', value: 3 },
    { key: 4, text: 'family', value: 4 },
    { key: 5, text: 'love', value: 5 },
    { key: 6, text: 'animals', value: 6 },
    { key: 7, text: 'food', value: 7 },
    { key: 8, text: 'friends', value: 8 },
    { key: 9, text: 'books', value: 9 },
  ]


  useEffect(() => {
    const getCats = async () => {
      const res = await axios.get("/api/categories");
      setCats(res.data);
    };
    getCats();
  }, []);
console.log(cats)
  const handleSubmit = async (e) => {
    e.preventDefault();
    const newPost = {
      username: user.username,
      title,
      desc,
      category,
    };
    if (file) {
      const data =new FormData();
      const filename = Date.now() + file.name;
      data.append("name", filename);
      data.append("file", file);
      newPost.photo = filename;
      try {
        await axios.post("/api/upload", data);
      } catch (err) {}
    }
    try {
      const res = await axios.post("/api/posts", newPost);
      window.location.replace("/post/" + res.data._id);
    } catch (err) {}
  };
  return (
    <div className="write">
      {file && (
        <img className="writeImg" src={URL.createObjectURL(file)} alt="" />
      )}
      <form className="writeForm" onSubmit={handleSubmit}>
        <div className="writeFormGroup">
          <label htmlFor="fileInput">
            <i className="writeIcon fas fa-plus"></i>
          </label>
          <input
            type="file"
            id="fileInput"
            style={{ display: "none" }}
            onChange={(e) => setFile(e.target.files[0])}
          />
          <input
            type="text"
            placeholder="Title"
            className="writeInput"
            autoFocus={true}
            onChange={e=>setTitle(e.target.value)}
          />
        </div>
{
  cats &&  
  <Dropdown
    clearable
    fluid
    search
    selection
    options={options}
    placeholder='Select Category..'
   
  />
}
        
        <div className="writeFormGroup">
          <textarea
            placeholder="Tell your story..."
            type="text"
            className="writeInput writeText"
            onChange={e=>setDesc(e.target.value)}
          ></textarea>
        </div>
        <button className="writeSubmit" type="submit">
          Publish
        </button>
      </form>
    </div>
  );
}