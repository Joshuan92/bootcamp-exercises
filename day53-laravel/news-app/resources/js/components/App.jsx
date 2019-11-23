import React, { useState, useEffect } from "react";
import Article from './Article.jsx'

const App = () => {


    const [articles, setArticles] = useState([]);

     useEffect(() => {
        fetch("/articles")
            .then(resp => resp.json())
            .then(data => {
                setArticles(data);
                
            });
    }, []);


    useEffect(() => {
        console.log(articles);
        
    }, [articles])

    return  (

        <div className="articles" >


        {articles.map((article) => {

            return (

                
                   <Article 
                    key={article.id}
                    data={article}/>

            


            )


        }
        )
        
        }


        </div>


    )
}

export default App;