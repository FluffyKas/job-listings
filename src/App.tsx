import JobCard from './components/job-card/JobCard';
import data from './assets/data.json';
import FilterLabel from './components/filter-label/FilterLabel';

function App() {
  const filters: string[] = ['Frontend', 'React', 'Sass'];
  //onclick: add filter to a filter array
  //display filter array, style the labels
  //onclick: remove filter from filter array
  //filter job listings based on filter array

  return (
    <>
      <header className="relative">
        <h1 className="sr-only">Job listings</h1>
        <div className="bg-white relative top-[7.25rem] max-w-container mx-auto flex gap-4 p-6 rounded-[0.3125rem]">
          {filters.map((filter, index) => (
            <FilterLabel text={filter} index={index} hasCancelIcon={true} />
          ))}
        </div>
      </header>
      <main className="bg-custom_green_100">
        <div className="job-card-container | max-w-container mx-auto flex flex-col gap-10 lg:gap-6 py-20 px-6 md:px-0">
          {data.map((job) => (
            <JobCard key={job.id} job={job} />
          ))}
        </div>
      </main>
    </>
  );
}

export default App;
