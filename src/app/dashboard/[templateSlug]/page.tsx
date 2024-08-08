'use client'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { contentTemplates } from '@/lib/contentTemplate'
import { Loader2 } from 'lucide-react'
import React, { useState } from 'react'
import Editor from './_components/Editor'

interface templateSlugProps{
  templateSlug:string
}

type Props = {
  params:templateSlugProps
}

const TemplatePage = ({ params }: Props) => {
  const [isLoading,setIsLoading] = useState(false);

  const selectedTemplate = contentTemplates.find((item) => 
    item.slug === params.templateSlug
  )  

  return (
    <div className='mx-5 py-2'>
      <div className='mt-5 py-6 px-4 bg-white rounded'>
        <h2 className='font-semibold text-xl'>{selectedTemplate?.name}</h2>
      </div>
      <form action="">
        <div className='flex flex-col gap-4 p-5 m-5 bg-white'>
          {selectedTemplate?.form?.map((form,index) => (
            <div key={`${selectedTemplate.slug}-${index}`}>
              <label>{form.label}</label>
              {form.field === "input" ? (
                <div className='mt-5'>
                  <Input name='title'/>
                </div>
              ) : (
                <div className='mt-5'>
                  <Textarea />
                </div>
              )}
            </div>
          ))}
        </div>
          <Button className='mx-10 w-[200px]'>
            {
              isLoading ? (
                <Loader2 className='animate-spin'/>
              ) : (
                <h2 className='font-semibold'>Generate Content</h2>
              )
            }
          </Button>
      </form>
      <div className='m-5 py-6 px-4 bg-white rounded'>
        <Editor value='value'/>
      </div>
    </div>
  )
}

export default TemplatePage;