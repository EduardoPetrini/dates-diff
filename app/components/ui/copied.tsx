import { useEffect } from 'react'

declare type CopiedProps = {
  isCopied: boolean
}

export default function Copied({isCopied}:CopiedProps) {
  
  return (
    isCopied ? <div className="absolute bottom-0 right-0 p-10 bg-gray-800"> <small className="text-green-700">copied!</small> </div>: (null)
  )
}
