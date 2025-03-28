import React, { createContext, useContext, useState } from "react";
import { Outlet } from "react-router-dom";
import { Wrapper } from "../assets/wrappers/Dashboard";
// import Wrapper from '../assets/wrappers/Dashboard';
import { BigSidebar, Navbar, SmallSidebar } from "../components";

const DashbardContext = createContext();

const DashboardLayout = () => {
  // temp
  const user = { name: "john" };

  const [showSidebar, setShowSidebar] = useState(false);
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const toggleDarkTheme = () => {
    console.log("Toggle Dark theme");
  };

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  const logoutUser = async () => {
    console.log("logout user");
    //  navigate("/");
    //  await customFetch.get("/auth/logout");
    //  queryClient.invalidateQueries();
    //  toast.success("Logging out...");
  };

  return (
    <DashbardContext.Provider
      value={{
        user,
        showSidebar,
        isDarkTheme,
        toggleSidebar,
        toggleDarkTheme
      }}
    >
      <Wrapper>
        <main className="dashboard">
          <SmallSidebar />
          <BigSidebar />
          <div>
            <Navbar />
            <div className="dashboard-page">
              <Outlet />
            </div>
          </div>
        </main>
      </Wrapper>
    </DashbardContext.Provider>
  );
};

export const useDashboardContext = () => useContext(DashbardContext);
export default DashboardLayout;
