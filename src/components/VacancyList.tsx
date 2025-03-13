import { useState, useEffect } from "react";
import VacancyItem from "./VacancyItem";
import VacancyDetails from "./VacancyDetails";
import "../css/vacancy-list.css"
import TopNav from "./TopNav";

export interface VacancyInterface {
    "id": number,
    "organisation": string,
    "posted": string,
    "title": string,
    "description": string,
    "qualifications": Array<string>,
    "requirements": string,
    "skills": any,
    "category": string,
    "expiry": string
}

const vacancies = [
  {
      "id": 1,
      "organisation": "Econet Zw",
      "expiry": "null",
      "category": "",
      "posted": "null",
      "title": "Software Developer",
      "description": "A local company is looking for a gradutae trainee developer",
      "skills": [
          "python",
          "java",
          "Spring boot",
          "django"
      ],
      "qualifications": [
          "Bsc in comp scie/equiv"
      ],
      "requirements": "null"
  },
  {
      "id": 2,
      "organisation": "Econet Zw",
      "expiry": "null",
      "posted": "null",
      "title": "Software Developer",
      "description": "A local company is looking for a gradutae trainee developer",
      "category": "",
      "skills": [
          "python",
          "java",
          "Spring boot",
          "django"
      ],
      "qualifications": [
          "Bsc in comp scie/equiv"
      ],
      "requirements": "null"
  }
]

export default function VacancyList() {
  // State to hold the selected event details
  const [selectedVacancy, setSelectedVacancy] = useState<VacancyInterface | null>(null);

  // State to hold the list of events
  const [vacancy, setVacancies] = useState<VacancyInterface[]>([]);


  useEffect(() => {
    setVacancies(vacancies)
  })
  // Fetch events from the API when the component mounts
  useEffect(() => {
    const fetchVacancies = async () => {
      try {
        const response = await fetch("http://localhost:8080/vacancy/"); // Replace with your API endpoint
        if (!response.ok) {
          console.log(`Error : ${response.body}`)
          throw new Error("Failed to fetch events");
        }
        const data: VacancyInterface[] = await response.json(); // Assume the API returns a list of events
        console.log(data)
        setVacancies(data);
      } catch (error) {
        console.error("Error fetching events:", error);
      }
    };

    fetchVacancies();
  }, []);

  // Function to handle the event click
  const handleEventClick = (vacancy: VacancyInterface) => {
    setSelectedVacancy(vacancy);
  };

  return (
    <>
      <div>
        <TopNav />
        <div className="top-container">
          <div className="vacancy-list">
            {vacancy.length > 0 ? (
              vacancy.map((vaca, index) => (
                <VacancyItem
                  category={vaca.category}
                  key={index}
                  id={vaca.id}
                  expiry={vaca.expiry}
                  posted={vaca.posted}
                  organisation={vaca.organisation}
                  description={vaca.description}
                  title={vaca.title}
                  qualifications={vaca.qualifications}
                  requirements={vaca.requirements}
                  skills={vaca.skills}
                  onClick={() => handleEventClick(vaca)} // Pass the event to the handler
                />
              ))
            ) : (
              <p>Loading events...</p>
            )}
          </div>
          <div className="bottom-section">
            {selectedVacancy ? (
              <VacancyDetails
                id={selectedVacancy.id}
                organisation={selectedVacancy.organisation}
                posted={selectedVacancy.posted}
                description={selectedVacancy.description}
                title={selectedVacancy.title}
                qualifications={selectedVacancy.qualifications}
                requirements={selectedVacancy.requirements}
                category={selectedVacancy.category}
                expiry={selectedVacancy.expiry}
                skills={selectedVacancy.skills}
              />
            ) : (
             "a"
            )}
          </div>
        </div>
      </div>
    </>
  );
}
