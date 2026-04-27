import { useEffect, useState } from 'react';
import type { ProjectImage } from '../../types/project';
import ProjectImageView from './ProjectImage';
import styles from './ImageGallery.module.css';

type ImageGalleryProps = {
  images: ProjectImage[];
};

export default function ImageGallery({ images }: ImageGalleryProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  useEffect(() => {
    if (activeIndex === null) {
      return undefined;
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setActiveIndex(null);
      }
    };

    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [activeIndex]);

  return (
    <>
      <div className={styles.grid}>
        {images.map((image, index) => (
          <button
            key={image.src}
            className={styles.card}
            onClick={() => setActiveIndex(index)}
            type="button"
          >
            <ProjectImageView
              alt={image.alt}
              className={styles.image}
              fallbackClassName={`${styles.image} ${styles.imageFallback}`}
              loading="lazy"
              src={image.src}
            />
            {image.caption ? <span className={styles.caption}>{image.caption}</span> : null}
          </button>
        ))}
      </div>

      {activeIndex !== null ? (
        <button className={styles.overlay} onClick={() => setActiveIndex(null)} type="button">
          <ProjectImageView
            alt={images[activeIndex].alt}
            className={styles.overlayImage}
            fallbackClassName={`${styles.overlayImage} ${styles.overlayFallback}`}
            src={images[activeIndex].src}
          />
        </button>
      ) : null}
    </>
  );
}
