import * as React from 'react';

//enforce types
type HeaderProps = {
  text: string;
};

export const Header = (props: HeaderProps) => {
  return <h1 className="primary-header">{props.text}</h1>;
};
