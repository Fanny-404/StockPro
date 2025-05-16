import { Navigate, Route, Routes } from "react-router-dom";
import { useUsers } from "../hooks/useUsers";
import { RegisterPage } from "../pages/RegisterPage";
import { UsersPage } from "../pages/UsersPage";

export const UserRoutes = () => {
  const {
    users,
    userSelected,
    initialUserForm,
    visibleForm,
    handlerAddUser,
    handlerRemoveUser,
    handlerUserSelectedForm,
    handlerOpenForm,
    handlerCloseForm,
  } = useUsers();

  return (
    <Routes>
      <Route
        path="/"
        element={
          <UsersPage
            users={users}
            userSelected={userSelected}
            initialUserForm={initialUserForm}
            visibleForm={visibleForm}
            handlerAddUser={handlerAddUser}
            handlerRemoveUser={handlerRemoveUser}
            handlerUserSelectedForm={handlerUserSelectedForm}
            handlerOpenForm={handlerOpenForm}
            handlerCloseForm={handlerCloseForm}
          />
        }
      />
      <Route
        path="register"
        element={
          <RegisterPage
            handlerAddUser={handlerAddUser}
            initialUserForm={initialUserForm}
          />
        }
      />
      <Route
        path="edit/:id"
        element={
          <RegisterPage
            users={users}
            handlerAddUser={handlerAddUser}
            initialUserForm={initialUserForm}
          />
        }
      />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};
