import AddStudentForm from "./AddStudentForm";
import Student from "./Student";
import { StudentProps } from "./types";
import { useState } from "react";

type GridProps = {
	studentList: StudentProps[];
};

export default function Grid(props: GridProps) {
	const { studentList } = props;
	//State for å håndtere studentdata
	const [students, setStudents] = useState<StudentProps[]>(props.studentList ?? []);

	const onAddStudent = (student: Pick<StudentProps, "name">) => {
		setStudents((prev) => [...prev, { id: crypto.randomUUID(), name: student.name }]);
	}
    
	return (
		<section>
		<article className="grid">
			{students.map((student) => (
				<Student key={student.id} id={student.id} name={student.name} />
			))}
		</article>
		<AddStudentForm onAddStudent={onAddStudent}/>
		</section>
	);
}
