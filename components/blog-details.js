import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import BlogAuthor from "./blog-author";
import BlogPost from "./blog-post";
import BlogSidebar from "./blog-sidebar";
import Comments from "./comments";

const BlogDetails = ({ subTitle,text,tags,date,image }) => {
  return (
    <section className="blog_details_section section_padding">
      <Container>
        <Row>
          <Col lg={8}>
            <BlogPost subTitle={subTitle} text={text} tags={tags} date={date} image={image}/>
          </Col>
          <Col lg={4}>
            <BlogSidebar />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default BlogDetails;
