import React, { useEffect, useState, useContext } from "react";
import { getPost } from "../utilities/apiHelper";
import { useParams } from "react-router-dom";
import Loader from "./Loader";
import urls, { compileUrls } from "../constants/urls";
import { setCurrentBlogData } from "../actions";
import AppContext from "../appContext";
function Readpage() {
  const { id } = useParams();
  const [isLoading, setLoaderState] = useState(true);
  const { state, dispatch } = useContext(AppContext);

  useEffect(() => {
    async function getBlogContentById(id) {
      try {
        const generatedUrl = compileUrls(urls.GET_BLOG_BY_ID_URL, id);
        const data = await getPost(generatedUrl);
        dispatch(setCurrentBlogData(data));
        console.log(data);
      } catch (error) {
        console.log("error ", error);
      } finally {
        setLoaderState(false);
      }
    }

    getBlogContentById(id);
  }, [id]);

  console.log("readPageState ", state);

  return isLoading ? (
    <Loader />
  ) : (
    <div className="container">
      <h2>{state.currentBlog.title}</h2>
      <p>{state.currentBlog.content}</p>
    </div>
  );
}

export default Readpage;
