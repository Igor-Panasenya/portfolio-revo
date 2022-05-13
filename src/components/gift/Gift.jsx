import React, {useState} from 'react';
import './gift.css';
import GiftItem from '../giftItem/GiftItem';
import 'swiper/css';

const Gift = () => {

    const [dots, setDots] = useState(['1', '2', '3'])
    const [activeIndex, setActiveIndex] = useState(0)

    const [giftItems, setGiftItems] = useState([
        {
            id: 1,
            title: 'Giftset "Cà phê phin Việt Nam"',
            price: '285.000',
            body: 'Món quà tuyệt vời dành cho người sành cà phê. Hạt cà phêđược Revo cẩn trọng chọn lựa,' +
                'rang xay theo công nghệ và bí quyết học hỏi từ những nghệ nhân nổitiếng, cùng với tình yêu,' +
                'sự đam mê của người làm cà phê… tạo ra những tách cà phê tinh khiết chỉdành riêng cho bạn.',
            img: '../img/big-coffe-1.png',
            info: '700 - 800m',
        },
        {
            id: 2,
            title: 'Giftset "Cà phê phin Việt Nam"',
            price: '365.000',
            body: 'Món sự đam mê của người làm cà phê… tạo ra những tách càphê tinh khiết chỉ dành riêng cho bạn' +
                'quà tuyệt vời dành cho người sànhcà phê. Hạt cà phê được Revo cẩn trọng chọn lựa, rang xay theo,' +
                'cùng với tình yêu, sự đam mê của người làm cà phê… tạo ra những tách cà phê tinh khiết chỉdành riêng cho bạn.',
            img: '../img/big-coffe-2.png',
            info: '750 - 850m',
        },
        {
            id: 3,
            title: 'Giftset "Cà phê phin Việt Nam"',
            price: '285.000',
            body: 'Món quà tuyệt vsự đam mê của người làm cà ời dành cho người sành cà phê. Hạt cà phê được Revo cẩn trọng chọn lựa,' +
                'rang xay theo công nghệ và bí quyết học hỏi từ những nghệ nhân nổitiếng, cùng với tình yêu, sự đam mê của người làm' +
                'cà phê… tạo ra những o công nghệ và bí quyết học htách cà phê tinh khiết chỉ dành riêng cho bạn.',
            img: '../img/big-coffe-3.png',
            info: '800 - 900m',
        },
    ])

    return (
        <section className="hero-giftset">
            <div className="container">
                <h3>Best Gift For Best Friend</h3>
                <h2>GIFTSET</h2>

                <div className="flex-wrapper-gift">

                        {giftItems.map((giftItem, index) =>

                            <div className={activeIndex === index ? "slide-gift active" : "slide-gift"}>
                                <GiftItem giftItem={giftItem} key={giftItem.id}/>
                            </div>
                        )}


                    <div className="dots-wrapper-gift">
                        {dots.map((dot, index) =>
                                <span
                                    className={activeIndex === index ? "dot-gift active" : "dot-gift"}
                                    onClick={() => setActiveIndex(index)}
                                >
                                    {dot}
                                </span>
                        )}
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Gift;