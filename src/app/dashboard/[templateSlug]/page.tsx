'use client'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { contentTemplates } from '@/lib/contentTemplate'
import { Loader2 } from 'lucide-react'
import React, { useState } from 'react'
import Editor from './_components/Editor'
import { chatSession } from '@/lib/gemini-ai'
import axios from 'axios'
import { UserButton } from '@clerk/nextjs'
import { Markdown } from '@/components/Markdown'

interface templateSlugProps {
  templateSlug: string
}

type Props = {
  params: templateSlugProps
}

const TemplatePage = ({ params }: Props) => {
  const [isLoading, setIsLoading] = useState(false);
  const [aiOutput, setAiOutput] = useState<string>("");

  const selectedTemplate = contentTemplates.find((item) =>
    item.slug === params.templateSlug
  )

  const generateAIContent = async (formData: FormData) => {
    setIsLoading(true)
    try {
      let dataSet = {
        title: formData.get('title'),
        description: formData.get("description"),
      }

      const selectedPrompt = selectedTemplate?.aiPrompt;
      const finalAIPrompt = JSON.stringify(dataSet) + ", " + selectedPrompt

      const result = await chatSession.sendMessage(finalAIPrompt);
      const aiResponse = await result.response;
      const text = aiResponse.text()


      setAiOutput(text)

      //TODO: axios post
      const response = await axios.post('/api/gen-ai', {
        title: dataSet.title,
        description: text,
        templateUsed: selectedTemplate?.name,
      })
      console.log("response", response);

      setIsLoading(false)
    } catch (error) {
      console.log(error);

    }
  }
  const onSubmit = async (formData: FormData) => {
    generateAIContent(formData)
  }

  return (
    <>
      <div className='mx-5 p-2 h-screen'>
        <div className='flex flex-row md:flex-row gap-2 mt-5 py-6 px-4 bg-slate-200 rounded  justify-between min-w-[400px] '>
          <div className='flex gap-2 items-center  w-4/5 lg:w-2/3 '>
            <div className='flex gap-2 items-center p-[6px] border rounded-full bg-slate-100'>
              <h2 className='font-semibold text-lg px-4'>{selectedTemplate?.name}</h2>
            </div>
          </div>

          <div className='flex gap-2 items-center p-2 scale-150'>
            <UserButton />
          </div>
        </div>

        <div className='w-full px-8 my-8 py-6 mt-8 bg-slate-200 h-fit rounded'>
          <form action={onSubmit} >
            <div className='flex flex-col gap-4 p-5 px-6 m-2 bg-slate-100 rounded-lg'>
              {selectedTemplate?.form?.map((form, index) => (
                <div key={`${selectedTemplate.slug}-${index}`}>
                  <label>{form.label}</label>
                  {form.field === "input" ? (
                    <div className='mt-5'>
                      <Input name='title' />
                    </div>
                  ) : (
                    <div className='mt-5'>
                      <Textarea />
                    </div>
                  )}
                </div>
              ))}
            </div>
            <Button className='m-6 mb-8 w-[200px]'>
              {
                isLoading ? (
                  <Loader2 className='animate-spin' />
                ) : (
                  <h2 className='font-semibold'>Generate Content</h2>
                )
              }
            </Button>
          </form>

          <div className='m-2 py-6 px-4 mt-2 bg-slate-100 rounded-lg h-[268px]'>
            {/* <Editor value={aiOutput} /> */}
            <Markdown text={aiOutput}/>
          </div>
        </div>

      </div>
    </>
  )
}

export default TemplatePage;