import FilterLabel from '../filter-label/FilterLabel';

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
    <div
      className={`job-card ${
        job.featured ? 'border-l-custom_green_600 border-l-[0.3125rem]' : ''
      } bg-white sm:flex justify-between items-center rounded-[0.3125rem] py-8 px-10 sm:flex-col lg:flex-row relative`}
    >
      <div className="job-card__job-details | flex gap-6">
        <img src={job.logo} alt={job.company} className="absolute -top-6 w-12 h-12 md:static md:w-[5.5rem] md:h-[5.5rem]" />
        <div>
          <div className="flex gap-2 items-center">
            <span className="text-[0.8125rem] md:text-lg font-bold text-custom_green_600">{job.company}</span>
            <div className="flex gap-2">
              {job.new && <span className="font-bold bg-custom_green_600 rounded-xl text-white px-2">NEW!</span>}
              {job.featured && <span className="font-bold bg-custom_green_900 rounded-xl text-white px-2">FEATURED</span>}
            </div>
          </div>
          <a href="#" className="text-custom_green_900 hover:text-custom_green_600 duration-200 ease-in font-bold text-[1.375rem]">
            <h2 className="text-[0.9375rem] md:text-[1.375rem] leading-6 py-2">{job.position}</h2>
          </a>
          <div className="text-custom_grey_300 flex gap-9 pb-4">
            <span className="has-separator relative">{job.postedAt}</span>
            <span className="has-separator relative">{job.contract}</span>
            <span>{job.location}</span>
          </div>
        </div>
      </div>
      <div className="job-card__filters | border-t-custom_grey_100 border-t-[1px] pt-4 md:border-none">
        <ul className="flex gap-4 flex-wrap">
          <li>
            <FilterLabel text={job.role} hasCancelIcon={false} />
          </li>
          <li>
            <FilterLabel text={job.level} hasCancelIcon={false} />
          </li>
          {job.languages.map((language, index) => (
            <li key={index}>
              <FilterLabel text={language} hasCancelIcon={false} />
            </li>
          ))}
          {job.tools.map((tool, index) => (
            <li key={index}>
              <FilterLabel text={tool} hasCancelIcon={false} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default JobCard;
