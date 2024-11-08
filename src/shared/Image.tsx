import React from 'react'
import clsx from 'clsx'

interface ImageProps {
  url: string
}

const Image: React.FC<ImageProps> = ({ url }) => {
  return (
    <>
      <div className="rounded-lg aspect-video overflow-hidden">
        <img
          src={`${url}?w=400&fm=webp`}
          alt="activity preview"
          className="object-cover object-center"
          srcSet={`${url}?w=400&h=200&fm=webp&q=80 400w,
                  ${url}?w=800&h=400&fm=webp&q=80 800w`}
          sizes="(max-width: 400px) 400px,
                 800px"
        />
        {!url && (
          <div className="absolute inset-0 h-full w-full bg-gradient-to-br from-black/75 rounded-lg" />
        )}
      </div>
    </>
  )
}

export default Image
