import React from "react";

const total = (course) => {
    return (
        course.parts.reduce((a,v) => a = a + v.exercises , 0  )
    )
}

const Course = (props) => {
    return (
        <div>
            {props.courses.map((course) => (
                <div key={course.id}>
                    <h2>{course.name}</h2>
                    {course.parts.map((part) => (
                        <li key={part.id}>{part.name} {part.exercises}</li>
                    ))}
                    <h4> total of { total (course)} exercises </h4>
                </div>
            ))}
        </div>
    )
}

export default Course