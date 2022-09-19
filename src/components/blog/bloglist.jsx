import React from "react";



const Bloglist = ({blogs,comTitle}) => {
    // const {blogs} = props
    return (
        <div className="blog-list">
        <h2>{comTitle}</h2>
            {
                blogs.map(blog => {
                    const { title, id, author} = blog
                    return (
                        <div className="blog-preview" key={id}>
                            <h2>{title}</h2>
                            <p>Written By {author}</p>
                        </div>
                    )
                })
            }
        </div>
    );
}

export default Bloglist;