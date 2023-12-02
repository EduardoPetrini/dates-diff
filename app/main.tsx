'use client';

import Start from './components/start';
import End from './components/end';
import Result from './components/result';
import { useState } from 'react';

export default function Main() {
  const [start, setStart] = useState<string>('');
  const [end, setEnd] = useState<string>('');

  return (
    <main className="flex flex-col items-center justify-between p-24">
      <div className="input-container block w-3/6 lg:flex lg:justify-between">
        <Start updateStart={setStart} />
        <End updateEnd={setEnd} />
      </div>
      <div className="output-container w-3/6 lg:flex lg:justify-center ">
        <Result start={start} end={end} />
      </div>
    </main>
  );
}
