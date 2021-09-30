import React from 'react'
import "./about.css";

export default function About() {
    return (
      <div className="about">
        <div className="aboutTitles">
          <div className="aboutTitleLg"><h3>About US:</h3></div>
          <div className="aboutTextLg"><h3> Welcome to my blog ! 😉 <tr></tr><br></br>

I am rihab, I live in Tunis, I am a front-end developper. <tr></tr><br></br>

So! <tr></tr><br></br>

On our blog you will find: <tr></tr><br></br>
* ideas for destinations for going abroad. <tr></tr>
* Practical advice for traveling with your favorites. <tr></tr>
* Good addresses in to see nature, restaurants, etc. <tr></tr>
* good books to read.<tr></tr>
* beautiful music to listen to!<tr></tr>
etc ...
              </h3></div>


        </div>
        <img
          className="aboutImg"
          src="https://www.journaldugeek.com/content/uploads/2020/10/texture-2100024-1280-640x478.jpg"
          alt=""
        />
      </div>
    );
  }




