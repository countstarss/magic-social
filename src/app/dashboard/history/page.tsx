import { Table, TableBody, TableCaption, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { Textarea } from '@/components/ui/textarea'
import { db } from '@/lib/db'
import { auth } from '@clerk/nextjs/server'

type Props = {}
// MARK:History


export const History = async (props: Props) => {

  // const [content,setContent] = useState('')
  // const onChangeHandler = (content:string) => {
  //   useEffect(() => {
  //     setContent(content)
  //   },[content])
  // }
  const { userId } = auth()

  const userHistorys = await db.aIOutput.findMany({
    where:{
      userId: userId as string,
    }
  })
  return (
    <div className='mx-5 py-2'>
      <div className='mt-5 py-6 px-4 bg-slate-200 rounded-xl'>
        <h2 className='font-semibold text-xl'>Output History</h2>
      </div>

      <div className='mt-5 py-6 px-4 bg-white rounded'>
        <Table>
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
                    <TableHead className='line-clamp-1 text-wrap overflow-scroll text-md h-[150px] p-[5px]'>
                      <Textarea value={history.description} className='outline-none border-none h-[140px]'/>
                    </TableHead>
                    <TableHead className='text-md text-right'>{history.createdAt.toISOString().slice(0,10)}</TableHead>
                  </TableRow>
                ))
            }
          </TableBody>
        <TableCaption className='fixed bottom-10 left-1/2'>A list of your ai output history</TableCaption>
        </Table>
      </div>

    </div>
  )
}

export default History