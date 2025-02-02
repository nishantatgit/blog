import React from "react";
import './Pagelayout.css';

function PageLayout({children}) {
    return <div className="container m-8">
        {children}
    </div>
}

export default PageLayout;