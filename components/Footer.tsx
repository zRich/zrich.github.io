import Image from 'next/image'
import React from 'react'

export default function Footer() {
  return (
    <div>
      <div className='flex flex-col justify-between items-center'>
        <div className='flex flex-row md:w-[50%] justify-between items-center '>
          <div className='font-bold gap-4'>
            <p>Telegram: x0rich</p>
          </div>
          <div>
            <Image src='wechat.jpg' height={50} width={50} alt='Wechat' />
          </div>
        </div>
        <div className='font-bold justify-center items-center'>
          <p>Copyright Zhao Zhenhua 2022</p>
        </div>
      </div>
    </div>
  )
}
