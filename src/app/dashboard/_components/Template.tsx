import React from 'react'
import { contentTemplates } from '@/lib/contentTemplate'
import Link from 'next/link'
import { cn } from '@/lib/utils'

type Props = {}

const Template = (props: Props) => {
  return (
    <div className={
      cn('grid md:grid-cols-4 mx-7 p-2 px-6 my-6 py-6 bg-slate-200 rounded-xl h-[80vh] gap-16 overflow-scroll',{
        "md:grid-rows-3" :contentTemplates.length < 9
      })
    }>
      {contentTemplates.map((template) => (
        <div key={template.slug}>
          <Link
            href={`/dashboard/${template.slug}`}
            className="bg-white w-full rounded-lg h-[200px] py-6 px-4 text-center flex flex-col justify-center"
          >
            <template.icon className="h-12 w-12 mx-auto"></template.icon>
            <h2 className="font-semibold mt-5">{template.name}</h2>
          </Link>
        </div>
      ))}
    </div>
  )
}

export default Template;