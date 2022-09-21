import React, { Fragment } from "react";
import Bloglist from "../blog/bloglist";
import useFetch from "../../hooks/usefetchdata";
import { Outlet } from "react-router-dom";
// /blogs Get Fetxhall blogs
//  blogs/{id} get fetch a single blog
// / blogs  post add new blog
// blogs/{id} dleete delete Blog




const Home = () => {
    const { data, isPending, error } = useFetch('http://localhost:8000/blogs')
    return (
        <Fragment>
            <div className="home">
                {error && <div>{error}</div>}
                {isPending && <div>Loding......</div>}
                <Bloglist blogs={data} comTitle='All Blogs' />
            </div>
            <Outlet />
        </Fragment>
    );
}

export default Home;
