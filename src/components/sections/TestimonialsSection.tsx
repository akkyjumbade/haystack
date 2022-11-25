// @ts-nocheck
/* eslint-disable @next/next/no-img-element */
import Section from "../atoms/Section";
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import "swiper/css/navigation";
import { Navigation } from "swiper";

interface ITestimonialsSection {
   title: string,
   items: any[],
}

export default function TestimonialsSection(props: ITestimonialsSection) {
   return (
      <Section className="bg-gray-100 py-0">
         <Section.Container className="container mx-auto py-16">
            <h3 className="section-heading ">
               {props.title}
            </h3>
            <div className="__">
                  <Swiper
                     className="testimonials-carousel"
                     spaceBetween={50}
                     navigation={true}
                     modules={[Navigation]}
                     breakpoints={{
                        300: {
                           slidesPerView: 1,
                           spaceBetween: 20,
                        },
                        768: {
                           slidesPerView: 2,
                           spaceBetween: 40,
                        },
                        1024: {
                           slidesPerView: 3,
                           spaceBetween: 60,
                        },
                     }}
                     onSlideChange={() => console.log('slide change')}
                     onSwiper={(swiper: any) => console.log(swiper)}
                  >
                     {props.items?.map((slide, slideIndex) => (
                        <SwiperSlide key={`slide_${slideIndex}`} className="flex gap-3 items-start">
                           <div className="flex items-center justify-center">
                              <img src={slide.avatar_url} layout='contain' className="w-16 h-16 rounded-full object-cover" alt={slide.author.name} />
                           </div>
                           <div className="flex-1">
                              <p className="text-blue-600 font-bold">{slide.author.name}</p>
                              <p className="text-sm ">{slide.author.bio}</p>
                              <article>
                                 {`"`}{slide.message}{`"`}
                              </article>
                           </div>
                        </SwiperSlide>
                     ))}
                  </Swiper>
               </div>
         </Section.Container>
      </Section>
   )
}
