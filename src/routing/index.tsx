import React, { FC, Suspense } from "react";
import {
  HashRouter as Router,
  Navigate,
  Outlet,
  Route,
  Routes,
} from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { Registration } from "../pages";

/**
 * application router
 * @returns {JSX.Element}
 * @constructor
 */
const AppRouter: FC = () => {
  return (
    <Router>
      <Suspense fallback={<></>}>
        <AnimatePresence exitBeforeEnter initial={false}>
          <Routes>
            <Route path="/" element={<Registration />} />
          </Routes>
        </AnimatePresence>
      </Suspense>
    </Router>
  );
};

const Private = () => <div>private</div>;

function PrivateOutlet() {
  const auth = useAuth();
  return auth ? <Outlet /> : <Navigate to="/registration" />;
}

function PrivateRoute({ children }: any) {
  const auth = useAuth();
  return auth ? children : <Navigate to="/registration" />;
}

function useAuth() {
  return true;
}

export default AppRouter;
