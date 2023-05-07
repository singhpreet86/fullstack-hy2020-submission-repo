import React from "react";

const Header = (props) => {
    console.log(props)
    return (
        <div>
            <h1> {props.course} </h1>
        </div>
    )
}

const Content = (props) => {
    return (
        <div>
            <Part part={props.parts[0].part1} exercise={props.parts[0].exercises1}/>
            <Part part={props.parts[1].part2} exercise={props.parts[1].exercises2} />
            <Part part={props.parts[2].part3} exercise={props.parts[2].exercises3} />
        </div>
    )
}

const Total = (props) => {
    return (
        <div>
            <p>
                Number of exercises { props.parts[0].exercises1 + props.parts[1].exercises2 + props.parts[2].exercises3 }
            </p>
        </div>
    )
}

const Part = (props) => {
    return (
        <div>
            <p>
                { props.part } { props.exercise }
            </p>
        </div>
    )
}



const App = () => {
    const course = 'Half Stack application development'
    const parts = [
        {
            part1: 'Fundamentals of React',
            exercises1: 10
        },
        {
            part2: 'Using props to pass data',
            exercises2: 7
        },
        {
            part3: 'State of a component',
            exercises3: 14
        }
    ]

    return (
        <div>
            <Header course={course} />
            <Content parts={parts} />
            <Total parts={parts} />
        </div>
)
}

export default App