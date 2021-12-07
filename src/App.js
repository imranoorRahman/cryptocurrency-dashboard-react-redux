import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import { Layout, Typography, Space } from 'antd';
import {Navbar, Homepage, Exchanges, Cryptocurrencies, CryptoDetails, News} from './components';
import './App.css';

const App = () => (
    <div className="app">
      <div className="navbar">
        <Navbar />
      </div>
      <div className="main">
        <Layout>
          <div className="routes">
            <Switch>
              <Route exact path="/">
                <Homepage />
              </Route>
              <Route exact path="/exchanges">
                <Exchanges />
              </Route>
              <Route exact path="/cryptocurrencies">
                <Cryptocurrencies />
              </Route>
              <Route exact path="/crypto/:coinId">
                <CryptoDetails />
              </Route>
              <Route exact path="/news">
                <News />
              </Route>
            </Switch>
          </div>
        </Layout>
        <div className="footer">
          <Space>
            <Link to="/">Home</Link>
            <Link to="/exchanges">Exchanges</Link>
            <Link to="/news">News</Link>
            <a href="http://imranoor.ga" target="_blank" rel="noopener noreferrer">Portfolio</a>
          </Space>
          <Typography.Title level={5} style={{ color: 'white', textAlign: 'center' }}>© All Rights Reserved{" - "}
            <Link to="/">
            CryptoDashboard
            </Link>
          </Typography.Title>
        </div>
      </div>
    </div>
  );

export default App
