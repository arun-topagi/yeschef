import React, { useState, useCallback, useEffect } from 'react';
import PropTypes from 'prop-types'
import useEmblaCarousel from 'embla-carousel-react';
// mui
import { Box } from '@mui/material';
import { makeStyles } from 'tss-react/mui';
import { useTheme } from '@mui/material/styles';
// components
import DotButton from 'src/component/Buttons/DotButton';
import SectionOne from 'src/component/HeroSection/SectionOne';
import SectionTwo from 'src/component/HeroSection/SectionTwo';
import SectionThree from 'src/component/HeroSection/SectionThree';


const useStyles = makeStyles()((theme) => ({
  embla: {
    overflow: 'hidden'
  },
  embla__container: {
    display: 'flex'
  },
  embla__slide: {
    flex: '0 0 100%',
    minWidth: 0
  },
  embla__dots: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center'
  }
}));

const Carousel = ({ options }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel(options, []);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState([]);
  const { classes } = useStyles();
  const theme = useTheme()
  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi, setSelectedIndex]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    setScrollSnaps(emblaApi.scrollSnapList());
    emblaApi.on('select', onSelect);
    emblaApi.on('reInit', onSelect);
  }, [emblaApi, selectedIndex]);

  return (
    <Box display={'flex'} flexDirection={'row'}>
      <Box display={'flex'} flexDirection={'column'} justifyContent={'center'} alignItems={'center'} px={8}>
        <Box component={'div'} sx={{
          width: '3px',
          height: '100px',
          borderRadius: '4px',
          backgroundColor: theme.palette.primary.main,
          my: 1,
        }} />
        {scrollSnaps.map((_, index) => (
          <DotButton
            key={index}
            selected={index === selectedIndex}
          />
        ))}
      </Box>
      <Box sx={{my: 10}} className={classes.embla} ref={emblaRef}>
          <Box className={classes.embla__container}>
            <SectionOne className={classes.embla__slide} />
            <SectionTwo className={classes.embla__slide} />
            <SectionThree className={classes.embla__slide} />
          </Box>
        </Box>
    </Box>
  );
};

Carousel.prototype = {
  slides: PropTypes.array.isRequired,
  options: PropTypes.object.isRequired
}

export default Carousel;
