import Image from 'next/image';
import React from 'react';

export default function DynamicImageBlur({ src, alt = 'alt', base64, className, style, pri }: any) {
    if (!src || !base64) {
        return null;
    }

    return (
        <Image
            width={450}
            height={450}
            src={src}
            alt={alt}
            quality={75}
            placeholder='blur'
            blurDataURL={base64}
            style={style}
            className={className ? className : 'section_two_image'}
            unoptimized
            priority={pri}
        />
    );
}