import Header from "../containers/Layout/Header/Header";
import Sidebar from "../containers/Layout/Sidebar/Sidebar";
import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Footer from "../containers/Layout/Footer/Footer";
import useWindowSize from "../library/hooks/useWindowSize";
import FooterMobile from "../containers/Layout/Footer/FooterMobile/FooterMobile";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../redux/slice/User/userSlice";

const Default = () => {
  const [toggle, setToggle] = useState(false); //open

  const handleToggleSidebar = () => {
    setToggle(!toggle);
  };

  const { width } = useWindowSize();

  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.user.currentUser);

  useEffect(() => {
    dispatch(getUser());
  }, []);

  return (
    <>
      <div className="page">
        {width > 992 && (
          <div
            className={
              toggle
                ? "sidebar sidebar-in animate-fade-in-left"
                : "sidebar sidebar-out animate-fade-in-right"
            }
          >
            <div className="btn-sidebar-toggle sidebar-toggle">
              <div
                className="menu-btn"
                onClick={() => {
                  handleToggleSidebar();
                }}
              >
                {toggle ? (
                  <i class="fa-light fa-angle-left"></i>
                ) : (
                  <i class="fa-light fa-angle-right"></i>
                )}
              </div>
            </div>
            <Sidebar />
          </div>
        )}
        {width > 992 ? (
          <div
            className={toggle ? "main-content ml-270" : "main-content ml-100"}
          >
            <Header />
            <div className="content-page">
              {/* <DefaultRouter /> */}
              <Outlet />
            </div>
            {width > 992 ? <Footer /> : <FooterMobile />}
          </div>
        ) : (
          <div className="main-content ">
            <Header />
            <div className="content-page">
              {/* <DefaultRouter /> */}
              <Outlet />
            </div>
            {width > 992 ? <Footer /> : <FooterMobile />}
          </div>
        )}
      </div>
    </>
  );
};

export default Default;

//  <div className={toggle ? "main-content ml-270" : "main-content ml-100"}>
