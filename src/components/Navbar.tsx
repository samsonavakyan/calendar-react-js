import { Layout, Menu, Row } from 'antd';
import React, { FC } from 'react';
import { useNavigate } from 'react-router-dom';

import { useTypedSelector } from '../hooks/useTypedSelector';
import { RouteNames } from '../router';

const Navbar: FC = () => {
  const router = useNavigate();
  const { isAuth } = useTypedSelector((state) => state.auth);

  return (
    <Layout.Header>
      <Row justify="end">
        {isAuth ? (
          <>
            <div style={{ color: 'white' }}>Samson</div>{' '}
            <Menu theme="dark" mode="horizontal" selectable={false}>
              <Menu.Item onClick={() => console.log('Выйти')} key={1}>
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
