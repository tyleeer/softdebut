"use client";

import React from "react";
import Search from "@/components/Search/Search";
import Banner from "@/components/Banner/Banner";
import CustomerService from "@/components/CustomerService/CustomerService";

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
