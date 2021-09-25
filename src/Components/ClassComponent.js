import React from 'react';

export default class ClassComponent extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 0
        }

        this.incrementClickHandler = this.incrementClickHandler.bind(this)
    }

    incrementClickHandler() {
        this.setState({ count : this.state.count + 1})
    }

    render() {
        console.log('Class Component ')
        return <div>
            <h1>Header: {this.props.value}</h1>
            <div>
                { this.state.count }
                <button onClick={this.incrementClickHandler}>Increment</button>
            </div>
        </div>
    }
}
