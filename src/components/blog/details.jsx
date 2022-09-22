import React from "react";
import { useParams } from "react-router-dom";
import useFetch from "../../hooks/usefetchdata";
import { useNavigate } from "react-router-dom";

const Blogdetails = () => {
    const { id } = useParams()
    const { data: blog, isPending, error } = useFetch(`http://localhost:8000/blogs/${ id }`)
    const naviagte = useNavigate()



    const handleClick = async()=>{
        await fetch(`http://localhost:8000/blogs/${ id }`,{
            method:'DELETE'
        })
        naviagte('/')
    }

    return (
        <div className="blog-details">
            {error && <div>{error}</div>}
            {isPending && <div>Loading.....</div>}
            {blog && (
                <article>
                    <h2>{blog.title}</h2>
                    <p>Written by {blog.author}</p>
                    <div>{blog.body}</div>
                    <button onClick={handleClick}>Delete Blog</button>
                </article>
            )}
        </div>
    );
}

export default Blogdetails;