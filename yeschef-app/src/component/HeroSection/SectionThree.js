import React from 'react'
import { Box, Container, AppBar, Grid, Typography } from '@mui/material';
import styled from '@emotion/styled';

const BlackCircle = styled(Box)(({ theme }) => ({
    maxWidth: '400px',
    maxHeight: '400px',
    backgroundColor: theme.palette.common.black,
    borderRadius: '50%',
    flex: 1
}))

function SectionThree(props) {
    return (
        <Grid container {...props} display={'flex'} flexDirection={{ xs: 'column', md: 'row' }} justifyContent={{ xs: 'center', md: 'space-between' }}>
            <Grid xs={4} md={6} display={'flex'} justifyContent={'center'}>
                <BlackCircle />
            </Grid>
            <Grid xs={4} md={6} display={'flex'} justifyContent={'center'} alignItems={'center'} px={8}>
                <Box display={'flex'} flexDirection={'column'}>
                    <Typography variant='h1' py={2}>Introduction to Our meal service</Typography>
                    <Typography variant='body1' color={'black'}>We offer a rotating menu of nutritious meals that are free from artificial preservatives, colors, and flavors. Our meals are made with fresh, high-quality ingredients, and we offer vegetarian, and allergen-free options. Our goal is to provide healthy and delicious meals that fuel children for their day ahead. We look forward to serving your family!</Typography>
                </Box>
            </Grid>
        </Grid>
    )
}

export default SectionThree