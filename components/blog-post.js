import React from "react";
import Img from "./img";

const BlogPost = ({subTitle,text,tags,date,image}) => {
  const tagsArray = tags.split('\n');
  const textArray = text.split('\n');
  return (
    <div>
      <div className="blog_left_box">
        <div className="bl_share_img">
          <Img src={image} alt="blog details" layout="responsive" />
          <span className="blog_date">{date}</span>
        </div>
        <div className="blog_share_details blog_share_details__details">
          <h1>{subTitle}</h1>
          {textArray.map((data, index) => (
            <p key={index}>{data}</p>
          ))}
        </div>
      </div>
      <div className="blog_social_share_box">
        <div className="share_box_left">
          <p>
            Tags: {tagsArray.map((data, index) => (
            <a href="#" key={index}>{data}</a>
          ))}</p>
        </div>
        <div className="share_box_left text-end">
          <ul>
            <li>
              <a href="https://business.linkedin.com/es-es/marketing-solutions/linkedin-pages">
                <i className="fa fa-linkedin"></i>
              </a>
            </li>
            <li>
              <a href="https://www.facebook.com/clinicahispanahouston">
                <i className="fa fa-facebook"></i>
              </a>
            </li>
            <li>
              <a href="https://www.youtube.com/channel/UC0OooKsVq4xJjB9bCUjjYvQ">
                <i className="fa fa-youtube-play"></i>
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/clinica_saludesperanza/">
                <i className="fa fa-instagram"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;
