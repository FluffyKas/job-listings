interface Job {
  id: number;
  company: string;
  logo: string;
  new: boolean;
  featured: boolean;
  position: string;
  role: string;
  level: string;
  postedAt: string;
  contract: string;
  location: string;
  languages: string[];
  tools: string[];
}


interface JobCardProps {
  job: Job;
}

const JobCard  = ({job}: JobCardProps) => {
  return ( 
    <div className="job-card">
      <div className="job-card__job-details">
        {job.id}
      </div>
      <div className="job-card__filters"></div>
    </div>
   );
}

export default JobCard
