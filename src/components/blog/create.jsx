import React from "react";
import { useState } from "react";
import {useNavigate} from 'react-router-dom'

const Create = () => {
    const [title,setTitle] = useState("");
    const [body,setBody] =useState('')
    const [author,setAuthor] = useState('mario')
    const [isPending,setIsPending] = useState(false)
    const history = useNavigate()


    const handleSubmit = (e)=>{
        e.preventDefault()
        const blog = {body,author,title}


        const submitBlog = async()=>{
            setIsPending(true)
            await fetch('http://localhost:8000/blogs',{
                method:'POST',
                headers:{"Content-Type":'application/json'},
                body:JSON.stringify(blog)
            })
            setIsPending(false)
            history('/')
        }
        submitBlog()
    }

    return (
        <div className="create">
            <h2>Add a New Blog</h2>
            <form onSubmit={handleSubmit} action="">
                <label>Blog Title</label>
                <input onChange={(e)=> setTitle(e.target.value)} value={title} required type="text"/>
                <label>Blog body</label>
                <textarea onChange={(e)=> setBody(e.target.value)} value={body} required></textarea>
                <label required>Blog Author</label>
                <select value={author} onChange={(e)=> setAuthor(e.target.value)}>
                    <option value="mario">mario</option>
                    <option value="yodhi">yoshi</option>
                </select>
                {!isPending && <button>Submit Blog</button>}
                {isPending && <button disabled>Submiting......</button>}
            </form>
        </div>
    );
}
 
export default Create