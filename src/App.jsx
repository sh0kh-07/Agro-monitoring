import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AppLayout from "./layouts/AppLayout";
import AdminLayout from "./layouts/AdminLayout";
import Login from "./Components/Login/Login";
import ErrorPage from "./Components/ErrorPage/ErrorPage";
import { HokimRoutes } from "./Routes/HokimRoutes";
import { TumanRoutes } from "./Routes/TumanRoutes";
import MainLayout from "./layouts/MainLayout";
import ProtectedRoute from "./Components/ProtectRoute";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route path="/login" element={<Login />} />
          <Route path="/tuman" element={<ProtectedRoute>
            <AdminLayout />
          </ProtectedRoute>}>
            {HokimRoutes.map((route) => (
              <Route
                key={route.path}
                path={route.path}
                element={route.component}
              />
            ))}
          </Route>
          <Route path="/hudud" element={<ProtectedRoute>
            <MainLayout />
          </ProtectedRoute>}>
            {TumanRoutes.map((route) => (
              <Route
                key={route.path}
                path={route.path}
                element={route.component}
              />
            ))}
          </Route>
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
    </Router>
  );
}
export default App;
