import React from 'react'

type EventProps = { title: string, description: string, date: string}

const EventDetails = ({ title, description, date }: EventProps) => {
  return (
    <div>
        <h2>Event Details</h2>
        <p>{title}</p>
        <p>{date}</p>
        <p>{description}</p>
    </div>
  )
}

export default EventDetails