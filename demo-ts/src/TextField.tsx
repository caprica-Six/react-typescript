import React from 'react';

interface Person {
  firstName: string;
  lastName: string;
}

interface Props {
  text: string;
  confirm?: boolean; // prop is optional with ?, no need to be passed
  i?: number;
  fn?: (jack: string) => string;
  person: Person;
}

export const TextField = ({ text }: Props) => {
  return (
    <div>
      <p>{text}</p>
      <input />
    </div>
  );
};
