import { SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
import { Button } from './ui/button'

type Props = {}

const Auth = async (props: Props) => {
  return (
    <div className='p-4'>
      <SignedOut>
        <SignInButton>
          <Button>Sign In</Button>
        </SignInButton>
      </SignedOut>
      <SignedIn>
        <div className='absolute top-[4vh] right-[4vh] scale-125'>
          <UserButton />
        </div>
      </SignedIn>
    </div>
  )
}

export default Auth;