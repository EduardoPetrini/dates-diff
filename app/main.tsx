'use client';

import Start from './components/start';
import End from './components/end';
import Result from './components/result';
import { useState } from 'react';
import Clear from './components/clear';

export default function Main() {
  const [start, setStart] = useState<string>('');
  const [end, setEnd] = useState<string>('');
  const [clear, setClear] = useState<boolean>(false);

  return (
    <main className="flex flex-col items-center justify-between p-24">
      <div className="input-container block w-3/6 lg:flex lg:justify-between">
        <Start updateStart={setStart} clear={clear} />
        <End updateEnd={setEnd} clear={clear} />
      </div>
      <div className="output-container w-3/6 lg:flex lg:justify-center ">
        <Result start={start} end={end} clear={clear}/>
      </div>
      <div className="output-container w-3/6 lg:flex lg:justify-center mt-10 ">
        <Clear setClear={setClear} />
      </div>
    </main>
  );
}
