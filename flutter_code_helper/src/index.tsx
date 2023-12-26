import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';

import { Provider } from 'react-redux';
import { store } from './redux/configStore';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { navPath } from './utils/constant';
import HomeTemplate from './templates/HomeTemplate';
import UI from './pages/UI/UI';
import Block from './pages/codeBlock/presentation/CodeBlock';
import { configServiceLocator } from './utils/di';
import FeatureGeneration from './pages/featureGeneration/presentation/FeatureGeneration';


configServiceLocator()

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);


root.render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path={navPath.home} element={<HomeTemplate />}>
          <Route index element={<UI />} />
          <Route path={navPath.block} element={<Block />} />
          <Route path={navPath.featureGeneration} element={<FeatureGeneration />} />
        </Route>

      </Routes>
    </BrowserRouter>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
