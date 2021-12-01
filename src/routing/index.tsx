import React, { FC, Suspense } from "react";
import {
  HashRouter as Router,
  Navigate,
  Outlet,
  Route,
  Routes,
} from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import {
  Dashboard,
  Leaderboard,
  Matches,
  Prototype,
  Registration,
  SignIn,
  TeamLineUp,
} from "../pages";

/**
 * application router
 * @returns {JSX.Element}
 * @constructor
 */
const AppRouter: FC = () => {
  return (
    <Router>
      <Suspense fallback={<></>}>
        <AnimatePresence exitBeforeEnter>
          <Routes>
            <Route path="/" element={<Prototype />} />
            <Route path="/private-outlet" element={<PrivateOutlet />}>
              <Route path="" element={<Private />} />
            </Route>
            <Route
              path="/private-nested"
              element={
                <PrivateRoute>
                  <Private />
                </PrivateRoute>
              }
            />
            <Route path="/registration" element={<Registration />} />
            <Route path="/signIn" element={<SignIn />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/leaderboard" element={<Leaderboard />} />
            <Route path="/teamLineUp" element={<TeamLineUp />} />
            <Route path="/matches" element={<Matches />} />
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
