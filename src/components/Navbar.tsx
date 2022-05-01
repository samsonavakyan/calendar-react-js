import React, { FC } from 'react';
import { Layout, Menu, Row } from 'antd';
import { useNavigate } from 'react-router-dom';

import { useTypedSelector } from '../hooks/useTypedSelector';
import { RouteNames } from '../router';
import { useActions } from '../hooks/useActions';

const Navbar: FC = () => {
  const router = useNavigate();
  const { isAuth, user } = useTypedSelector((state) => state.auth);
  const { logout } = useActions();

  return (
    <Layout.Header>
      <Row justify="end">
        {isAuth ? (
          <>
            <div style={{ color: 'white' }}>{user.username}</div>{' '}
            <Menu theme="dark" mode="horizontal" selectable={false}>
              <Menu.Item onClick={() => logout()} key={1}>
                Выйти
              </Menu.Item>
            </Menu>
          </>
        ) : (
          <Menu theme="dark" mode="horizontal" selectable={false}>
            <Menu.Item onClick={() => router(RouteNames.LOGIN)} key={1}>
              Логин
            </Menu.Item>
          </Menu>
        )}
      </Row>
    </Layout.Header>
  );
};

export default Navbar;
