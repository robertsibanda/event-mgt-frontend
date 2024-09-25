import { useState, useEffect } from "react";
import EventDetails from "./EventDetails";
import EventItem from "./EventItem";

interface Event {
  date: string;
  title: string;
  description: string;
}

export default function EventList() {
  // State to hold the selected event details
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);

  // State to hold the list of events
  const [events, setEvents] = useState<Event[]>([]);

  // Fetch events from the API when the component mounts
  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await fetch("http://localhost:8000/events/"); // Replace with your API endpoint
        if (!response.ok) {
          throw new Error("Failed to fetch events");
        }
        const data: Event[] = await response.json(); // Assume the API returns a list of events
        setEvents(data);
      } catch (error) {
        console.error("Error fetching events:", error);
      }
    };

    fetchEvents();
  }, []);

  // Function to handle the event click
  const handleEventClick = (event: Event) => {
    setSelectedEvent(event);
  };

  return (
    <>
      <div>
        <div className="top-container">
          <div className="events-list">
            {events.length > 0 ? (
              events.map((ev, index) => (
                <EventItem
                  key={index}
                  title={ev.title}
                  date={ev.date}
                  onClick={() => handleEventClick(ev)} // Pass the event to the handler
                />
              ))
            ) : (
              <p>Loading events...</p>
            )}
          </div>
          <div className="event-details">
            {selectedEvent ? (
              <EventDetails
                title={selectedEvent.title}
                date={selectedEvent.date}
                description={selectedEvent.description}
              />
            ) : (
              <p>Select an event to see the details.</p>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
