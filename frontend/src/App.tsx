import Grid from "./components/Grid";
import { StudentProps } from "./components/types";

const students: StudentProps[] = [
  {id: "1", name: "Atle"},
  {id: "2", name: "Per"},
  {id: "3", name: "Lars"},
  {id: "4", name: "Håvard"} 
]

function App() {

  

  return (
    <main>
      <Grid studentList={students} />
    </main>

  );
}

export default App;
