import * as React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import Home from './Home.tsx';

const rootEl: any = document.getElementById('root');
render(
  <AppContainer>
    <Home/>
  </AppContainer>,
  rootEl
);

if(module.hot) {
  module.hot.accept('./Home.tsx', () => {
    const NextHome: any = require<{ default: any }>('./Home.tsx').default;
    render(
      <AppContainer>
        <NextHome />
      </AppContainer>,
      rootEl
    );
  });
}
