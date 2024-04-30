import './App.css';
import './components/PreviewCard.tsx';
import PreviewCard from './components/PreviewCard.tsx';
import { ImageProps } from './components/PreviewCard/ImageProps.tsx';

const imageProps: ImageProps = {
  desktopImage: '/images/image-product-desktop.jpg',
  mobileImage: '/images/image-product-mobile.jpg',
  altText: 'Chanel Gabrielle Essence Eau De Parfum A floral',
};

function App() {
  return (
    <main>
      <PreviewCard {...imageProps} />
    </main>
  );
}

export default App;
