import { useEffect } from 'react';

declare type CopiedProps = {
  isCopied: boolean;
};

export default function Copied({ isCopied }: CopiedProps) {
  return isCopied ? (
    <div className="rounded absolute bottom-1 right-1 p-4 pl-10 pr-10 bg-gray-800">
      <small className="text-green-700">copied!</small>{' '}
    </div>
  ) : null;
}
