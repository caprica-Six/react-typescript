import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {Header} from './header.tsx';

ReactDOM.render(
  <div>
    <Header text="header component" />
    react renders
  </div>,
  document.querySelector('#root')
);
