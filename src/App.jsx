import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Dashboard from "./components/Dashboard";
import { Outlet } from "react-router-dom";
import ExpanceProvider from "./store/store";
import "./App.css";
import { useState } from "react";

function App() {
  const [showSidebar, setShowSideBar] = useState(false);
  const [blueRay, setBlueRay] = useState("")

  return (
    <>
      <ExpanceProvider>
        <div className="d-flex">
          {showSidebar && (
            <Sidebar
              showSidebar={showSidebar}
              setShowSideBar={setShowSideBar}
              blueRay={blueRay}
            setBlueRay={setBlueRay}
            ></Sidebar>
          )}
          <div className="flex-grow-1 container-1">
            <Header setShowSideBar={setShowSideBar}></Header>
            {/* <Dashboard></Dashboard> */}
            <Outlet></Outlet>
          </div>
        </div>
      </ExpanceProvider>
    </>
  );
}

export default App;
