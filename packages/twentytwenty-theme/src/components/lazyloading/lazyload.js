import React from 'react'
import LazyLoad from 'react-lazy-load';

export default function Lazyload({height,width,src,className,alt}) {
  return (
    <>
    <LazyLoad height={height} width={width}>
       <img  className={className} src={src} alt={alt}/>
    </LazyLoad>
    </>
  )
}
