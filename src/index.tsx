import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {Header} from './header.tsx';
import {CustomDate} from './custom-date.tsx';
import {Fruits} from './fruits.tsx';

ReactDOM.render(
  <div>
    <Header text="header component" />
    <CustomDate />
    react
    <Fruits />
  </div>,
  document.querySelector('#root')
);
