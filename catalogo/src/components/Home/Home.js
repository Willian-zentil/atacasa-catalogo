import React, { useState, useEffect } from 'react';
import Slider from "react-slick";
import Header from '../Header/Header';

import imageTeste from '../../assets/product-teste.webp';

import './Home.scss';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Container from '../Container/Container';

function Home() {
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [visibleProducts, setVisibleProducts] = useState([]); // Novo estado para controlar os produtos visíveis
    const [searchQuery, setSearchQuery] = useState('');
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const productsPerPage = 4;

    const handleSearch = (query) => {
        let updatedFilteredProducts;
        
        if (query === '') {
            updatedFilteredProducts = products;
        } else {
            updatedFilteredProducts = products.filter((product) =>
                product.name.toLowerCase().includes(query.toLowerCase())
            );
        }
    
        setFilteredProducts(updatedFilteredProducts);
        setCurrentPage(1);
        setVisibleProducts(updatedFilteredProducts.slice(0, productsPerPage));
    };
    

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch('https://atacasa.corpsuite.com.br/web_api/products');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                const formattedProducts = data.Products.map(product => product.Product);
                setProducts(formattedProducts);
                setFilteredProducts(formattedProducts);
                setVisibleProducts(formattedProducts.slice(0, productsPerPage)); // Carrega produtos iniciais
            } catch (error) {
                console.error('Erro ao buscar produtos:', error);
                setError('Erro ao buscar produtos, tente novamente mais tarde.');
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();
    }, []);

    const handleLoadMore = () => {
        const nextPage = currentPage + 1;
        const newVisibleProducts = filteredProducts.slice(0, nextPage * productsPerPage);
        setVisibleProducts(newVisibleProducts);
        setCurrentPage(nextPage);
    };

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

    if (loading) {
        return <div>Carregando...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <>
            <Header onSearch={handleSearch} />
            <Container>
                <div className='list'>
                    <h2>Produtos</h2>
                    <div className='container-products'>
                        {visibleProducts.length > 0 ? (
                            visibleProducts.map((product) => (
                                <div className='card' key={product.id}>
                                    {product.ProductImage && product.ProductImage.length > 0 ? (
                                        <img src={product.ProductImage[0]?.http || 'default_image.jpg'} alt={product.name} />
                                    ) : (
                                        <img src={imageTeste} alt={product.name} />
                                    )}
                                    <span className='name'>{product.name}</span>
                                    <div className='price-container'>
                                        {product.promotional_price > 0 ? (
                                            <>
                                                <span className="price-old">{product.price}</span>
                                                <span className="price-promotion">{product.promotional_price}</span>
                                            </>
                                        ) : (
                                            <span className="price-promotion space-price-old">{product.price}</span>
                                        )}
                                    </div>
                                    <a href={product.url?.https} target='_blank' rel='noopener noreferrer'>Fazer Pedido</a>
                                </div>
                            ))
                        ) : (
                            <div>Nenhum produto disponível.</div>
                        )}
                        {filteredProducts.length > visibleProducts.length && (
                            <button className='btn-see-more' onClick={handleLoadMore}>Ver Mais</button>
                        )}
                    </div>
                </div>
            </Container>
        </>
    );
}

export default Home;
