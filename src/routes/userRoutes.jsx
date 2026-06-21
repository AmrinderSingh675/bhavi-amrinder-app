import { lazy } from "react";
const UserList = lazy(() =>
  import("../features/users/pages/users")
);
const ManageUser = lazy(() =>
  import("../features/users/pages/manageuser")
);
const userRoutes = [
  {
    path: "/user/users",
    element: <UserList />
  },
  {
    path: "/user/manageuser",
    element: <ManageUser />
  }
];

export default userRoutes;