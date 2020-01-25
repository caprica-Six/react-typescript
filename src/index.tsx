import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {Header} from './header.tsx';
import {CustomDate} from './custom-date.tsx';

ReactDOM.render(
  <div>
    <Header text="header component" />
    <CustomDate />
    react renders
  </div>,
  document.querySelector('#root')
);
