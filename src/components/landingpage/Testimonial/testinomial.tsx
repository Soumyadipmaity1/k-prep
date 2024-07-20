import React from 'react';
import { FaStar } from 'react-icons/fa';
import Image from 'next/image';
const testimonials = [
  {
    name: 'name',
    review: 'Lorem ipsum dolor sit amet. Hic recusandae similique non culpa nulla ut repellendus.',
    rating: 4,
  },
  {
    name: 'name',
    review: 'Lorem ipsum dolor sit amet. Hic recusandae similique non culpa nulla ut repellendus.',
    rating: 4,
  },
  {
    name: 'name',
    review: 'Lorem ipsum dolor sit amet. Hic recusandae similique non culpa nulla ut repellendus.',
    rating: 4,
  },
  {
    name: 'name',
    review: 'Lorem ipsum dolor sit amet. Hic recusandae similique non culpa nulla ut repellendus.',
    rating: 4,
  },
];

const Testimonials: React.FC = () => {
  return (
    <section className="bg-white py-10 pb-16 px-16">
      <div className="container mx-auto text-center">
        <h2 className="text-5xl font-bold mb-6">What our users say about us?</h2>
        <p className="text-gray-600 mb-12 px-16">
          Lorem ipsum dolor sit amet. Hic recusandae similique non culpa nulla ut repellendus sunt et voluptatem perferendis ex quae quisquam.
          Qui nostrum voluptas qui repudiandae consequatur ut aliquid voluptas qui voluptas rerum.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8  px-16">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-testimonial  p-6 flex items-center shadow-md"
            >
              <div className="bg-gray-300 rounded-full w-40 mr-4">
                <Image src="/k-prep1.png" width={144} height={144} alt="" className='rounded-full w-40' />
              </div>
              <div className="text-left">
                <h3 className="text-xl mb-1  font-bold">{testimonial.name}</h3>
                <p className="text-sm text-black mb-2">{testimonial.review}</p>
                <div className="flex">
                  {Array(5)
                    .fill(0)
                    .map((_, i) => (
                      <FaStar
                        key={i}
                        className={`text-lg ${i < testimonial.rating ? 'text-black' : 'text-gray-300'}`}
                      />
                    ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
