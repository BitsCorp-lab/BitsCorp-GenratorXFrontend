import { useSelector, useDispatch } from "react-redux";
import AiSvg from "../../Assets/AiSvg";
import AppLayout from "../../Layout/AppLayout";
import GenratorModal from "./GenratorModal/GenratorModal";
import { handleModalState } from "../../Redux/Slices/GenratorX/genratorXSlice";
import "./Home.css";
const Home = () => {
  const dispatch = useDispatch();

  let modalState = useSelector((state) => state.genratorX.modalState);

  const showAppGenModal = () => {
    dispatch(handleModalState("show"))
  }
  return (
    <AppLayout>
      {modalState === "show" ? <GenratorModal /> : null}

      <div className="homeWrap">
        <div className="content">
          <div className="contentWrap">
            <p className="appDescpt">
              GeneratorX is a tool that generates React.js frontend and Node.js
              backend code, including initial functionality for performing
            </p>
            <p className="appDescpt">
              CRUD operations on your database, as well as
            </p>
            <p className="appDescpt">a directory structure for your app.</p>
            <button onClick={showAppGenModal} className="createBtn">Try GenratorX</button>
          </div>
        </div>
        <div className="image">
          <div className="aiLogo">
            <AiSvg />
          </div>
        </div>
      </div>
    </AppLayout>
  );
};

export default Home;
