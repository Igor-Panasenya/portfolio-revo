import React from 'react';
import './giftItem.css'
import {GiCoffeeBeans} from "react-icons/gi";
import {FaMountain} from "react-icons/fa";
import 'animate.css';

const GiftItem = ({giftItem}) => {
    return (
            <div className="content-giftset animate__animated animate__fadeInDown">
                <img src={giftItem.img} alt="coffe"/>
                <div className="hero-gifset-info">
                    <div className="giftset-info">
                        <p className="cost">{giftItem.price}</p>
                        <h6>{giftItem.title}</h6>
                        <p className="info">{giftItem.body}</p>
                        <div className="giftset-info-char">
                            <div className="char-item">
                                <GiCoffeeBeans size={25}/>
                                <div className="char-item-info">
                                    Loại hạt<br/>
                                    <span>Fine Robusta Blend</span>
                                </div>
                            </div>
                            <div className="char-item">
                                <FaMountain size={25}/>
                                <div className="char-item-info">
                                    Độ cao<br/>
                                    <span>{giftItem.info}</span>
                                </div>
                            </div>
                        </div>

                        <div className="buttons">
                            <div className="btn-mua">MUA NGAY</div>
                            <div className="btn-chi">CHI TIẾT</div>
                        </div>

                    </div>
                </div>
            </div>
    );
};

export default GiftItem;