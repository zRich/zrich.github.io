import Link from 'next/link'
import React from 'react'
export default function Home() {
  return (
    <div className="max-w-xl mx-auto py-8">
      <p className='text-6xl'>
        数据的概念和内含正在进行根本性改变，它正逐渐变化成资产本身。这是一个伟大的变革，让我们一起做点、改变这个世界吧！
      </p>

        <Link
        className='text-4xl text-blue-600'
        href={"/posts"}
        >
        更多文章
      </Link>

    </div>
  )
}
