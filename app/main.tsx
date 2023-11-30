
'use client';

import Start from './components/start';
import End from './components/end';
import Result from './components/result';
import { useState } from 'react';

export default function Main() {
  const [start, setStart] = useState<string>();
  const [end, setEnd] = useState<string>();
  
  return (
    <main className="flex flex-col items-center justify-between p-24">
      <div className="input-container flex justify-between w-2/6">
        <Start updateStart={setStart}/>
        <End updateEnd={setEnd}/>
      </div>
      <div className="output-container">
        <Result start={start} end={end}/>
      </div>
    </main>
  );
}

