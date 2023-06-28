import React, { useState} from "react";

export default function Dictionary(){
    let [keyword, setKeyword] =  useState(null);

    function search(event){
        event.preventDefault();
        alert(`Searching for ${keyword} definition`);
    }

    function updateKeyword(event){
        setKeyword(event.target.value);
    }
    return(
        <div>
            <h2>Dictionary</h2>
            <form onSubmit={search}>
                <input type="search" placeholder="Type a word..." onChange={updateKeyword} />
            </form>
        </div>
    );
}