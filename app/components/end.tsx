import { useState } from 'react';

declare type EndProps = {
  updateEnd: (end: string) => void;
};

export default function End({ updateEnd }: EndProps) {
  const [end, setEnd] = useState<string>();

  const changed = (value: string) => {
    setEnd(value);
    updateEnd(value);
  };

  return (
    <div className="input-field">
      <form autoComplete="off">
        <div className="">
          <div>
            <label htmlFor="domain" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              End date
            </label>
            <input
              type="text"
              name="domain"
              placeholder="end date"
              onChange={e => changed(e.target.value || '')}
              value={end}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>
        </div>
      </form>
    </div>
  );
}
