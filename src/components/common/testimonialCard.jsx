import React from 'react'

const TestimonialCard = ({review, name, position, rating }) => {
  return (
    <div className="testimonial-item">
      <p style={{ fontSize: 28 }}>{review}</p>
      <h2>{name}</h2>
      <span>{position}</span>
    </div>
  )
}

export default TestimonialCard