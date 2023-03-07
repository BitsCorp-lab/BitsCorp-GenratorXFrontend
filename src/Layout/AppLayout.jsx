import BottomBar from "../Components/BottomBar/BottomBar";
import Navbar from "../Components/Navbar/Navbar";
import "./AppLayout.css";

const AppLayout = ({ children }) => {
  return (
    <div className="layoutCon">
      <div className="navbarCon">
        <Navbar />
      </div>
      <div className="contentCon scrollbarStyle">{children}</div>
      <BottomBar />
    </div>
  );
};

export default AppLayout;
