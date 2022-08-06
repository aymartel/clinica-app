import React from "react";
import Img from "./img";
import Link from "@/components/link";

const BlogCard = ({ image, date, title, url, text, buttonText }) => {
  return (
    <div className="blog_share_box">
      <div className="bl_share_img">
        <Img src={image} alt={title} layout="responsive" />
        <span className="blog_date">{date}</span>
      </div>
      <div className="blog_share_details">
        <h1>
          <Link href={url}>{title}</Link>
        </h1>
        <Link href={url}><p>{text.substring(0, 100)}...</p></Link>
        <Link href={url} >
        {buttonText}
      </Link>
      </div>
      
    </div>
  );
};

export default BlogCard;
