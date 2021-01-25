import React, { useState, useRef } from 'react';

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
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

interface TextNode {
  text: string;
}

export const TextField = ({ text, handleChange }: Props) => {
  const [count, setCount] = useState<TextNode>({ text: 'hi again' });

  const inputRef = useRef<HTMLInputElement>(null);
  const divRef = useRef<HTMLDivElement>(null);

  return (
    <div ref={divRef}>
      <p>{text}</p>
      <input ref={inputRef} />
    </div>
  );
};
