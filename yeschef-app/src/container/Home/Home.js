import React from 'react';
// mui
import { Container } from '@mui/material';
import HeroSection from 'src/component/Carousel/Infinite'

const OPTIONS = { loop: false, axis: 'x'  };

function Home() {
  return (
    <Container sx={{my: 5}}>
        <HeroSection options={OPTIONS}/>
    </Container>
  );
}

export default Home;
