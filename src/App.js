import { useEffect } from "react";
import { useDispatch } from "react-redux";

import AppRoutes from "./routes/AppRoutes";


function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    //const token = localStorage.getItem("tokenReactJs");
  }, [dispatch]);

  return <AppRoutes />;
}

export default App;