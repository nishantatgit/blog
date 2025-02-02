import React from "react";
import './Pagelayout.css';

function PageLayout({children}) {
    return <div className="container-xxl mt-4">
        {children}
    </div>
}

export default PageLayout;