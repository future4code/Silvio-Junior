import axios from "axios";
import React, { useState } from "react";
import { GlobalContext } from "./GlobalContext";

const GlobalState = (props) => {
    const [selectedPost, setSelectedPost] = useState([])
    

    return(
        <GlobalContext.Provider value={{selectedPost, setSelectedPost}}>
            {props.children}
        </GlobalContext.Provider>
    )
}

export default GlobalState