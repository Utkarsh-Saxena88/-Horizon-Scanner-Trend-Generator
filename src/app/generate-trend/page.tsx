import TrendForm from "@/components/trend-form";
import React from "react";
import Sidebar from "@/components/Sidebar";

const page = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="min-h-screen flex w-[70%]">
        <TrendForm />
      </div>
    </div>
  );
};

export default page;
