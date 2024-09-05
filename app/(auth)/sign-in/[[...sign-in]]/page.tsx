import { SignIn } from '@clerk/nextjs'


const SignInPage = () => {
  return (


    <main className='relative flex flex-1  h-screen w-full items-center justify-center mt-4 '>
           <SignIn /> 
    </main>
  )
}

export default SignInPage