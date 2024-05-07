import React from "react";
import { Outlet } from "react-router-dom";

const AppLayout = () => {
  return (
    <div className=" bg-gray-950 min-h-screen text-white px-6 py-4">
      {/** Header */}

      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default AppLayout;
