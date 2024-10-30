import React, { useEffect, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const ProductItem = ({ product }) => {
  const priceRef = useRef(null);

  // Efeito de pulsação suave e espaçado no tempo
  useEffect(() => {
    const priceElement = priceRef.current;
    if (priceElement) {
      const interval = setInterval(() => {
        priceElement.style.transition = "transform 0.8s ease-in-out"; // Transição mais longa e suave
        priceElement.style.transform = "scale(1.15)"; // Pequeno aumento para não ser agressivo
        setTimeout(() => {
          priceElement.style.transform = "scale(1.5)";
        }, 500); // O tempo para voltar ao tamanho original
      }, 5000); // Intervalo de 5 segundos para evitar cansaço visual

      // Limpar o intervalo ao desmontar o componente
      return () => clearInterval(interval);
    }
  }, []);

  // Configurações do carrossel
  const settings = {
    dots: true, // Mostrar indicadores
    infinite: true, // Loop infinito
    speed: 500, // Velocidade de transição
    slidesToShow: 1, // Quantidade de slides exibidos por vez
    slidesToScroll: 1, // Número de slides a cada scroll
    autoplay: true, // Ativa rotação automática
    autoplaySpeed: 3000, // Velocidade da rotação automática
  };

  return (
    <div className="card">
      <div className="card-image">
        {/* Carrossel de imagens */}
        <Slider {...settings}>
          {product.media.map((mediaItem, index) => (
            <div key={index}>
              {mediaItem.type === "image" ? (
                <figure className="image is-square">
                  <img
                    src={mediaItem.url}
                    alt={product.name}
                    style={{ width: "100%", height: "auto" }}
                  />
                </figure>
              ) : (
                <video
                  controls
                  style={{ width: "100%", height: "auto" }}
                  src={mediaItem.url}
                >
                  Seu navegador não suporta vídeos HTML5.
                </video>
              )}
            </div>
          ))}
        </Slider>
      </div>
      <div className="card-content has-text-centered has-background-grey-lighter">
        <div className="media">
          <div className="media-content">
            <p className="title is-5 has-text-dark">{product.name}</p>
            <div style={{ marginBottom: "20px" }}></div>
            <p
              ref={priceRef}
              className="subtitle is-4 has-text-weight-bold has-text-primary-dark"
            >
              {product.price}
            </p>
          </div>
        </div>
        <div className="content">
          <button className="button is-primary is-fullwidth is-medium ">
            Adicionar ao carrinho
          </button>
        </div>
      </div>
    </div>
  );
};

