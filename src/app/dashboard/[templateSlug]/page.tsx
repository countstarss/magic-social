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
      console.log("response",response);
      
      setIsLoading(false)
    } catch (error) {
      console.log(error);

    }
  }
  const onSubmit = async (formData: FormData) => {
    generateAIContent(formData)
  }

  return (
    <div className='mx-5 py-2'>
      <div className='mt-5 py-6 px-4 bg-slate-100 rounded'>
        <h2 className='font-semibold text-xl'>{selectedTemplate?.name}</h2>
      </div>
      <form action={onSubmit}>
        <div className='flex flex-col gap-4 p-5 m-5 bg-slate-100'>
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
        <Button className='mx-10 w-[200px]'>
          {
            isLoading ? (
              <Loader2 className='animate-spin' />
            ) : (
              <h2 className='font-semibold'>Generate Content</h2>
            )
          }
        </Button>
      </form>
      <div className='m-5 py-6 px-4 bg-slate-100 rounded'>
        <Editor value={aiOutput} />
      </div>
    </div>
  )
}

export default TemplatePage;