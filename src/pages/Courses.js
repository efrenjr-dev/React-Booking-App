import Course from "../components/Course";
import coursesData from "../data/coursesData";

export default function Courses() {
    // console.log(coursesData);

    let coursesArray = coursesData.map(course=>{
            return (<Course key={course.id} courseProp={course} />)
    })

    return (
        <>
            {coursesArray}
        </>
    );
}
