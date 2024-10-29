"use client";
import React from 'react'
import {BentoGrid, BentoGridItem} from './ui/BentoGrid'
import {gridItems} from '@/data'
const Grid = () => {
  return (
    <section id="about">
    <BentoGrid>
        
            {gridItems.map(({id, title, description, className, img, imgClassName, titleClassName, spareImg}, i)=>(
                <BentoGridItem
                    id={id}
                    key={id}
                    title={title}
                    description={description} 
                    className={i === 3 || i === 6 ? "md:col-span-2" : ""}
                    img={img}
                    imgClassName={imgClassName}
                    titleClassName={titleClassName}
                    spareImg={spareImg}
                    />
            ))}
       
    </BentoGrid>
     </section>
  )
}

export default Grid
