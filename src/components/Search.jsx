import {useState} from "react";

function Search (props) {
    const [search, setSearch] = useState("");
    const onSearchChange = () => {
        props.onSearchChange(search)
    };

    const searchKeyDown = (event) => {
        if (event.key == "Enter") {
           onSearchChange();
        }
    };
    return (
        <>
            <div>
                Cari Artikel : {" "}
                <input type="text" placeholder="Cari Disini"
                onChange={(event) => setSearch(event.target.value)}  
                onKeyDown={searchKeyDown} /> 
                <button onClick={onSearchChange}>Cari</button>
            </div>
            <br /><small>Sedang Mencari Artikel {search}, ditemukan {props.totalPosts}</small>
        </>
    )
}

export default Search