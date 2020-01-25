import * as React from 'react';

function CustomDate() {
  // returns run-time error, must specify that date is a string
  //let date = new Date();

  let date: string = '';

  let getDate = () => {
    date = new Date().toDateString();
    console.log('get date', getDate);
  };

  return (
    <div>
      {date}
      <button onClick={getDate}>Get the date</button>
    </div>
  );
}

export {CustomDate};
