import { useState, useEffect } from "react";
import EventDetails from "./VacancyDetails";
import VacancyItem from "./VacancyItem";
import VacancyDetails from "./VacancyDetails";

export interface Vacancy {
    "id": number,
    "owner": number,
    "created": string | null,
    "jobTitle": string,
    "jobDescription": string,
    "jobQualifications": string,
    "jobRequirements": string,
    "category": string,
    "expiry": string
}

const vacancies = 
[
  {
    "id": 1,
    "owner": 1,
    "created": "2025-01-30T05:00:00.000+00:00",
    "jobTitle": "bookkepper",
    "jobDescription": "desc 1",
    "jobQualifications": "qual 1",
    "jobRequirements": "requirements 1",
    "category": "accounting",
    "expiry": "2025-03-03T05:00:00.000+00:00"
  },
  {
    "id": 2,
    "owner": 2,
    "created": null,
    "jobTitle": "bookkepper",
    "jobDescription": "desc 2",
    "jobQualifications": "qual 2",
    "jobRequirements": "requirements 2",
    "category": "accounting 1",
    "expiry": "2025-03-03T05:00:00.000+00:00"
  },
  {
    "id": 3,
    "owner": 2,
    "created": "2025-02-03T05:00:00.000+00:00",
    "jobTitle": "software developer",
    "jobDescription": "desc 2",
    "jobQualifications": "qual 2",
    "jobRequirements": "requirements 2",
    "category": "accounting 1",
    "expiry": "2025-06-03T04:00:00.000+00:00"
  }
]

export default function VacancyList() {
  // State to hold the selected event details
  const [selectedVacancy, setSelectedVacancy] = useState<Vacancy | null>(null);

  // State to hold the list of events
  const [vacancy, setVacancies] = useState<Vacancy[]>([]);


  useEffect(() => {
    setVacancies(vacancies)
  }, [])

  // Fetch events from the API when the component mounts
  useEffect(() => {
    const fetchVacancies = async () => {
      try {
        const response = await fetch("http://localhost:8080/vacancy"); // Replace with your API endpoint
        if (!response.ok) {
          console.log(`Error : ${response.body}`)
          throw new Error("Failed to fetch events");
        }
        const data: Vacancy[] = await response.json(); // Assume the API returns a list of events
        setVacancies(data);
      } catch (error) {
        console.error("Error fetching events:", error);
      }
    };

    fetchVacancies();
  }, []);

  // Function to handle the event click
  const handleEventClick = (vacancy: Vacancy) => {
    setSelectedVacancy(vacancy);
  };

  return (
    <>
      <div>
        <div className="top-container">
          <div className="events-list">
            {vacancy.length > 0 ? (
              vacancy.map((vaca, index) => (
                <VacancyItem
                  key={index}
                  category={vaca.category}
                  id={vaca.id}
                  expiry={vaca.expiry}
                  created={vaca.created}
                  owner={vaca.owner}
                  jobDescription={vaca.jobDescription}
                  jobTitle={vaca.jobTitle}
                  jobQualifications={vaca.jobQualifications}
                  jobRequirements={vaca.jobRequirements}
                  onClick={() => handleEventClick(vaca)} // Pass the event to the handler
                />
              ))
            ) : (
              <p>Loading events...</p>
            )}
          </div>
          <div className="event-details">
            {selectedVacancy ? (
              <VacancyDetails
                id={selectedVacancy.id}
                owner={selectedVacancy.owner}
                created={selectedVacancy.created}
                jobDescription={selectedVacancy.jobDescription}
                jobTitle={selectedVacancy.jobTitle}
                jobQualifications={selectedVacancy.jobQualifications}
                jobRequirements={selectedVacancy.jobRequirements}
                category={selectedVacancy.category}
                expiry={selectedVacancy.expiry}
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
