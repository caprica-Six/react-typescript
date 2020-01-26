import * as React from 'react';

type FruitsProps = {
  fruit: Array<string>;
};

function Fruits(props: FruitsProps) {
  return (
    <ul>
      {props.fruit.map((value, index) => {
        return (
          <li key={index} style={{color: value}}>
            {value}
          </li>
        );
      })}
    </ul>
  );
}

export {Fruits};
