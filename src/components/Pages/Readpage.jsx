import React, { useEffect, useState, useContext } from "react";
import { getPost } from "../../utilities/apiHelper";
import { useParams } from "react-router-dom";
import Loader from "../Loader";
import urls, { compileUrls } from "../../constants/urls";
import { setCurrentBlogData } from "../../actions";
import AppContext from "../../appContext";
import "./Readpage.css";

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
    <div class="row">
      <div class="col-md-8 offset-md-2">
        <h2>{state.currentBlog.title}</h2>
        <p>{state.currentBlog.content}</p>
      </div>
    </div>
  );
}

export default Readpage;
