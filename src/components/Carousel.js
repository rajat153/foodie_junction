import React,  { useRef} from 'react'

const Carousel = ({items}) => {
    const carouselRef = useRef(null);

    const scrollLeft = () => {
        if (carouselRef.current) {
          carouselRef.current.scrollBy({ left: -250, behavior: "smooth" });
        }
    };
    
    const scrollRight = () => {
      if (carouselRef.current) {
          carouselRef.current.scrollBy({ left: 250, behavior: "smooth" });
       }
    };

  return (
    <section className='relative w-full px-8'>
        <button className="absolute w-10 h-10 flex items-center justify-center right-6 top-2 -translate-y-1/2 bg-orange-300 text-white px-3 py-2 rounded-full shadow-md" onClick={scrollRight}>▶</button>
        <button
        className="absolute w-10 h-10 flex items-center justify-center right-16 top-2 -translate-y-1/2 bg-orange-300 text-white px-3 py-2 rounded-full shadow-md"
        onClick={scrollLeft}>◀</button>
        <div ref={carouselRef}
        className = 'flex space-x-4 overflow-x-auto scroll-smooth no-scrollbar w-full p-4'
        style={{scrollbarWidth :'none'}}> 
        {
            items.map((item, index)=>{
               return <div key={item.id} className='flex flex-col items-center min-w-[140px]'>
                <img className='mix-blend-multiply object-cover' src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/${item.imageId}`}/>
               </div>
            })
        }
        </div>
    </section>
  )
}

export default Carousel