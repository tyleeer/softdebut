"use client";

import React, { useState } from "react";
import Link from "next/link";
import styles from "./CustomerService.module.css";

const CustomerService = () => {
  const [newsItems, setNewsItems] = useState([
    {
      id: 1,
      date: {
        day: 19,
        month: "NOV",
        year: 2014,
      },
      image: "./images/SOne_index_pic3.jpg",
      title:
        "ข่าวใหม่!! ข่าวและกิจกรรมข่าว และกิจกรรมข่าวและกิจกรรมข่าว และกิจกรรม",
      link: "#",
    },
    {
      id: 2,
      date: {
        day: 15,
        month: "DEC",
        year: 2014,
      },
      image: "./images/SOne_index_pic3.jpg",
      title:
        "ข่าวใหม่!! ข่าวและกิจกรรมข่าว และกิจกรรมข่าวและกิจกรรมข่าว และกิจกรรม",
      link: "#",
    },
    {
      id: 3,
      date: {
        day: 22,
        month: "JAN",
        year: 2015,
      },
      image: "./images/SOne_index_pic3.jpg",
      title:
        "ข่าวใหม่!! ข่าวและกิจกรรมข่าว และกิจกรรมข่าวและกิจกรรมข่าว และกิจกรรม",
      link: "#",
    },
  ]);

  const [activeNavIndex, setActiveNavIndex] = useState(0);

  return (
    <section className="container d-flex flex-column flex-lg-row px-0 gap-2">
      <div className={`w-lg-25 ${styles.searchSection}`}>
        <p
          className={`text-white mb-1 px-2 w-100 text-start ${styles.formLabel}`}
          style={{ backgroundColor: "#F05A28" }}
        >
          ค้นหาศูนย์บริการใกล้บ้านคุณ
        </p>
        <form className={`p-2`} style={{ minWidth: "300px" }}>
          <div className={styles.formGroup}>
            <label className={styles.formLabel}>จังหวัด</label>
            <select className="form-select selectInput">
              <option>--เลือกหน้ายาง--</option>
            </select>
          </div>
          <div className={styles.formGroup}>
            <label className={styles.formLabel}>เขต/อำเภอ</label>
            <select className="form-select selectInput">
              <option>--เลือกหน้ายาง--</option>
            </select>
          </div>
          <div className={styles.formGroup}>
            <label className={styles.formLabel}>ถนน</label>
            <select className="form-select selectInput">
              <option>--เลือกหน้ายาง--</option>
            </select>
          </div>
          <div className={styles.formNote}>
            หมายเหตุ : กรุณาเลือกอย่างใดอย่างหนึ่ง
          </div>
          <div className={`text-end pe-4`}>
            <img
              src="./images/SOne_index_search.png"
              alt="Search"
              width={100}
              height={24}
              className="imageButton"
            />
          </div>
        </form>
      </div>

      <div className={`w-lg-50 main-border`}>
        <div
          className={`border-top-0 border-end-0 border-start-0 main-border ${styles.newsHeader}`}
        >
          <p className="h5 mb-0">News & Events</p>
          <div className={styles.newsNavigation}>
            {newsItems.map((_, index) => (
              <Link
                key={index}
                href="#"
                className={styles.newsNavItem}
                onMouseEnter={() => setActiveNavIndex(index)}
                onMouseLeave={() => setActiveNavIndex(null)}
              >
                <img
                  src={
                    activeNavIndex === index || index === 0
                      ? "./images/SOne_index_bullet1.png"
                      : "./images/SOne_index_bullet2.png"
                  }
                  alt="Navigation"
                  width={10}
                  height={10}
                />
              </Link>
            ))}
          </div>
        </div>
        <div className="border-top-0 d-flex flex-column flex-sm-row gap-2 p-2 px-4 px-md-2">
          {newsItems.map((newsItem, index) => (
            <div key={newsItem.id} className={`${styles.newsItem}`}>
              <div
                className={`position-relative mb-2 border-4 border-top-0 border-end-0 border-start-0 main-border-non ${
                  index === 0 ? "active" : ""
                }`}
                style={{
                  backgroundImage: `url("${newsItem.image}")`,
                  height: "100px",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                }}
              >
                <div className={`position-absolute top-0 ${styles.dateBox}`}>
                  {newsItem.date.day}
                  <br />
                  {newsItem.date.month}
                  <br />
                  {newsItem.date.year}
                </div>
              </div>
              <Link href={newsItem.link} className={styles.newsLink}>
                {newsItem.title}
              </Link>
            </div>
          ))}
        </div>
      </div>

      <div className="w-lg-25 px-2 px-md-0">
        <div className="d-flex">
          {/* Left Image */}
          <div className="">
            <img
              src="./images/SOne_index_tips1.png"
              width={128}
              height={142}
              alt="Decorative"
            />
          </div>

          {/* Content */}
          <div
            className={`main-border border-2 bg-dark text-white flex-grow-1 d-flex flex-column px-2`}
            style={{ marginBottom: "0.55rem" }}
          >
            <p className="text-center text-warning mb-0">Safety Tips</p>
            <img
              src="./images/SOne_index_pic66.png"
              width={13}
              height={9}
              alt="Decorative"
            />
            <p className="m-0 text-center">
              ควรเติมน้ำมันตอนเช้า
              <br />
              ขณะที่อุณหภูมิบนพื้น
              <br />
              ดินยังเย็นอยู่
            </p>
            <div className="text-end">
              <img
                src="./images/SOne_index_pic99.png"
                width={13}
                height={9}
                alt="Decorative"
              />
            </div>
          </div>
        </div>

        {/* Decorative Lines */}

        <div className="d-flex py-2 gap-2 justify-content-center">
          <p className="mb-0" style={{ minWidth: "85px" }}>
            สมัครรับข่าวสาร
          </p>
          <form className="d-flex">
            <input
              type="text"
              className={`px-2 w-100 bg-white main-border`}
              defaultValue="กรุณาใส่อีเมล์"
            />
            <button type="button" className={`main-border`}>
              <img
                src="./images/SOne_index_btgo.jpg"
                alt="Submit"
                width={23}
                height={23}
              />
            </button>
          </form>
        </div>

        <div
          className="mt-2"
          style={{
            backgroundImage: "url('/images/SOne_index_dash--.png')",
            backgroundRepeat: "repeat-x",
            backgroundPosition: "left center",
            height: "5px",
          }}
        ></div>

        {/* Call to Action */}
        <div className="text-center mt-3">
          <img
            src="./images/SOne_index_call.png"
            width={277}
            height={33}
            alt="Call to action"
          />
        </div>
      </div>
    </section>
  );
};

export default CustomerService;
