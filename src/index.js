/*
 * @Author: CaiPeng
 * @Date: 2023-03-09 11:15:02
 * @LastEditors: caipeng
 * @LastEditTime: 2023-03-09 11:29:26
 * @FilePath: \React\init\src\index.js
 * @Description: 
 */
import React from 'react';
import ReactDOM from 'react-dom/client';

import { ConfigProvider } from 'antd'
import zhCN from 'antd/es/locale/zh_CN'

import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ConfigProvider locale={zhCN}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ConfigProvider>
)
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
