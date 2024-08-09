import { Table, TableBody, TableCaption, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { Textarea } from '@/components/ui/textarea'
import { db } from '@/lib/db'
import { UserButton } from '@clerk/nextjs'
import { auth } from '@clerk/nextjs/server'

type Props = {}

export const History = async (props: Props) => {

  const { userId } = auth()

  const userHistorys = await db.aIOutput.findMany({
    where:{
      userId: userId as string,
    }
  })
  return (
    
      <div className='mx-5 p-2'>
      <div className='flex flex-row md:flex-row gap-2 mt-5 py-6 px-4 bg-slate-200 rounded-xl  justify-between min-w-[400px] '>
        <div className='flex gap-2 items-center  w-4/5 lg:w-2/3 '>
          <div className='flex gap-2 items-center p-[6px] border rounded-full bg-slate-100'>
            <h2 className='font-semibold text-lg px-4'>History</h2>
          </div>
        </div>

        <div className='flex gap-2 items-center p-2 scale-150'>
          <UserButton />
        </div>
      </div>

      <div className='w-full px-8 mt-8 pt-6 pb-1 mb-4 bg-slate-200 h-ull rounded-xl'>
        <Table className='h-[77vh]'>
          <TableHeader>
            <TableRow>
              <TableHead className='w-[250px]'>Template</TableHead>
              <TableHead className='w-[250px]'>Title</TableHead>
              <TableHead>Description</TableHead>
              <TableHead className='w-[150px] text-right'>Crated At</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {
              userHistorys && userHistorys.length > 0 &&
                userHistorys.map((history) => (
                  <TableRow key={history.createdAt.toISOString()}>
                    <TableHead className='text-lg text-nowrap overflow-clip'>{history.templateUsed}</TableHead>
                    <TableHead className='text-lg w-[250px]'>{history.title}</TableHead>
                    <TableHead className='line-clamp-1 text-wrap overflow-scroll text-md h-[150px] p-[10px]'>
                      <Textarea value={history.description} className='outline-none border-none h-[130px] bg-slate-100'/>
                    </TableHead>
                    <TableHead className='text-md text-right'>{history.createdAt.toISOString().slice(0,10)}</TableHead>
                  </TableRow>
                ))
            }
          </TableBody>
          <TableCaption className='fixed bottom-8 left-1/2 bg-slate-300 rounded-full px-3 py-1 text-white'>A list of your ai output history</TableCaption>
        </Table>
      </div>

    </div>
  )
}

export default History