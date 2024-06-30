import { useState } from "react";
import { Link } from "react-router-dom";
import { useLoaderData } from "react-router-dom"

function Blogs() {
    const posts = useLoaderData();
    return (
        <>
            <h1>Ini adalah halaman Blogs</h1>
            {posts.map((item, index) => (
                <div key={index}>
                    <Link to={`/blog/${item.id}`} >- {item.title}</Link>
                </div>
            ))};
        </>
    )
}

export default Blogs