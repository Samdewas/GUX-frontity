import React from 'react'
import LazyLoad from 'react-lazy-load';

export default function Lazyload({height,width,src,className,alt}) {
  return (
    <>
    {/* <LazyLoad> */}
       <img  height={height} width={width} className={className} src={src} alt={alt}/>
    {/* </LazyLoad> */}
    </>
  )
}
