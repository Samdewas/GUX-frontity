import React from 'react'
import LazyLoad from 'react-lazy-load';

export default function Lazyload({height,width,src,className}) {
  return (
    <>
    <LazyLoad height={height} width={width}>
       <img className={className} src={src} />
    </LazyLoad>
    </>
  )
}
