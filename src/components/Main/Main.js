"use client";

import React from "react";
import Search from "@/components/Search/Search.js";
import Banner from "@/components/Banner/Banner.js";
import CustomerService from "@/components/CustomerService/CustomerService.js";

const Main = () => {
  return (
    <main className="d-flex flex-column gap-2">
      <Search />
      <Banner />
      <CustomerService />
    </main>
  );
};

export default Main;
