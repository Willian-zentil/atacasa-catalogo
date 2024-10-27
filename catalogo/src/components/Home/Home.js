import React from 'react';
import Slider from "react-slick";

import './Home.scss'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Container from '../Container/Container';

const products = [
    {
        id: 1,
        name: "Camiseta Star Wars",
        price: 59.99,
        salePrice: 49.99,
        imageUrl: "https://d3pt1seq4txask.cloudfront.net/Custom/Content/Products/28/03/28037_caneca-lamour-vm-300ml-w-7896980499582_s1_638361818642951901.webp"
    },
    {
        id: 2,
        name: "Caneca Game of Thrones",
        price: 29.99,
        salePrice: 24.99,
        imageUrl: "https://d3pt1seq4txask.cloudfront.net/Custom/Content/Products/28/03/28037_caneca-lamour-vm-300ml-w-7896980499582_s1_638361818642951901.webp"
    },
    {
        id: 3,
        name: "Action Figure Homem-Aranha",
        price: 199.99,
        salePrice: 149.99,
        imageUrl: "https://d3pt1seq4txask.cloudfront.net/Custom/Content/Products/28/03/28037_caneca-lamour-vm-300ml-w-7896980499582_s1_638361818642951901.webp"
    },
    {
        id: 4,
        name: "Mousepad Zelda",
        price: 39.99,
        salePrice: 34.99,
        imageUrl: "https://d3pt1seq4txask.cloudfront.net/Custom/Content/Products/28/03/28037_caneca-lamour-vm-300ml-w-7896980499582_s1_638361818642951901.webp"
    },
    {
        id: 5,
        name: "Chaveiro Hogwarts",
        price: 15.99,
        salePrice: 12.99,
        imageUrl: "https://d3pt1seq4txask.cloudfront.net/Custom/Content/Products/28/03/28037_caneca-lamour-vm-300ml-w-7896980499582_s1_638361818642951901.webp"
    },
    {
        id: 6,
        name: "Boné Pokémon",
        price: 49.99,
        salePrice: 39.99,
        imageUrl: "https://d3pt1seq4txask.cloudfront.net/Custom/Content/Products/28/03/28037_caneca-lamour-vm-300ml-w-7896980499582_s1_638361818642951901.webp"
    },
    {
        id: 7,
        name: "Poster Vingadores",
        price: 25.99,
        salePrice: 20.99,
        imageUrl: "https://d3pt1seq4txask.cloudfront.net/Custom/Content/Products/28/03/28037_caneca-lamour-vm-300ml-w-7896980499582_s1_638361818642951901.webp"
    },
    {
        id: 8,
        name: "Caneta Harry Potter",
        price: 12.99,
        salePrice: 10.99,
        imageUrl: "https://d3pt1seq4txask.cloudfront.net/Custom/Content/Products/28/03/28037_caneca-lamour-vm-300ml-w-7896980499582_s1_638361818642951901.webp"
    },
    {
        id: 9,
        name: "Bloco de Notas Mario Bros",
        price: 19.99,
        salePrice: 14.99,
        imageUrl: "https://d3pt1seq4txask.cloudfront.net/Custom/Content/Products/28/03/28037_caneca-lamour-vm-300ml-w-7896980499582_s1_638361818642951901.webp"
    },
    {
        id: 10,
        name: "Relógio Batman",
        price: 99.99,
        salePrice: 79.99,
        imageUrl: "https://d3pt1seq4txask.cloudfront.net/Custom/Content/Products/28/03/28037_caneca-lamour-vm-300ml-w-7896980499582_s1_638361818642951901.webp"
    }
];

function Home() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        responsive: [
            {
                breakpoint: 1400,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 4,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    };

    return (
        <Container>
            <div className='list'>
                <h2>COZINHA</h2>
                <Slider {...settings}>
                    {
                        products.map(e => (
                            <div className='card' key={e.id} id={e.id}>
                                <img src={e.imageUrl} alt={e.name} />
                                <span className='name'>{e.name}</span>
                                <span className='price-old'>R$ {e.price.toFixed(2)}</span>
                                <span className='price-promotion'>R$ {e.salePrice.toFixed(2)}</span>
                            </div>
                        ))
                    }
                </Slider>
            </div>
            <div className='list'>
                <h2>POTES</h2>
                <Slider {...settings}>
                    {
                        products.map(e => (
                            <div className='card' key={e.id} id={e.id}>
                                <img src={e.imageUrl} alt={e.name} />
                                <span className='name'>{e.name}</span>
                                <span className='price-old'>R$ {e.price.toFixed(2)}</span>
                                <span className='price-promotion'>R$ {e.salePrice.toFixed(2)}</span>
                            </div>
                        ))
                    }
                </Slider>
            </div>
            <div className='list'>
                <h2>BRINQUEDOS</h2>
                <Slider {...settings}>
                    {
                        products.map(e => (
                            <div className='card' key={e.id} id={e.id}>
                                <img src={e.imageUrl} alt={e.name} />
                                <span className='name'>{e.name}</span>
                                <span className='price-old'>R$ {e.price.toFixed(2)}</span>
                                <span className='price-promotion'>R$ {e.salePrice.toFixed(2)}</span>
                            </div>
                        ))
                    }
                </Slider>
            </div>
        </Container>
    );
}

export default Home;
