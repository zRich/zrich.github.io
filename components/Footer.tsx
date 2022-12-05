import Image from 'next/image'
import React from 'react'

export default function Footer() {
  return (
    <div>
      <div className='flex flex-col justify-between items-center'>
        <div className='flex flex-row max-w-[50%] justify-between items-center gap-4 '>
          <div className='flex flex-col justify-center items-center'>
            <p className='text-xs'>电报</p>
            <Image src='telegram.jpg' height={40} width={40} alt='telegram' />
          </div>
          <div className='flex flex-col justify-center items-center'>
            <p className='text-xs'>微信</p>
            <Image src='wechat.jpg' height={40} width={40} alt='Wechat' />
          </div>
        </div>
        <div className='font-bold justify-center items-center py-4'>
          <p>Copyright &copy; Zhao Zhenhua 2022</p>
        </div>
      </div>
    </div>
  )
}
