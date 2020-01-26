import * as React from 'react';

function Fruits() {
  let fruit: Array<string> = ['red', 'green', 'blue', 'orange'];

  return (
    <>
      <ul>
        {fruit.map((value, index) => {
          return (
            <li key={index} style={{color: value}}>
              {value}
            </li>
          );
        })}
      </ul>
    </>
  );
}

export {Fruits};
