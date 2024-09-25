import React, { useState } from 'react';

// Define the shape of the event data
interface EventData {
  title: string;
  date: string;
  description: string;
}

const EventCreate: React.FC = () => {
  // State to hold form values
  const [title, setTitle] = useState<string>('');
  const [date, setDate] = useState<string>('');
  const [description, setDescription] = useState<string>('');

  // Function to handle form submission
  const handleSubmit = async () => {
    // Create an object with the form data
    const eventData: EventData = {
      title,
      date,
      description,
    };

    try {
      // Send POST request to the API
      const response = await fetch('http://localhost:8000/events/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(eventData),
      });

      if (response.ok) {
        // Handle successful response
        console.log('Event created successfully');
      } else {
        // Handle errors
        console.error('Failed to create event');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="event-create">
      <h2>Create New Event</h2>
      <p>Title:</p>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <p>Date</p>
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />
      <p>Description</p>
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      ></textarea>
      <button onClick={handleSubmit}>Create Event</button>
    </div>
  );
};

export default EventCreate;
