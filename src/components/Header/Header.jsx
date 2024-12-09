"use client";

import React, { useState } from "react";
import Link from "next/link";
import styles from "./Header.module.css";

const Header = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [navIcons, setNavIcons] = useState([
    {
      name: "Products & Services",
      link: "#",
    },
    { name: "Promotions", link: "#" },
    { name: "News & Events", link: "#" },
    { name: "Safety Tips", link: "#" },
    { name: "FAQS", link: "#" },
    { name: "Location", link: "#" },
  ]);

  const socialIcons = [
    { name: "facebook", icon: "btfacebook" },
    { name: "twitter", icon: "bttwitter" },
    { name: "youtube", icon: "btyoutube" },
  ];
  const [hoveredIcon, setHoveredIcon] = useState(null);

  const [activeLanguage, setActiveLanguage] = useState(0);
  const [hoveredLanguage, setHoveredLanguage] = useState(null);

  const languageIcons = [
    {
      src: "./images/SOne_index_iconthai.jpg",
      alt: "./images/SOne_index_iconthai.jpg",
    },
    {
      src: "./images/SOne_index_iconeng.jpg",
      alt: "./images/SOne_index_iconeng2.jpg",
    },
  ];

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <header className={`container container-fluid p-0`}>
      <div className="row g-0">
        <div className="col d-flex flex-column flex-md-row justify-content-between">
          <div className="text-center text-md-start">
            <img
              src="./images/SOne_index_logo.png"
              width={300}
              height={100}
              alt="logo"
            />
          </div>
          <div className="text-center text-md-end">
            <section
              aria-label="Site search"
              className="d-flex flex-row-reverse flex-md-column gap-2 justify-content-center"
            >
              <div className="d-flex align-items-center justify-content-end mb-2">
                {languageIcons.map((lang, index) => (
                  <img
                    key={index}
                    src={
                      hoveredLanguage === index || activeLanguage === index
                        ? lang.src
                        : lang.alt
                    }
                    alt={lang.src}
                    width={25}
                    height={18}
                    className={`${index === 0 ? "me-2" : ""} ${
                      styles.languageIcon
                    } imageButton`}
                    onClick={() => setActiveLanguage(0)}
                    onMouseEnter={() => setHoveredLanguage(index)}
                    onMouseLeave={() => setHoveredLanguage(null)}
                  />
                ))}
              </div>
              <div className="mb-2">
                <form className="d-flex justify-content-center justify-content-md-end">
                  <input
                    type="text"
                    className="main-border px-2 bg-white text-black"
                    value={searchTerm}
                    placeholder="Search..."
                    onChange={handleSearchChange}
                    aria-label="Search site"
                  />
                  <button
                    className="border-start-0 main-border"
                    type="button"
                    aria-label="Submit search"
                  >
                    <img
                      src="./images/SOne_index_btsearch.jpg"
                      alt="Search"
                      width={23}
                      height={23}
                    />
                  </button>
                </form>
              </div>
            </section>

            {/* Navigation Links */}
            <div aria-label="Site navigation">
              <div className="text-md-end">
                <Link
                  href="#"
                  className="text-black text-main me-2 text-decoration-none"
                >
                  About S-ONE
                </Link>{" "}
                |
                <Link
                  href="#"
                  className="text-black text-main mx-2 text-decoration-none"
                >
                  Job Opportunity
                </Link>{" "}
                |
                <Link
                  href="#"
                  className="text-black text-main mx-2 text-decoration-none"
                >
                  Contact Us
                </Link>{" "}
                |
                <Link
                  href="#"
                  className="text-black text-main ms-2 text-decoration-none"
                >
                  Site Map
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Main Menu Navigation */}
        <nav aria-label="Main menu" className="mt-2">
          <div className="d-flex align-items-center">
            <div className="flex-grow-1 bg-black py-2">
              <div className="row align-items-center h-100 text-white px-2">
                {/* Menu Items */}
                <div className="d-none d-lg-flex col-12 col-lg-10 gap-3 align-items-center">
                  {navIcons.map((item, index) => (
                    <div key={index} className="d-flex align-items-center">
                      <Link
                        href={item.link}
                        className={`${styles.navContainer} text-white text-decoration-none d-flex align-items-center`}
                      >
                        <div
                          className={`me-2 ${styles.socialIcon} ${
                            styles.navIcon
                          } ${index === 0 ? styles.active : ""}`}
                        />
                        <span
                          className={`text-main ${index == 0 ? "active" : ""}`}
                        >
                          {item.name}
                        </span>
                      </Link>
                    </div>
                  ))}
                </div>

                {/* Social Media Icons */}
                <div className="col-12 col-lg-2 d-none d-lg-flex mt-2 mt-lg-0 justify-content-center justify-content-md-end">
                  {socialIcons.map((social, index) => (
                    <Link
                      key={index}
                      href="#"
                      className="mx-1"
                      onMouseEnter={() => setHoveredIcon(social.name)}
                      onMouseLeave={() => setHoveredIcon(null)}
                    >
                      <img
                        src={
                          hoveredIcon === social.name
                            ? `/images/SOne_index_${social.icon}1.png`
                            : `/images/SOne_index_${social.icon}.png`
                        }
                        alt={social.name}
                        width={20}
                        height={20}
                        className={styles.socialIcon}
                      />
                    </Link>
                  ))}
                </div>

                <div className="d-flex justify-content-between align-items-center d-lg-none">
                  <a className="navbar-brand" href="#">
                    เมนู
                  </a>
                  <button
                    className="btn btn-outline-light px-2"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseExample"
                    aria-expanded="false"
                    aria-controls="collapseExample"
                  >
                    <div className={`${styles.burgerIcon}`}></div>
                  </button>
                </div>
                <div className="collapse" id="collapseExample">
                  <div className="card card-body bg-black p-0 d-lg-none">
                    <div className="row col-12 col-lg-10 ps-1">
                      {navIcons.map((item, index) => (
                        <div
                          key={index}
                          className="col-6 col-md-4 d-flex align-items-center mb-1"
                        >
                          <Link
                            href={item.link}
                            className={`text-white ${styles.navContainer} text-decoration-none d-flex align-items-center`}
                          >
                            <div
                              className={`me-2 ${styles.socialIcon} ${
                                styles.navIcon
                              } ${index === 0 ? styles.active : ""}`}
                            />
                            <span
                              className={`text-main ${
                                index == 0 ? "active" : ""
                              }`}
                            >
                              {item.name}
                            </span>
                          </Link>
                        </div>
                      ))}
                    </div>
                    <div className="d-flex">
                      {socialIcons.map((social, index) => (
                        <Link
                          key={index}
                          href="#"
                          className="mx-1"
                          onMouseEnter={() => setHoveredIcon(social.name)}
                          onMouseLeave={() => setHoveredIcon(null)}
                        >
                          <img
                            src={
                              hoveredIcon === social.name
                                ? `/images/SOne_index_${social.icon}1.png`
                                : `/images/SOne_index_${social.icon}.png`
                            }
                            alt={social.name}
                            width={20}
                            height={20}
                            className={styles.socialIcon}
                          />
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
