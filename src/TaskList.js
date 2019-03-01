import React from 'react';
import "./TaskList.css";

export default class TaskList extends React.Component {

    createTask = (element, index) => {

        return <li key={index}>{element} {index + 1}</li>
    };

    render(){

        const elements = this.props.elements;
        const tasks = elements.map(this.createTask);

        return (
            <ul className='task-list'>
                {tasks}
            </ul>
        )
    }
}
