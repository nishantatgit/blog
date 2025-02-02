import React, { useContext, useEffect, useState } from "react";
import "./Homepage.css";
import AppContext from "../appContext";
import { getPost } from "../utilities/apiHelper";
import urls from "../constants/urls";
import { setBlogsAll } from "../actions";
import { sortOrder, filter } from "../constants/constants";
import Loader from "./Loader";
import { homepageStrings } from "../constants/strings";
import { useNavigate, generatePath } from "react-router-dom";
import routes from "../constants/routes";

function Homepage() {
  const { state, dispatch } = useContext(AppContext);
  const [sortBy, setSortBy] = useState(sortOrder.BY_DATE_CREATED);
  const [filterBy, setFilterBy] = useState(filter.BY_TIME_RANGE);

  const navigate = useNavigate();

  console.log("state ", state);

  function sortByCreationDate(blogs) {
    // TODO : implement
    return blogs;
  }

  function sortByModificationDate(blogs) {
    // TODO : implement
    return blogs;
  }

  function sortByTitle(blogs) {
    // TODO : implement
    return blogs;
  }

  function filterByTimeRange(blogs) {
    // TODO : implement
    return blogs;
  }

  function sortBlogs(blogs) {
    switch (sortBy) {
      case sortOrder.BY_DATE_CREATED:
        return sortByCreationDate(blogs);
      case sortOrder.BY_DATE_MODIFIED:
        return sortByModificationDate(blogs);
      case sortOrder.BY_TITLE:
        return sortByTitle(blogs);
      default:
        return sortByCreationDate(blogs);
    }
  }

  function filterBlogs(blogs) {
    switch (filterBy) {
      case filter.BY_TIME_RANGE:
        return filterByTimeRange(blogs);
      default:
        return filterByTimeRange(blogs);
    }
  }

  function getBlogTiles(blogsList) {
    return blogsList.map((blog) => {
      return (
        <li key={blog.postId} className="m-6">
          <div className="tile">
            <h2>{blog.title}</h2>
            <button
              className="btn btn-primary"
              onClick={readMoreClickHandler.bind(null, blog.postId)}
            >
              {homepageStrings.readMoreButtonLabel}
            </button>
          </div>
        </li>
      );
    });
  }

  function getBlogsList(blogs) {
    const orderedBlogList = filterBlogs(sortBlogs(blogs));
    return (
      <div className="tile-list">
        <ul>{getBlogTiles(orderedBlogList)}</ul>
      </div>
    );
  }

  function readMoreClickHandler(id, e) {
    e.preventDefault();
    navigate(generatePath(routes.READ_BLOG, { id }));
  }

  useEffect(() => {
    async function getAllPosts() {
      try {
        const data = await getPost(urls.GET_ALL_SERVER_URL);
        console.log("data received by server ", data);
        dispatch(setBlogsAll(data));
      } catch (error) {
        console.log(" error : ", error);
      }
    }

    getAllPosts();
  }, []);

  return !!state.blogs.length ? getBlogsList(state.blogs) : <Loader></Loader>;
}

export default Homepage;
