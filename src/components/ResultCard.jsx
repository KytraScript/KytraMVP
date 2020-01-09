import React from 'react';

const ResultCard = (props) => {

    return (
        <div className={'result-card'}>
            <div className={'result-info'}>
                <div className={'result-name'}>{props.result}</div>
            </div>
        </div>
    )
};

export default ResultCard;