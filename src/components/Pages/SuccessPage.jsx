import React, { useContext } from "react";
import { successPageStrings } from "../../constants/strings";
import replaceToken from "../../utilities/replaceToken";
import { useNavigate } from "react-router-dom";
import routes from "../../constants/routes";
import AppContext from "../../appContext";
import CompleteIcon from "../../svg/elephant.svg";

function SuccessPage() {
  const navigate = useNavigate();
  const { state = {} } = useContext(AppContext);

  const { pageData = {} } = state;

  const { successPage = {} } = pageData;

  const { author = {}, title, postId } = successPage;

  console.log("state ", state);

  function gotoAddpage() {
    navigate(routes.CREATE_BLOG);
  }

  function gotoHomePage() {
    navigate(routes.HOME);
  }

  function onGotoAddpageClick(e) {
    e.preventDefault();
    gotoAddpage();
  }

  function onGotoHomepageClick(e) {
    e.preventDefault();
    gotoHomePage();
  }

  return (
    <div className="m-8">
      <CompleteIcon width={150} height={150} />
      <p>Whoa! That's Elephant!</p>
      <p>
        {replaceToken(successPageStrings.successStringTitle, postId, title)}
      </p>
      <div>{replaceToken(successPageStrings.createdBy, author.name)}</div>
      <div className="mt-2 mb-2">
      <button className="btn btn-primary" onClick={onGotoAddpageClick}>
        {successPageStrings.gotoAddPageButton}
      </button>
      </div>
      <button className="btn btn-secondary" onClick={onGotoHomepageClick}>
        {successPageStrings.gotoHomePageButton}
      </button>
    </div>
  );
}

export default SuccessPage;
