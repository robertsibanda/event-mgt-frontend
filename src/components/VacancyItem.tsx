import React from "react";

export interface VacancyItemProps {
  "id": number,
  "owner": number,
  "created": string | null,
  "jobTitle": string,
  "jobDescription": string,
  "jobQualifications": string,
  "jobRequirements": string,
  "category": string,
  "expiry": string,
  onClick: () => void; // Include the onClick prop
}


const VacancyItem: React.FC<VacancyItemProps> = 
  ({ owner, created, jobTitle, jobDescription, jobQualifications, jobRequirements, onClick }) => {
  return (
    <div className="event" onClick={onClick} style={{ cursor: "pointer" }}>
      <h3>{owner}</h3>
      <p>{created}</p>
      <p>{jobTitle}</p>
      <p>{jobDescription}</p>
      <p>{jobQualifications}</p>
      <p>{jobRequirements}</p>
    </div>
  );
};

export default VacancyItem;
