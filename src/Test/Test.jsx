import React, { useState } from 'react'
import './test.css'
import data from '../assets/data'
import { useEffect } from 'react'
import images from '../assets/images'
export const Test = () => {
    const [people] = useState(data);
    const [index, setIndex] = useState(0)

    const scrollRef = React.useRef(null);

    const scroll = (direction) => {
      const { current } = scrollRef;
  
      if (direction === 'left') {
        section.current.scrollLeft -= 300;
      } else {
        section.current.scrollLeft += 300;
      }
    };

    useEffect(() => {
        const lastIndex = people.length - 1;
        if (index < 0 ) {
            setIndex(lastIndex);
        }
        if (index > lastIndex) {
            setIndex(0)
        }
        }, [index, people]);

        useEffect(()=> {
            let slider = setInterval(() => {
                setIndex(index + 1)
            }, 5000);
            return () => {
                clearInterval(slider)
            }
        }, [index])



  return (
   
    <section className="section"> 
    <div className='title'>
        <h2>TESTIMONIALS</h2>
    </div>
    <div className='row'>

    <div className="section-center">
         
        {people.map((item, indexPeople) => {
            const {id, name, text} = item;
            let position = "nextSlide";
            if(indexPeople === index ) {
                position = "activeSlide"
            }
            if(indexPeople == index - 1 || (index === 0 && indexPeople === people.length - 1)) {
                position = "lastSlide"
            }
        return (
           
                                

            <article className={position} key={id}>
                  <img src={images.stars} onClick={() => scroll('left')} />
                <div className="textt"> <h3><strong>"</strong>{text}<strong>"</strong></h3></div>
             
                <p className='name'>|{name}|</p>

            </article>
            
        )
    })}

    </div>
 
    </div>

    </section>
  )
};;
