import React, { FC } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import { privateRoutes, publicRoutes, RouteNames } from '../router';

const AppRouter: FC = () => {
  const auth = true;

  return auth ? (
    <Routes>
      {privateRoutes.map((route) => (
        <React.Fragment key={route.path}>
          <Route path={route.path} element={<route.component />} />
          <Route
            path="*"
            element={<Navigate replace to={RouteNames.EVENT} />}
          />
        </React.Fragment>
      ))}
    </Routes>
  ) : (
    <Routes>
      {publicRoutes.map((route) => (
        <React.Fragment key={route.path}>
          <Route path={route.path} element={<route.component />} />
          <Route
            path="*"
            element={<Navigate replace to={RouteNames.LOGIN} />}
          />
        </React.Fragment>
      ))}
    </Routes>
  );
};

export default AppRouter;
