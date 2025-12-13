import { createBrowserRouter } from "react-router-dom";
import HomeView from "@/views/HomeView";
import LoginView from "./views/LoginView";

const router = createBrowserRouter([
  {
    path: "/home",
    element: <HomeView />
  },
  {
    path: "/login",
    element: <LoginView />
  }
]);

export default router;
