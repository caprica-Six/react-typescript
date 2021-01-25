import React, { useState } from 'react';

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

interface TextNode {
  text: string;
}

export const TextField = ({ text }: Props) => {
  const [count, setCount] = useState<TextNode>({ text: 'hi again' });

  setCount({ text });

  return (
    <div>
      <p>{text}</p>
      <input />
    </div>
  );
};
