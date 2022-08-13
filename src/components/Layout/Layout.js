import React from "react";
import { Outlet } from "react-router-dom";
import "./Layout.css";


// */
const Layout = () => {
  return (
    <section className="container">
      <div className="page lg:ml-10 md:ml-10 sm:ml-5 ml-3 mt-10">
        <div className="layout-tags">
        <div className="top-head-tags-area">
          <span className="tags top-tags">&lt;body&gt;</span>
        </div>
        <Outlet></Outlet>
        <div className="bottom-tag-area"><br/><br/>
          <span className="tags bottom-tags ">&lt;/body&gt;</span><br/>
          <span className=" tags bottom-tag-html lg:ml-[-20px] md:ml-[-18px] sm:ml-[-12px]">&lt;/html&gt;</span>
        </div>
        </div>
      </div>
    </section>
  );
};

export default Layout;
