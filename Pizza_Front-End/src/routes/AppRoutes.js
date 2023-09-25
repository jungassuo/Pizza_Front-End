import Home from "../pages/Home"
import Orders from "../pages/Orders";

const AppRoutes = [
  {
    index: true,
    element: <Home />
  },
  {
      path: '/products',
      element: <Home />
  },
  {
      path: '/orders',
      element: <Orders />
  },

];

export default AppRoutes;
