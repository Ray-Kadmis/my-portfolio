import React from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import AutoScroll from 'embla-carousel-auto-scroll'
import TestCard from './testCard' 

export function EmblaCarousel() {
  // Sample testimonials data
  const baseTestimonials = [
    {
    name: "Steven Parker",
    role: "Owner, Parker's Plumbing Services",
    content: "Excellent work on our service scheduling app! Emergency call response time has improved dramatically and customers can now track technician arrival times.",
    avatar: "/images/ma1.jpeg"
  },
  {
    name: "Carlos Rivera",
    role: "Owner, Rivera's Landscaping",
    content: "Professional team with great attention to detail. The project management system helps us coordinate crews and has increased our job completion efficiency by 35%.",
    avatar: "/images/ma2.jpeg"
  },
  {
    name: "Brandon Lee",
    role: "Manager, QuickStop Convenience Store",
    content: "Reliable and cost-effective solution. The point-of-sale system integration with inventory tracking has eliminated stockouts and improved our profit margins.",
    avatar: "/images/ma3.jpeg"
  },
  
  {
    name: "Thomas Anderson",
    role: "Mechanic, Anderson Motorcycle Repair",
    content: "They delivered exactly what we needed for parts ordering and customer notifications. The system has streamlined our workflow and improved customer satisfaction.",
    avatar: "/images/ma4.jpeg"
  },
  
  {
    name: "Gregory Taylor",
    role: "Manager, Taylor Insurance Agency",
    content: "Fast implementation and excellent ongoing support. The client management system has improved our policy renewal rates and claim processing efficiency.",
    avatar: "/images/ma5.jpeg"
  },
  {
    name: "Vanessa Clark",
    role: "Owner, Clark's Catering Company",
    content: "From initial consultation to final delivery, they exceeded expectations. The event planning platform has helped us manage larger events and expand our client base.",
    avatar: "/images/fe1 (6).jpeg"
  },
  {
    name: "Ryan Mitchell",
    role: "Owner, Mitchell's HVAC Solutions",
    content: "Incredible technical expertise in building our service dispatch system. We can now handle 50% more service calls efficiently and customers love the real-time updates.",
    avatar: "/images/ma6.jpeg"
  }
  ]
const baseTestimonials2 = [
  {
    name: "Marcus Thompson",
    role: "Owner, Thompson's Family Furniture",
    content: "Incredible work on our website redesign! Our online sales have increased by 40% since launch. The team understood our family business values perfectly.",
    avatar: "/images/ma7.jpeg"
  },
  {
    name: "Dr. Sarah Chen",
    role: "Dentist, Riverside Dental Clinic",
    content: "Professional and efficient service. The patient portal system they built has streamlined our appointments and improved patient satisfaction significantly.",
    avatar: "/images/fe1 (5).jpeg"
  },
  {
    name: "Tony Rodriguez",
    role: "Head Chef, Casa Bella Italian Restaurant",
    content: "Outstanding development skills! Our new online ordering system works flawlessly during peak hours. Highly recommend for restaurant tech solutions.",
    avatar: "/images/ma8.jpeg"
  },
  {
    name: "Jennifer Walsh",
    role: "Manager, Sunshine Pet Grooming",
    content: "The booking system they created has transformed our business. Customers love the easy scheduling and we've reduced no-shows by 60%.",
    avatar: "/images/fe1 (4).jpeg"
  },
  
  {
    name: "Lisa Martinez",
    role: "Pharmacist, Main Street Pharmacy",
    content: "Exceptional attention to detail and security. The prescription tracking system they built ensures compliance and has made our workflow much more efficient.",
    avatar: "/images/fe1 (3).jpeg"
  },
  {
    name: "David Kim",
    role: "Owner, Elite Fitness Gym",
    content: "From concept to launch, they delivered exactly what we needed. The membership management app has increased our retention rate and member engagement.",
    avatar: "/images/ma10.jpeg"
  },
  {
    name: "Rachel Green",
    role: "Stylist, Bloom Hair Salon",
    content: "Creative solutions and beautiful design! Our appointment booking website reflects our salon's aesthetic perfectly and has attracted many new clients.",
    avatar: "/images/fe1 (2).jpeg"
  },
  {
    name: "James Wilson",
    role: "Manager, Wilson Hardware Store",
    content: "Fast delivery and excellent ongoing support. The inventory management system has saved us countless hours and reduced ordering errors significantly.",
    avatar: "/images/ma12.jpeg"
  },
  {
    name: "Maria Gonzalez",
    role: "Owner, Sweet Dreams Bakery",
    content: "They understood our vision perfectly and brought our online bakery to life. Custom cake orders through the website have doubled our special occasion business.",
    avatar: "/images/fe1 (1).jpeg"
  },
  {
    name: "Robert Johnson",
    role: "Optometrist, Clear Vision Eye Care",
    content: "Professional service with great communication throughout. The patient records system integrates seamlessly with our existing equipment and insurance billing.",
    avatar: "/images/ma13.jpeg"
  }
  
];
  // Duplicate testimonials for smooth infinite scrolling
  const testimonials = [...baseTestimonials2, ...baseTestimonials, ...baseTestimonials2, ...baseTestimonials]

  // First carousel (right to left)
  const [emblaRef] = useEmblaCarousel(
    { 
      loop: true,
      align: 'start',
      skipSnaps: false,
      dragFree: true
    }, 
    [
      AutoScroll({ 
        speed: 1,                    // Slow continuous scroll
        startDelay: 1000,           // Start after 1 second
        stopOnInteraction: false,   // Don't stop on user interaction
        stopOnMouseEnter: true,     // Pause on hover
        playOnInit: true           // Start playing immediately
      })
    ]
  )

  // Second carousel (left to right)
  const [emblaRef2] = useEmblaCarousel(
    { 
      loop: true,
      align: 'start',
      skipSnaps: false,
      dragFree: true
    }, 
    [
      AutoScroll({ 
        speed: 1,                    // Same speed but opposite direction
        startDelay: 1500,           // Start slightly later
        stopOnInteraction: false,   // Don't stop on user interaction
        stopOnMouseEnter: true,     // Pause on hover
        playOnInit: true,          // Start playing immediately
        direction: 'backward'       // This makes it go left to right
      })
    ]
  )

  return (
    <div className="testimonials-container">
      {/* First carousel - right to left */}
      <div className="embla" style={{ marginBottom: '2rem' }}>
        <div className="embla__viewport" ref={emblaRef}>
          <div className="embla__container">
            {testimonials.map((testimonial, index) => (
              <div className="embla__slide" key={index}>
               <TestCard
                name={testimonial.name}
    role={testimonial.role}
    content={testimonial.content}
    avatar={testimonial.avatar}
    rating={testimonial.rating || 5}
    newClass="your-custom-class"/>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Second carousel - left to right */}
      <div className="embla">
        <div className="embla__viewport" ref={emblaRef2}>
          <div className="embla__container">
            {testimonials.map((testimonial, index) => (
              <div className="embla__slide" key={`second-${index}`}>
                               <TestCard
                name={testimonial.name}
    role={testimonial.role}
    content={testimonial.content}
    avatar={testimonial.avatar}
    rating={testimonial.rating || 5}
    newClass="your-custom-class"/>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
