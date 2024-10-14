// import React from 'react';
import './InfiniteCarouselstyle.css';
import SportsBasketballIcon from '@mui/icons-material/SportsBasketball';
import DirectionsRunIcon from '@mui/icons-material/DirectionsRun';
import DiamondIcon from '@mui/icons-material/Diamond';
import CheckroomIcon from '@mui/icons-material/Checkroom';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import AccessibilityNewIcon from '@mui/icons-material/AccessibilityNew';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import StyleIcon from '@mui/icons-material/Style';
import SportsTennisIcon from '@mui/icons-material/SportsTennis';
import SportsFootballIcon from '@mui/icons-material/SportsFootball';
import WatchIcon from '@mui/icons-material/Watch';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import SportsHockeyIcon from '@mui/icons-material/SportsHockey';
import SurfingIcon from '@mui/icons-material/Surfing';
import DryCleaningIcon from '@mui/icons-material/DryCleaning';
import { useEffect,useRef } from 'react';

const InfiniteCarousel = () => {
  const brands = [
    { name: 'Nike', Icon: SportsBasketballIcon, color: '#F1601D' },
    { name: 'Adidas', Icon: DirectionsRunIcon, color: '#000000' },
    { name: 'Gucci', Icon: DiamondIcon, color: '#1B1B1B' },
    { name: 'Zara', Icon: CheckroomIcon, color: '#000000' },
    { name: 'H&M', Icon: LocalMallIcon, color: '#E50010' },
    { name: 'Uniqlo', Icon: AccessibilityNewIcon, color: '#FF0000' },
    { name: 'Levi\'s', Icon: ShoppingBagIcon, color: '#C41230' },
    { name: 'Calvin Klein', Icon: StyleIcon, color: '#000000' },
    { name: 'Ralph Lauren', Icon: SportsTennisIcon, color: '#041E42' },
    { name: 'Prada', Icon: SportsFootballIcon, color: '#000000' },
    { name: 'Versace', Icon: WatchIcon, color: '#FFD700' },
    { name: 'Burberry', Icon: EmojiEventsIcon, color: '#C1A173' },
    { name: 'Tommy Hilfiger', Icon: CameraAltIcon, color: '#00319C' },
    { name: 'Gap', Icon: LocalOfferIcon, color: '#000060' },
    { name: 'Lacoste', Icon: ShoppingCartIcon, color: '#004C3E' },
    { name: 'Under Armour', Icon: FitnessCenterIcon, color: '#000000' },
    { name: 'Balenciaga', Icon: AutoAwesomeIcon, color: '#000000' },
    { name: 'Fendi', Icon: SportsHockeyIcon, color: '#FFC72C' },
    { name: 'Chanel', Icon: SurfingIcon, color: '#000000' },
    { name: 'Dior', Icon: DryCleaningIcon, color: '#000000' },
  ];
  // const duplicatedBrands = [...brands, ...brands, ...brands, ...brands];
  const trackRef = useRef(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const moveTrack = () => {
      if (track.offsetLeft <= -track.offsetWidth / 2) {
        track.style.left = '0px';
      } else {
        track.style.left = `${track.offsetLeft - 1}px`;
      }
      requestAnimationFrame(moveTrack);
    };

    requestAnimationFrame(moveTrack);
  }, []);


  return (
    <div className="carousel-container">
      <div className="carousel-track">
        {[...brands, ...brands].map((brand, index) => (
          <div key={index} className="carousel-item">
            <div className="brand-icon" style={{ color: brand.color }}>
              <brand.Icon style={{ fontSize: 40 }} />
            </div>
            <div className="brand-name">
              {brand.name.split(' ').map((word, i) => (
                <div key={i}>{word}</div>
              ))}
            </div>
          </div>
        ))}
      </div>
      {/* <div className="carousel-trackDiv2">
        {duplicatedBrands.map((brand, index) => (
          <div key={index} className="carousel-item">
            <div className="brand-icon" style={{ color: brand.color }}>
              <brand.Icon style={{ fontSize: 40 }} />
            </div>
            <div className="brand-name">
              {brand.name.split(' ').map((word, i) => (
                <div key={i}>{word}</div>
              ))}
            </div>
          </div>
        ))}
      </div> */}
    </div>
  );
};

export default InfiniteCarousel;