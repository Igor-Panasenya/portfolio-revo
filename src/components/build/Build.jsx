import React from 'react';
import './build.css';
import { useState } from 'react';
import BuildItem from "../buildItem/BuildItem";

const Build = () => {

    const [buildItems, setBuildItems] = useState([
        {
            id: '1',
            title: 'Nguồn gốc',
            body: 'Những hạt cà phê Arabica, Robusta đạt chất lượng theo tiêu chuẩn quốc tế.',
            img: './img/icon-base-1.png',
        },
        {
            id: '2',
            title: 'Chất lượng',
            body: 'Từng một hạt cà phê là cả một quá trình tập trung cao độ của nghệ nhân cà phê.',
            img: './img/icon-base-2.png',
        },
        {
            id: '3',
            title: 'Các loại hạt',
            body: '70% chất lượng tách cà phê đến từ nguồn gốc và chất lượng green bean.',
            img: './img/icon-base-3.png',
        },
        {
            id: '4',
            title: 'Pha chế',
            body: 'Những hạt cà phê được lột xác qua quá trình rang xay kỹ lưỡng và nghiêm ngặt.',
            img: './img/icon-base-4.png',
        },
    ])

    return (
        <section className="hero-build">
            <div className="container">
                <h3>Your Personalized Coffee</h3>
                <h2>COFFEE BUILD YOUR BASE</h2>
                <div className="build-content">

                    {buildItems.map(buildItem =>
                        <BuildItem buildItem={buildItem} key={buildItem.id} />
                    )}

                </div>
            </div>

        </section>
    );
};

export default Build;