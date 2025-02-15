import React, { useContext, useEffect, useState } from "react";
import "./Homepage.css";
import AppContext from "../../appContext";
import { getPost } from "../../utilities/apiHelper";
import urls from "../../constants/urls";
import { setBlogsAll } from "../../actions";
import { sortOrder, filter } from "../../constants/constants";
import Loader from "../Loader";
import { homepageStrings } from "../../constants/strings";
import { useNavigate, generatePath } from "react-router-dom";
import routes from "../../constants/routes";
import delay from "../../utilities/delay";
import getLocaleDate from "../../utilities/getLocaleDate";
import { contentLength } from "../../constants/constants";

function Homepage() {
  const { state, dispatch } = useContext(AppContext);
  const [sortBy, setSortBy] = useState(sortOrder.BY_DATE_CREATED);
  const [filterBy, setFilterBy] = useState(filter.BY_TIME_RANGE);

  function getContentDisplayData(blog) {
    return {
      isTruncated:  blog.length > contentLength,
      displayContent: blog?.substr(0, contentLength),
    };
  }

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
      const contentDetails = getContentDisplayData(blog.content);
      return (
        <a
          href="#"
          className="text-black link-secondary link-underline-opacity-0 link-opacity-100-hover"
          onClick={readMoreClickHandler.bind(null, blog.postId)}
        >
          <li key={blog.postId} className="mt-12 pb-2">
            <div className="tile row">
              <div className="col-12">
                <h2 className="h2">{blog.title}</h2>
                <p>
                  {contentDetails.displayContent}
                  {contentDetails.isTruncated && <span>...</span>}
                </p>

                <div>
                  <span className="text-secondary">{getLocaleDate(blog.lastModifiedAt)}</span>
                </div>
              </div>
            </div>
          </li>
        </a>
      );
    });
  }

  function getBlogsList(blogs) {
    const orderedBlogList = filterBlogs(sortBlogs(blogs));
    return (
      <div className="tile-list row">
        <div className="col-md-10 offset-md-1">
          <ul>{getBlogTiles(orderedBlogList)}</ul>
        </div>
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
        dispatch(setBlogsAll(data));
      } catch (error) {
        console.log(" error : ", error);
      }
    }

    getAllPosts();
  }, []);

  return !!state.blogs.length ? getBlogsList(state.blogs) : <Loader />;
}

export default Homepage;
