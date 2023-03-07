import "./App.css";
import { RouterProvider } from "react-router-dom";
import appRoutes from "./Routes/AppRoutes";

function App() {
  return (
    <>
      <RouterProvider router={appRoutes} />
    </>
  );
}

export default App;
