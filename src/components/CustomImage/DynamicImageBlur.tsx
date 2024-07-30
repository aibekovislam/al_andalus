import Image from 'next/image';
import React from 'react';

export default function DynamicImageBlur({ src, alt = 'alt', base64 }: any) {
    if (!src || !base64) {
        return null;
    }

    return (
        <Image
            width={450}
            height={450}
            src={src}
            alt={alt}
            placeholder='blur'
            blurDataURL={base64}
            className='section_two_image'
        />
    );
}