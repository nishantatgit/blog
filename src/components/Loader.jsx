import React from "react";
import { loaderStrings } from "../constants/strings";
import LoaderSvg from '../svg/loader-new.svg';
import "./Loader.css";

function Loader() {
    return <LoaderSvg className="loader"></LoaderSvg>
}

export default Loader;