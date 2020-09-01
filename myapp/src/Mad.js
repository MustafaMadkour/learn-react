import React from 'react';

const Mad = ({ mads }) => {
    const madList = mads.map(mad => {
        return(
            <div className="mad" key={mad.id}>
                <div>Name: {mad.name}</div>
                <div>Age: {mad.age}</div>
                <div>City: {mad.city}</div>
            </div>
        )
    });
    return(
        <div className="mad-list">
            { madList }
        </div>
    )
}

export default Mad;