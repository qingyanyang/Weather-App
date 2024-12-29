import WeatherPage from "@/pages/WeatherPage";
import NotFound from "@/pages/NotFound";

export default [
  {
    path: "/",
    element: <WeatherPage />,
  },
  {
    path: "/*",
    element: <NotFound />,
  },
];
