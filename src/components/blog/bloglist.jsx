import React from "react";
import { Link } from "react-router-dom";



const Bloglist = ({ blogs, comTitle }) => {
    // const {blogs} = props
    return (
        <div className="blog-list">
            <h2>{comTitle}</h2>
            {
                blogs.map(blog => {
                    const { title, id, author } = blog
                    return (
                        <div className="blog-preview" key={id}>
                            <Link to={`/${id}`}>
                                <h2>{title}</h2>
                                <p>Written By {author}</p>
                            </Link>
                        </div>
                    )
                })
            }
        </div>
    );
}

export default Bloglist;