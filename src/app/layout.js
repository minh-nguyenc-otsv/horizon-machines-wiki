import "./globals.css";
import React from "react";
import Footer from "./components/Footer";

export const metadata = {
  title: "Horizon Zero Dawn Machines Wiki",
  description: "Horizon Zero Dawn Machines Wiki",
};

export default function RootLayout({ children }) {
  return (
    <html data-theme="winter" lang="en">
      <body>
        <div>
          <div className="drawer">
            <input id="my-drawer" type="checkbox" className="drawer-toggle" />

            <div className="drawer-content">
              {/*<!-- Page content here -->*/}
              {/* Navbar */}
              <div className="navbar bg-base-100">
                <div className="navbar-start">
                  <label
                    htmlFor="my-drawer"
                    className="btn btn-primary btn-circle"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 6h16M4 12h16M4 18h7"
                      />
                    </svg>
                  </label>
                </div>
                <div className="navbar-center">
                  <a className="btn btn-ghost normal-case text-xl">
                    Horizon Machines Wiki
                  </a>
                </div>
                <div className="navbar-end">
                  <button className="btn btn-ghost btn-circle">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                      />
                    </svg>
                  </button>
                </div>
              </div>
              <div>{children}</div>
              <div className="sticky top-[100vh]">
                <Footer />
              </div>
            </div>
            <div className="drawer-side">
              <label htmlFor="my-drawer" className="drawer-overlay"></label>
              <ul className="menu p-4 w-80 bg-base-100 text-base-content">
                {/*!--Sidebar content here --*/}
                <li>
                  <a>Con Cặc</a>
                </li>
                <li>
                  <a>Con Kẹt</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
