import React, { FC } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { privateRoutes, publicRoutes, RouteNames } from '../router';

const AppRouter: FC = () => {
  const auth = true;

  return auth ? (
    <Routes>
      {privateRoutes.map((route) => (
        <>
          <Route
            path={route.path}
            element={<route.component />}
            key={route.path}
          />
          <Route
            element={<Navigate to={RouteNames.EVENT} />}
            key={route.path}
          />
        </>
      ))}
    </Routes>
  ) : (
    <Routes>
      {publicRoutes.map((route) => (
        <>
          <Route
            path={route.path}
            element={<route.component />}
            key={route.path}
          />
          <Route
            element={<Navigate to={RouteNames.LOGIN} />}
            key={route.path}
          />
        </>
      ))}
    </Routes>
  );
};

export default AppRouter;
