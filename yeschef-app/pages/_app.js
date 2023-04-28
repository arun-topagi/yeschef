import Head from 'next/head';
import ThemeProvider from 'src/theme/ThemeProvider';
import CssBaseline from '@mui/material/CssBaseline';
import { CacheProvider } from '@emotion/react';
import createEmotionCache from 'src/createEmotionCache';

// mui
import { Container } from '@mui/material';
import Navbar from '/src/component/Navbar'


const clientSideEmotionCache = createEmotionCache();

function TokyoApp(props) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  const getLayout = Component.getLayout ?? ((page) => page);
  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <title>Yes Chef</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
      </Head>
      <ThemeProvider>
        <CssBaseline />
        <Navbar />
        <Container maxWidth="xl">
            {getLayout(<Component {...pageProps} />)}
        </Container>
      </ThemeProvider>
    </CacheProvider>
  );
}

export default TokyoApp;
