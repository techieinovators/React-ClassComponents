import React from 'react';
import ClassComponent from '../Components/ClassComponent';

export default function App() {
    const greetings = 'Hello Lifecycle Class component'
    return <div>
        App component
        <ClassComponent value={greetings} />
    </div>
}
