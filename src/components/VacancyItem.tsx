import React from "react";
import "../css/vacancy-item.css"

export interface VacancyItemProps {
  "id": number,
  "organisation": string,
  "posted": string,
  "title": string,
  "description": string,
  "qualifications": Array<string>,
  "requirements": string,
  "category": string,
  "expiry": string,
  "skills": Array<string>,
  onClick: () => void;
}



const VacancyItem: React.FC<VacancyItemProps> = 
  ({ organisation, posted, title, description, qualifications, requirements, expiry, skills, onClick }) => {
  
    return (
    
    <div className="vacancy-item" onClick={onClick} style={{ cursor: "pointer" }}>
      <h3>{title}</h3>
      <p>@{organisation}</p>
      <p>Posted  : {new Date(posted).toLocaleDateString()}</p>
      <p>Apply before {new Date(expiry).toDateString()}</p>
      <p>{description.slice(0,50)}</p>
      <p>{qualifications.slice(0.50)}</p>
      <p>{requirements}</p>
      <div className="skills">
        {skills.map((skill: string, index: number) => (
          <button key={index}>{skill}</button>
        ))}
      </div>
      <div className="apply-buttons apply-buttons-vacancy">
        <p>Apply before {new Date(expiry).toDateString()}</p>
        <button>Auto Apply</button>
        <button>Manual Apply</button>
      </div>

    
    </div>
  );
};

export default VacancyItem;
