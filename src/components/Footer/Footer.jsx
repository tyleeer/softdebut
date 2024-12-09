"use client";

import React from "react";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className="container container-fluid px-0">
      <div className="d-flex align-items-center">
        {/* Logo */}
        <div className="me-3">
          <img
            src="./images/SOne_index_logos.png"
            alt="Company Logo"
            width={130}
            height={35}
          />
        </div>

        {/* Navigation */}
        <div className="flex-grow-1">
          <div className="d-flex">
            <div
              className={`flex-grow-1 p-2 rounded bg-black ${styles.menuMiddle}`}
            >
              <div className="text-white small font-monospace">
                Copyright &copy; {new Date().getFullYear()}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
