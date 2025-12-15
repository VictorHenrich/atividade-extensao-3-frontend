import { createBrowserRouter } from "react-router-dom";
import HomeView from "@/views/HomeView";
import LoginView from "@/views/LoginView";
import App from "./App";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/home",
    element: <HomeView />,
  },

  {
    path: "/home",
    element: <HomeView />,
  },
  {
    path: "/login",
    element: <LoginView />
  }
]);

export default router;
