import React from 'react';
import ReactMarkdown from 'react-markdown';

type Props = {
  text: string
}

export function Markdown({ text } : Props) {


  return (
    <div className='h-[220px] pb-10 bg-slate-100 whitespace-pre-wrap overflow-scroll'>
      <ReactMarkdown>
      {text}
      </ReactMarkdown>
    </div>
  );
}