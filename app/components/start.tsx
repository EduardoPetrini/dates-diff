import { useEffect, useState } from 'react';

declare type StartProps = {
  updateStart: (start: string) => void;
  clear: boolean;
};

export default function Start({ updateStart, clear }: StartProps) {
  const [start, setStart] = useState('');

  const changed = (value: string) => {
    setStart(value.trim());
    updateStart(value.trim());
  };

  useEffect(() => {
    if (clear) {
      setStart('');
      updateStart('');
    }

    return () => {
      setStart('');
      updateStart('');
    };
  }, [clear, setStart, updateStart]);

  return (
    <div className="input-field">
      <form autoComplete="off">
        <div className="">
          <div>
            <label htmlFor="domain" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Start date
            </label>
            <input
              type="text"
              name="domain"
              placeholder="Start Date"
              onChange={e => changed(e.target.value || '')}
              value={start}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>
        </div>
      </form>
    </div>
  );
}
