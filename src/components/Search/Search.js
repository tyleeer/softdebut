"use client";

import React, { useState } from "react";
import styles from "./Search.module.css";

const Search = () => {
  const [selectedWidth, setSelectedWidth] = useState("");
  const [selectedSeries, setSelectedSeries] = useState("");
  const [selectedRim, setSelectedRim] = useState("");
  const [imageCarousel, setImageCarousel] = useState([
    { src: "./images/SOne_index_pic01.jpg" },
    { src: "./images/SOne_index_pic02.jpg" },
    { src: "./images/SOne_index_pic02.jpg" },
  ]);

  const widthOptions = ["--เลือกหน้ายาง--", "165", "175", "185", "195"];
  const seriesOptions = ["--เลือกซีรี่ย์--", "50", "55", "60", "65"];
  const rimOptions = ["--เลือกกระทะล้อ--", "14", "15", "16", "17"];

  return (
    <section className="container container-fluid p-0">
      <div className="row g-0">
        <div className="col-12">
          <div className="d-flex flex-column flex-md-row gap-2 g-0">
            {/* Search Container */}
            <div className={`${styles.searchContainer}`}>
              <div
                aria-label="Tire Search"
                className={`position-relative ${styles.searchBackground}`}
                style={{ minWidth: "330px" }}
              >
                <div className="py-1 px-3">
                  <label className={`d-block ${styles.searchTitle}`}>
                    ค้นหายาง
                  </label>
                </div>
                <form className={`w-100 pb-2 fs-5 pe-2 ${styles.searchForm}`}>
                  <div className={`${styles.searchFormContainer}`}>
                    <label className={`d-block mb-1 ${styles.searchTitle}`}>
                      หน้ายาง
                      <span className={`d-block ${styles.searchSubtitle}`}>
                        ความกว้าง (มม.)
                      </span>
                    </label>
                    <select
                      className="form-select selectInput"
                      value={selectedWidth}
                      onChange={(e) => setSelectedWidth(e.target.value)}
                    >
                      {widthOptions.map((option, index) => (
                        <option key={index} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className={`${styles.searchFormContainer}`}>
                    <label className={`d-block mb-1 ${styles.searchTitle}`}>
                      ซีรี่ย์
                      <span className={`d-block ${styles.searchSubtitle}`}>
                        อัตราส่วนความสูงแก้มยาง (%)
                      </span>
                    </label>
                    <select
                      className="form-select selectInput"
                      value={selectedSeries}
                      onChange={(e) => setSelectedSeries(e.target.value)}
                    >
                      {seriesOptions.map((option, index) => (
                        <option key={index} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className={`${styles.searchFormContainer}`}>
                    <label className={`d-block mb-1 ${styles.searchTitle}`}>
                      กระทะล้อ
                      <span className={`d-block ${styles.searchSubtitle}`}>
                        เส้นผ่าศูนย์กลาง (นิ้ว)
                      </span>
                    </label>
                    <select
                      className="form-select selectInput"
                      value={selectedRim}
                      onChange={(e) => setSelectedRim(e.target.value)}
                    >
                      {rimOptions.map((option, index) => (
                        <option key={index} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="text-center">
                    <button className="btn btn-link p-0 pt-1">
                      <img
                        src="./images/SOne_index_search.png"
                        alt="Search"
                        width={100}
                        height={24}
                        className="imageButton"
                      />
                    </button>
                  </div>
                </form>
              </div>
            </div>

            {/* Banner Section */}
            <div className={`flex-grow-1 ${styles.bannerSection}`}>
              <div className="d-flex align-items-center justify-content-end pe-5 h-100">
                <div className="d-flex flex-column">
                  {/* Scroll Up Button */}
                  <button className="btn">
                    <img
                      src="./images/SOne_index_arrowup.png"
                      alt="Scroll Up"
                      width={28}
                      height={15}
                    />
                  </button>

                  {/* Image Carousel */}
                  <div className="d-flex flex-column">
                    {imageCarousel.map((item, index) => (
                      <div
                        key={index}
                        className={`mb-2 main-border-non ${
                          index === 0 ? "active" : ""
                        }`}
                        style={{ backgroundColor: item.bg }}
                      >
                        <img
                          src={item.src}
                          alt={`Carousel Image ${index + 1}`}
                          width={124}
                          height={67}
                          className={styles.carouselItem}
                        />
                      </div>
                    ))}
                  </div>

                  {/* Scroll Down Button */}
                  <button className="btn">
                    <img
                      src="./images/SOne_index_arrowdown.png"
                      alt="Scroll Down"
                      width={28}
                      height={15}
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Search;
