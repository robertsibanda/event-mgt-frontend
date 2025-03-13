import { VacancyInterface } from './VacancyList'
import "../css/vacancy-details.css"

// show full vacancy details on the right

const VacancyDetails = ({ expiry, organisation, posted, title, description, qualifications, requirements , skills}: VacancyInterface) => {
  return (
    <div className='vacancy-details'>
      <h2>{title}</h2>
      <p>Posted : {new Date(posted).toLocaleDateString()}</p>
      <p>{organisation}</p>
      <p>{description}</p>
      <h4>Minimun Qualifications (*must have*)</h4>
      <p>{qualifications}</p>
      <h4>Other requirements</h4>
      <p>{requirements}</p>
      <div className="skills">
        {skills.map((skill: string, index: number) => (
          <button key={index}>{skill}</button>
        ))}
      </div>
      <div className="apply-buttons">
        <p>Apply before {new Date(expiry).toDateString()}</p>
        <button>Auto Apply</button>
        <button>Manual Apply</button>
      </div>

    </div>
  )
}

export default VacancyDetails;