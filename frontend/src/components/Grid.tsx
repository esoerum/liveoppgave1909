import Student from "./Student";
import { StudentProps } from "./types";
import { useState } from "react";

type GridProps = {
	studentList: StudentProps[];
};

export default function Grid(props: GridProps) {
	const { studentList } = props;
	//State for å håndtere studentdata
	const [students, setStudents] = useState(props.studentList ?? []);
    
	return (
		<article className="grid">
			{students.map((student) => (
				<Student key={student.id} id={student.id} name={student.name} />
			))}
		</article>
	);
}
