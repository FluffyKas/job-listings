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

const JobCard = ({ job }: JobCardProps) => {
  return (
    <div className="job-card | bg-white flex justify-between rounded-[0.3125rem] py-8 px-10 hover:border-l-custom_green_600 hover:border-l-[0.3125rem] duration-200 ease-out">
      <div className="job-card__job-details | flex gap-6">
        <img src={job.logo} alt="" />
        <div>
          <div className="flex gap-2 items-center">
            <span className="text-lg font-bold text-custom_green_600">{job.company}</span>
            <div className="flex gap-2">
              {job.new && <span className="font-bold bg-custom_green_600 rounded-xl text-white px-2">NEW!</span>}
              {job.featured && <span className="font-bold bg-custom_green_900 rounded-xl text-white px-2">FEATURED</span>}
            </div>
          </div>
          <a href="#" className="text-custom_green_900 hover:text-custom_green_600 duration-200 ease-in font-bold text-[1.375rem]">
            <h2 className="">{job.position}</h2>
          </a>
          <div className="text-custom_grey flex gap-9">
            <span>{job.postedAt}</span>
            <span>{job.contract}</span>
            <span>{job.location}</span>
          </div>
        </div>
      </div>
      <div className="job-card__filters">
        <ul>
          {job.languages.map((language) => (
            <li key={language}>{language}</li>
          ))}
          {job.tools.map((tool) => (
            <li key={tool}>{tool}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default JobCard;
