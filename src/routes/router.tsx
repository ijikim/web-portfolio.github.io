import { createBrowserRouter } from "react-router-dom";
import { RootLayout, ErrorLayout } from "@/layouts";
import OnePage from "@/pages/one-page";
import CommingSoonPage from "@/pages/error/comming-soon";
import NotFoundPage from "@/pages/error/not-found";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <OnePage />,
      },
    ],
  },
  {
    element: <ErrorLayout />,
    children: [
      {
        path: "/comming-soon",
        element: <CommingSoonPage />,
      },
      {
        path: "*",
        element: <NotFoundPage />,
      },
    ],
  },
]);

export default router;
