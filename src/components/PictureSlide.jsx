/* eslint-disable react/prop-types */
import React from 'react';

const PictureSlide = ({ images }) => {
    const [currentImageIndex, setCurrentImageIndex] = React.useState(0);
    const [thumbnailTranslateX, setThumbnailTranslateX] = React.useState(0);
    const [isAnimating, setIsAnimating] = React.useState(false);
    React.useEffect(() => {
        updateThumbnailPosition(currentImageIndex);
    }, [currentImageIndex]);

    const previousSlide = () => {
        if (!isAnimating) {
            setIsAnimating(true);
            setCurrentImageIndex((prevIndex) => {
                const newIndex = prevIndex === 0 ? images.length - 1 : prevIndex - 1;
                setTimeout(() => {
                    setIsAnimating(false);
                }, 300); // เวลาในการเปลี่ยนแปลง 0.3 วินาที
                return newIndex;
            });
        }
    };

    const nextSlide = () => {
        if (!isAnimating) {
            setIsAnimating(true);
            setCurrentImageIndex((prevIndex) => {
                const newIndex = prevIndex === images.length - 1 ? 0 : prevIndex + 1;
                setTimeout(() => {
                    setIsAnimating(false);
                }, 300); // เวลาในการเปลี่ยนแปลง 0.3 วินาที
                return newIndex;
            });
        }
    };

    const updateThumbnailPosition = (index) => {
        const thumbnailContainer = document.getElementById('thumbnail-container');
        const thumbnail = document.getElementById(`thumbnail-${index}`);
        const containerWidth = thumbnailContainer.offsetWidth;
        const thumbnailWidth = thumbnail.offsetWidth;
        const thumbnailOffsetLeft = thumbnail.offsetLeft;
        const thumbnailOffsetRight = thumbnailOffsetLeft + thumbnailWidth;
        const containerCenter = containerWidth / 2;
        const thumbnailCenter = (thumbnailOffsetLeft + thumbnailOffsetRight) / 2;
        const translateX = containerCenter - thumbnailCenter;
        setThumbnailTranslateX(translateX);
    };


    return (
        <div className="slideshow">
            <button className="slideshow-arrow arrow-left" onClick={previousSlide}>
                &#10094;
            </button>
            <img src={images[currentImageIndex]} alt={`Slide ${currentImageIndex + 1}`} />
            <button className="slideshow-arrow arrow-right" onClick={nextSlide}>
                &#10095;
            </button>
            <div className="slideshow-thumbnails" id="thumbnail-container">
                <div
                    className="thumbnails-inner"
                    style={{ transform: `translateX(${thumbnailTranslateX}px)` }}
                >
                    {images.map((image, index) => (
                        <img
                            key={index}
                            src={image}
                            alt={`Thumbnail ${index + 1}`}
                            className={`thumbnail ${index === currentImageIndex ? 'active' : ''} `}
                            id={`thumbnail-${index}`}
                            onClick={() => {
                                setCurrentImageIndex(index);
                                updateThumbnailPosition(index);
                            }}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default PictureSlide;
