import React, {useState, useEffect} from "react";
import {useHistory} from "react-router";
import {getAllArticles, addArticle} from "../../modules/NewsArticleDataManager";
import {getAllUsers} from "../../modules/UserDataManager";

export const ArticleForm= () => {

    const [article, setArticle]= useState({})
        
    // const [isLoading, setIsLoading] = useState(false);

    const history= useHistory();

    const handleControlledInputChange = (event)
  
}
