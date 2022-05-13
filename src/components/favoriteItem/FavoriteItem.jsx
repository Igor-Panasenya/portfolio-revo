import React from 'react';
import './favoriteItem.css';

const FavoriteItem = ({favoriteItem}) => {
    return (
        <div className="favorite-card">
            <img src={favoriteItem.img} alt="coffe" />
            <div className="favorit-card-content">
                <p className="favorit-card-price">{favoriteItem.price}</p>
                <h6>{favoriteItem.title}</h6>
                <p className="favorit-card-info">{favoriteItem.body}</p>
                <div className="favorit-card-buttons">
                    <div className="btn-mua">MUA NGAY</div>
                    <div className="btn-chi">CHI TIẾT</div>
                </div>
                </div>
        </div>
    );
};

export default FavoriteItem;