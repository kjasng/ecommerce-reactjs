import ElementsPage from "./components/pages/elements/Elements";
import HomePage from "./components/pages/HomePage";

const routes = [
  {
    path: "/",
    exact: true,
    main: () => HomePage
  },
  {
    path: "/elements",
    exact: false,
    main: () => ElementsPage
  }
];

export default routes;
