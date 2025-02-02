import React, { useContext, useState } from "react";
import AppContext from "../appContext";
import "./Addpage.css";
import { createPost } from "../utilities/apiHelper";
import { validateInput } from "../utilities/formValidation";
import sanitizeInput from "../utilities/sanitizeInput";
import urls from "../constants/urls";
import { setSuccessPageData } from "../actions";
import { useNavigate } from "react-router-dom";
import routes from "../constants/routes";

function Addpage() {
  const { dispatch } = useContext(AppContext);
  const [titleInput, setTitleInput] = useState("");
  const [contentInput, setContentInput] = useState("");
  const navigate = useNavigate();

  async function onSubmit(event) {
    event.preventDefault();
    console.log("form submit event called ", event);
    const form = event.target;

    const blogTitle = sanitizeInput(form.blogTitle.value);
    const blogContent = sanitizeInput(form.blogContent.value);

    if (!(validateInput.text(blogTitle) && validateInput.textArea(blogContent))) {
      console.log(blogTitle, blogContent);
      console.log("submitting form ....");
      setTitleInput("");
      setContentInput("");
      return;
    }

    const requestBody = {
      title: blogTitle,
      content: blogContent,
    };

    try {
      const data = await createPost(urls.POST_SERVER_URL, requestBody);
      console.log("data received from post ", data);
      dispatch(setSuccessPageData({
        author : data.author,
        postId: data.postId,
        title: data.title
      }));

      navigate(routes.CREATION_SUCCESS);

    } catch (error) {
      console.log("error occured ", error);
    }
  }

  function onChange(event) {
    setTitleInput(event.target.value);
  }

  function onTextAreaChange(event) {
    setContentInput(event.target.value);
  }

  return (
    <div class="row">
      <div class="col-md-8 offset-md-2">
    <form id="create-blog-post" noValidate onSubmit={onSubmit}>
      <div className="mb-3">
        <label forhtml="blog-title-input" className="form-label">
          Blog Post title
        </label>
        <input
          name="blogTitle"
          type="text"
          id="blog-title-input"
          placeholder="Blog title"
          value={titleInput}
          onChange={onChange}
          className="form-control form-control-lg"
        />
      </div>
      <div className="mb-3">
        <label forhtml="blog-content-input">Add content</label>
        <textarea
          name="blogContent"
          id="blog-content-input"
          placeholder="Blog content..."
          rows="15"
          cols="50"
          value={contentInput}
          onChange={onTextAreaChange}
          className="form-control form-control-lg"
        ></textarea>
      </div>
      <input
        type="submit"
        onSubmit={onSubmit}
        className="btn btn-primary"
        value="Create Blog"
      />
    </form>
    </div>
    </div>
  );
}

export default Addpage;
