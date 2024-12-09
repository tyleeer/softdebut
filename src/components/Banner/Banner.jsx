"use client";

import React, { useState } from "react";
import Link from "next/link";
import styles from "./Banner.module.css";

const Banner = () => {
  const bannerItems = [
    {
      name: "Tire",
      image: "SOne_index_bt-tire",
      altImage: "SOne_index_bt-tire1",
    },
    {
      name: "Break",
      image: "SOne_index_bt-break",
      altImage: "SOne_index_bt-break1",
    },
    {
      name: "Battery",
      image: "SOne_index_bt-battery",
      altImage: "SOne_index_bt-battery1",
    },
    {
      name: "Choke Up",
      image: "SOne_index_bt-chokeup",
      altImage: "SOne_index_bt-chokeup1",
    },
    {
      name: "Oil",
      image: "SOne_index_bt-oil",
      altImage: "SOne_index_bt-oil1",
    },
    {
      name: "Guarantee",
      image: "SOne_index_bt-guarantee",
      altImage: "SOne_index_bt-guarantee1",
    },
  ];

  // State to track which item is being hovered
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div className={`container px-2`}>
      <ul className={`row row-gap-2 row-gap-xl-0 ${styles.navList}`}>
        {bannerItems.map((item, index) => (
          <li
            key={index}
            className={`col-6 col-md-4 col-xl-2 px-0 text-center ${styles.navItem}`}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <Link href="#" className={styles.navLink}>
              <img
                width={190}
                height={50}
                src={`./images/${
                  hoveredIndex === index ? item.altImage : item.image
                }.jpg`}
                alt={item.name}
                className={styles.navImage}
              />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Banner;
