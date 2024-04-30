import type { ImageProps } from './ImageProps';

export default function Image({
  mobileImage,
  desktopImage,
  altText,
}: ImageProps) {
  return (
    <picture>
      <source srcSet={desktopImage} media="(min-width: 768px)" />
      <source srcSet={mobileImage} media="(max-width: 768px)" />
      <img className="product-image" src="mobileImage" alt={altText} />
    </picture>
  );
}
