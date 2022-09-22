import React from "react";
import Bloglist from "../blog/bloglist";
import useFetch from "../../hooks/usefetchdata";
// /blogs Get Fetxhall blogs
//  blogs/{id} get fetch a single blog
// / blogs  post add new blog
// blogs/{id} dleete delete Blog




const Home = () => {
    const { data, isPending, error } = useFetch('http://localhost:8000/blogs')
    return (
            <div className="home">
                {error && <div>{error}</div>}
                {isPending && <div>Loding......</div>}
                {data && <Bloglist blogs={data} comTitle='All Blogs' />}
            </div>
    );
}

export default Home;
