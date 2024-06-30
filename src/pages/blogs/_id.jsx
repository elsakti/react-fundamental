import { useParams } from "react-router-dom";
import { useLoaderData } from "react-router-dom";

function SinglePost() {
    const params = useParams();
    const post = useLoaderData();
    return (
        <>
            <div>Title: </div>
            <div>{post?.title}</div>
            <div>Body:</div>
            <small>{post?.body}</small>
        </>
    )
}

export default SinglePost;