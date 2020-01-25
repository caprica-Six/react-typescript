import * as React from 'react';

function CustomDate() {
  // returns run-time error, must specify that date is a string
  //let date = new Date();

  const [date, setDate] = React.useState('');
  const [time, setTime] = React.useState('');

  let getDate = () => {
    setDate(new Date().toDateString());
    console.log('get date', getDate);
  };

  let getTime = () => {
    setTime(new Date().toTimeString());
    console.log('set time', setTime);
  };

  return (
    <div>
      <div>
        <p>{date}</p>
        <button onClick={getDate}>Get the date</button>
      </div>

      <div>
        <p>{time}</p>
        <button onClick={getTime}>Get the time</button>
      </div>
    </div>
  );
}

export {CustomDate};
