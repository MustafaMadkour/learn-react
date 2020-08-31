import React, { Component } from 'react';

class Mad extends Component {
    render() {

        const { name, age, city } = this.props;
        return(
            <div className="mad">
                <div>Name: {name}</div>
                <div>Age: {age}</div>
                <div>City: {city}</div>
            </div>
        )
    }
}

export default Mad;