'use client';

import { useEffect, useState } from 'react';

const Test = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    const id = setInterval(() => {
      console.log('setting --->');
      setCount(count + 1);
      // setCount(count => count + 1);
    }, 1000);
    return () => clearInterval(id);
  }, [count]);

  return <p>{count}</p>;
};

export default Test;
