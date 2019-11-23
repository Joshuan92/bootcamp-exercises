import React, { useState, useEffect } from "react";

const Article = (props) => {

    console.log('props', props);
    


    return (

        <div className="article">

            <h3>{props.data.author}</h3>
            <h4>{props.data.title}</h4>
            <div class="image">
                <img src={`/images/${props.data.image_file}`} alt={props.data.title}/>
            </div>

        </div>
        
    )




}

export default Article;