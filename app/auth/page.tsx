'use client'
import { Button, Checkbox, Input } from 'antd'
import { LuPhone } from 'react-icons/lu'

const AuthPage = () => {
  return (
    <div className='flex h-full flex-col'>
      <Header />
      <div className='mx-4'>
        <div className='flex flex-col gap-4'>
          <div className='flex flex-col gap-2'>
            <p className='text-right text-sm [direction:rtl]'>سلام!</p>
            <p className=' text-right text-sm [direction:rtl]'>لطفا شماره موبایل خود را وارد کنید</p>
          </div>
          <Form />
          <p className=' text-right text-sm [direction:rtl]'>حساب کاربری دارید؟ ورود</p>
        </div>
      </div>
      <Footer />
    </div>
  )
}

const Form = () => {
  return (
    <>
      <Input
        size='large'
        className='!font-display !rounded-xl !py-4'
        prefix={
          <div className='flex'>
            <LuPhone className='text-xl' />
            <span className='mx-3 border border-gray-400' />
          </div>
        }
      />
      <Checkbox onChange={() => {}}>
        <p className='font-display font-medium'>با ثبت نام در آلینو، قوانین و مقررات آن را می‌پذیرم.</p>
      </Checkbox>
      <Button type='primary' size='large' className='mt-4' block>
        <p className='font-display'>ثبت نام</p>
      </Button>
    </>
  )
}
const Header = () => {
  return (
    <>
      <div className='flex h-2/5 w-full rounded-b-[5rem] bg-blue-200'></div>
      <div className='-mt-16 flex h-32 w-32 self-center rounded-full bg-neutral-600'></div>
    </>
  )
}
const Footer = () => {
  return (
    <div className='mb-4 flex grow items-end justify-center'>
      <p className=' text-right text-sm font-light [direction:rtl]'>راهنمای ثبت نام</p>
      <span className='mx-3 h-6 border border-gray-400' />
      <p className=' text-right text-sm font-light [direction:rtl]'>تماس با پشتیبانی</p>
    </div>
  )
}

export default AuthPage
