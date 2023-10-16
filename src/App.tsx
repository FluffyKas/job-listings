import { JobCard } from "./components/job-card/JobCard"
import data from "./assets/data.json"

function App() {

  return (
    <>
    <header></header>
     <main>
{data.map((job) => (
  <JobCard
    key={job.id} job={job} />
))}
     </main>
    </>
  )
}

export default App
