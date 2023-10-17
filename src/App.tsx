import JobCard from './components/job-card/JobCard';
import data from './assets/data.json';

function App() {
  return (
    <>
      <header></header>
      <main className="bg-custom_green_100">
        <div className="job-card-container | max-w-container mx-auto flex flex-col gap-6">
          {data.map((job) => (
            <JobCard key={job.id} job={job} />
          ))}
        </div>
      </main>
    </>
  );
}

export default App;
