import Image from "next/image";
import clsx from "clsx";
import { Icon } from "@iconify/react";

const ImageSizes = {
    medium: {},
    default: {},
    small: {}
};

export const CardImage = ({ src, className, imageClassName, alt, isImage }) => {
    return (
        <div className={`card--image ${className && className}`}>
            {isImage ? (
                <Image
                    src={src}
                    width={300}
                    height={120}
                    alt={alt}
                    objectFit="cover"
                    loading="lazy"
                    className={`w-28 h-full ${
                        imageClassName && imageClassName
                    }`}
                />
            ) : (
                <Icon
                    icon={src}
                    className={`w-28 h-full ${
                        imageClassName && imageClassName
                    }`}
                />
            )}
        </div>
    );
};
