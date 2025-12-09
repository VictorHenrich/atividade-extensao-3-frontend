import { createBrowserRouter, type Router } from "react-router-dom";
import HomeView from "@/views/HomeView";

const router: Router = createBrowserRouter([
  {
    path: "/",
    element: <HomeView />
  },
]);

export default router;
