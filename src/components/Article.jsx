import { useContext } from "react";
import { GlobalContext } from "../contexts";

const ArticleStatus = ({isNew}) => {
    return isNew && <span>New Post</span>;
};

function Article(props) {
    return (
        <>
            <h4>{props.title}</h4>
            <small>Date : {props.date} Category : {props.tags.join(",")} <br /> 
                <ArticleStatus isNew={props.isNew} />
            </small> 


        </>
    )
}

export default Article