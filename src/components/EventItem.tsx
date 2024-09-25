import React from "react";

interface EventItemProps {
  title: string;
  date: string;
  onClick: () => void; // Include the onClick prop
}

const EventItem: React.FC<EventItemProps> = ({ title, date, onClick }) => {
  return (
    <div className="event" onClick={onClick} style={{ cursor: "pointer" }}>
      <h3>{title}</h3>
      <p>{date}</p>
    </div>
  );
};

export default EventItem;
