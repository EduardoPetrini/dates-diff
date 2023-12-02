import { padIndexTwo } from '@/lib/helpers';
import { useEffect, useState } from 'react';
import { IconCopy } from './ui/icons';
import Copied from './ui/copied';

declare type ResultProps = {
  start: string | undefined;
  end: string | undefined;
};

export default function Result({ start, end }: ResultProps) {
  const [result, setResult] = useState('Result');

  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!start || !end) {
      return;
    }

    const startD = new Date(start);
    const endD = new Date(end);

    const result = endD.valueOf() - startD.valueOf();

    if (isNaN(result)) {
      setResult('Not valid');
      return;
    }

    let text = `${result}ms`;

    if (result < 1000) {
      setResult(text);
      return;
    }

    let ms = result % 1000;
    text = `${ms}ms`;

    let s = Math.round(result / 1000);
    let sr = s % 60;
    if (s < 60) {
      text = `${padIndexTwo(s)}s:` + text;
      setResult(text);
      return;
    }

    text = `${padIndexTwo(sr)}s:` + text;

    let m = Math.round(s / 60);
    let mr = m % 60;
    if (m < 60) {
      text = `${padIndexTwo(m)}m:` + text;
      setResult(text);
      return;
    }

    text = `${padIndexTwo(mr)}m:` + text;

    let h = Math.round(m / 60);
    let hr = h % 24;

    if (h < 24) {
      text = `${padIndexTwo(h)}h:` + text;
      setResult(text);
      return;
    }

    text = `${padIndexTwo(hr)}h:` + text;

    let d = Math.round(h / 24);
    let dr = d % 7;

    if (d < 7) {
      text = `${padIndexTwo(d)}d:` + text;
      setResult(text);
      return;
    }

    text = `${padIndexTwo(dr)}d:` + text;

    let w = Math.round(d / 7);
    let wr = w % 4;

    if (w < 4) {
      text = `${padIndexTwo(w)}w:` + text;
      setResult(text);
      return;
    }

    text = `${padIndexTwo(wr)}w:` + text;

    let mo = Math.round(w / 4);
    let mor = mo % 12;

    if (mo < 12) {
      text = `${padIndexTwo(mo)}mo:` + text;
      setResult(text);
      return;
    }

    text = `${padIndexTwo(mor)}mo:` + text;

    let y = Math.round(mo / 12);
    text = `${y}y:` + text;
    setResult(text);

    return () => setResult('Result');
  }, [start, end]);

  return (
    <div className="flex mt-10">
      <label htmlFor="domain" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"></label>
      <span className="min-w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white">{result}</span>
      <button
        className="ml-4"
        onClick={e => {
          e.preventDefault();
          navigator.clipboard.writeText(result).then(() => {
            console.log('result copied');
          });
          setCopied(true);
          setTimeout(() => setCopied(false), 2000);
        }}
      >
        <IconCopy />
      </button>
      <Copied isCopied={copied} />
    </div>
  );
}
