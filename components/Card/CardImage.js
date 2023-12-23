import Image from "next/image";
import clsx from "clsx";

const ImageSizes = {
    medium: {},
    default: {},
    small: {}
};

export const CardImage = ({ src, className, imageClassName, alt }) => {
    return (
        <div className={`card--image ${className && className}`}>
            <img
                src={src}
                width={300}
                height={120}
                alt={alt}
                objectFit="cover"
                loading="lazy"
                className={`w-28 h-full ${imageClassName && imageClassName}`}
            />
        </div>
    );
};
