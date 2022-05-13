import React from 'react';
import './buildItem.css';

const BuildItem = ({buildItem}) => {
    return (
        <div className="build-item">
            <img src={buildItem.img} />
            <h5>{buildItem.title}</h5>
            <p>{buildItem.body}</p>
        </div>
    );
};

export default BuildItem;