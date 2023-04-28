import React from 'react';

// mui
import { Box, Container, AppBar, Grid } from '@mui/material';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import logo from '../../svg/yeschef-logo.svg'
import { useTheme } from '@mui/material/styles';

const PAGES = ['meals', 'snacks', 'comunity', 'our experts']
function Navbar() {
    const theme = useTheme()
    return (
        <AppBar position="static" color='white' sx={{ py: 1, px: {xs: 5, md: 10}, boxShadow: `0 .5px 6px ${theme.palette.text.secondary}`,  }}>
            <Container maxWidth="xl">
                {/* mobile */}
                <Box sx={{lexGrow: 1, display: { xs: 'flex', md: 'none' }, justifyContent: 'space-between', alignItems: 'center' }}>
                    <Box component="img" src={logo} width={'35px'} height={'45px'}/>
                    <MenuIcon fontSize='large' />
                </Box>
                {/* non-mobile */}
                <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                    <Grid container>
                        <Grid item md={3} display={'flex'} alignItems={'center'}>
                            <MenuIcon fontSize='large' />
                        </Grid>
                        <Grid item md={6} display={'flex'} flexDirection={'row'} justifyContent={'space-between'} alignItems={'center'}>
                            {PAGES.map((page) => {
                                return <Typography variant='h5' key={page} sx={{ textTransform: 'capitalize' }}>{page}</Typography>
                            })}
                        </Grid>
                        <Grid item md={3} display='flex' justifyContent={'flex-end'}>
                        <Box component="img" src={logo} />
                        </Grid>
                    </Grid>
                </Box>
            </Container>
        </AppBar>
    );
}


export default Navbar;
