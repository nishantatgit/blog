import React from "react";
import { loaderStrings } from "../constants/strings";
function Loader() {
    return <div>{loaderStrings.loadingMessage}</div>
}

export default Loader;