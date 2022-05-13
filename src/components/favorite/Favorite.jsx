import './favorite.css';
import FavoriteItem from '../favoriteItem/FavoriteItem';
import {useState} from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";

const Favorite = () => {

    const [favoriteItems, setFavoriteItems] = useState([
        {
            id: '1',
            title: 'REVO Morning',
            body: 'đắng, hậu ngọt, hương hoa',
            img: './img/coffe-1.jpg',
            price: '99.000',
        },
        {
            id: '2',
            title: 'REVO Origin',
            body: 'hậu ngọt, ít đắng, vị chua dâu',
            img: './img/coffe-2.jpg',
            price: '139.000',
        },
        {
            id: '3',
            title: 'REVO Everyday',
            body: 'đắng, hậu ngọt, hương hoa',
            img: './img/coffe-3.jpg',
            price: '85.000',
        },
        {
            id: '4',
            title: 'REVO Đậm Đà',
            body: 'đậm đà, đắng, truyền thống',
            img: './img/coffe-4.jpg',
            price: '75.000',
        },
        {
            id: '5',
            title: 'REVO Morning',
            body: 'đắng, hậu ngọt, hương hoa',
            img: './img/coffe-1.jpg',
            price: '99.000',
        },
        {
            id: '6',
            title: 'REVO Origin',
            body: 'hậu ngọt, ít đắng, vị chua dâu',
            img: './img/coffe-2.jpg',
            price: '139.000',
        },
        {
            id: '7',
            title: 'REVO Everyday',
            body: 'đắng, hậu ngọt, hương hoa',
            img: './img/coffe-3.jpg',
            price: '85.000',
        },
        {
            id: '8',
            title: 'REVO Đậm Đà',
            body: 'đậm đà, đắng, truyền thống',
            img: './img/coffe-4.jpg',
            price: '75.000',
        },
    ])

    const [widthScreen, setWidthScreen] = useState(window.screen.width)
    const getWidthScreen = () => {
        window.addEventListener(`resize`, event => {
            setWidthScreen(window.screen.width)
        }, false);
        console.log(widthScreen)

        return widthScreen
    }
    getWidthScreen()

    return (
        <section className="hero-favorite">
            <div className="container">
                <h3>Choose Your Favorite</h3>
                <h2>CHUẨN GU ĐÚNG VỊ</h2>

                <div className="favorite-content">

                    <Swiper
                        navigation={true}
                        slidesPerView={widthScreen > '800' ? '2' : '1'}
                        modules={[Navigation]}
                        className="mySwiper"
                    >

                            {favoriteItems.map(favoriteItem =>

                                <SwiperSlide>
                                    <FavoriteItem favoriteItem={favoriteItem} key={favoriteItem.id}/>
                                </SwiperSlide>

                            )}

                    </Swiper>

                </div>

            </div>
        </section>
    );
};

export default Favorite;