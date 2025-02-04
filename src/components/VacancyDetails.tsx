import React from 'react'
import { Vacancy } from './VacancyList'


const VacancyDetails = ({ owner, created, jobTitle, jobDescription, jobQualifications, jobRequirements }: Vacancy) => {
  return (
    <div>
      <h2>{owner}</h2>
      <p>{created}</p>
      <p>{jobTitle}</p>
      <p>{jobDescription}</p>
      <p>{jobQualifications}</p>
      <p>{jobRequirements}</p>
    </div>
  )
}

export default VacancyDetails