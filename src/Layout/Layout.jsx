import React, { useState } from 'react';
import SideBar from './SideBar';
import { Outlet } from 'react-router-dom';
import Footer from './Footer';

const Layout = () => {
  const [footerContent, setFooterContent] = useState('Default footer content');

  return (
    <div className="d-flex flex-column min-vh-100">
      <div className="d-flex flex-grow-1">
        <SideBar />
        <div className="flex-grow-1 p-3">
          <Outlet context={{ setFooterContent }} />
        </div>
      </div>

      <Footer content={footerContent} />
    </div>
  );
};

export default Layout;
