import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AppProvider from "../AppProvider";
import Homepage from "./Pages/Homepage";
import Addpage from "./Pages/Addpage";
import SuccessPage from "./Pages/SuccessPage";
import "./app.css";
import routes from "../constants/routes";
import PageLayout from "./PageLayout";
import "bootstrap/dist/css/bootstrap.min.css";
import Readpage from "./Pages/Readpage";

function App(props) {
  return (
    <AppProvider>
      <Router>
        <PageLayout>
          <Routes>
            <Route path={routes.HOME} element={<Homepage />}></Route>
            <Route path={routes.CREATE_BLOG} element={<Addpage />}></Route>
            <Route path={routes.CREATION_SUCCESS} element={<SuccessPage />}></Route>
            <Route path={routes.READ_BLOG} element={<Readpage />}></Route>
          </Routes>
        </PageLayout>
      </Router>
    </AppProvider>
  );
}

export default App;
