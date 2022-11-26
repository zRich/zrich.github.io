import Link from 'next/link'
import { compareDesc, format, parseISO } from 'date-fns'
import { allPosts, Post } from 'contentlayer/generated'
import Image from 'next/image'

export async function getStaticProps() {
  const posts: Post[] = allPosts.sort((a, b) => {
    return compareDesc(new Date(a.date), new Date(b.date))
  })
  return { props: { posts } }
}

function PostCard(post: Post) {
  return (
    /* <div className="mb-8">
      <h2 className="text-xl">
        <Link
          href={post.url}
          className="text-blue-700 hover:text-blue-900"
          legacyBehavior>
          {post.title}
        </Link>
      </h2>
      <time dateTime={post.date} className="block text-gray-600 mtb-4">
        {format(parseISO(post.date), 'LLLL d, yyyy')}
      </time>
      <div className="text-sm mt-2" dangerouslySetInnerHTML={{ __html: post.body.html }} />
    </div> */

    <div className='mt-5'>
      <h2 className='text-xl'>
        <Link
          href={post.url}
          className='text-blue-700 hover:text-blue-900'
          legacyBehavior
        >
          {post.title}
        </Link>
      </h2>
      <time dateTime={post.date} className='block text-gray-600 mtb-4'>
        {format(parseISO(post.date), 'LLLL d, yyyy')}
      </time>
        <Image
          src={post.cover!}
          height={100}
          width={200}
          alt='thumbnail'
          className='rounded-lg'
        />
      <p className='text-xl'>{post.description}</p>
    </div>
  )
}

export default function Home({ posts }: { posts: Post[] }) {
  return (
    <div className='max-w-xl mx-auto py-8'>
      <h1 className='text-3xl font-bold mb-8 text-center'>Hi, welcome!</h1>

      {posts.map((post, idx) => (
        <PostCard key={idx} {...post} />
      ))}
    </div>
  )
}
