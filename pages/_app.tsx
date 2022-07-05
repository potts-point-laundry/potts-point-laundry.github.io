import { ColorScheme, MantineProvider } from '@mantine/core';
import { NotificationsProvider } from '@mantine/notifications';
import { getCookie } from 'cookies-next';
import { GetServerSidePropsContext } from 'next';
import { AppProps } from 'next/app';
import Head from 'next/head';
import { Footer } from '../components/Footer/Footer';
import { NavigationHeader } from '../components/NavigationHeader/NavigationHeader';

export default function App(props: AppProps & { colorScheme: ColorScheme }) {
  const { Component, pageProps } = props;

  return (
    <>
      <Head>
        <title>Potts Point Laundry & Dry Cleaning</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
        <link rel="shortcut icon" href="/favicon.svg" />
      </Head>

      <MantineProvider withGlobalStyles withNormalizeCSS>
        <NotificationsProvider>
          <NavigationHeader
            links={[
              { label: 'Home', link: '/' },
              { label: 'Services', link: '/services' },
              { label: 'Find Us', link: '/findus' },
            ]}
          />
          <Component {...pageProps} />
          <Footer
            data={[
              {
                title: 'About',
                links: [
                  { label: 'Home', link: '/' },
                  { label: 'Services', link: '/services' },
                  { label: 'Find Us', link: '/findus' },
                ],
              },
              {
                title: 'Contact',
                links: [{ label: '(02) 9357 3660', link: 'tel:(02) 9357 3660' }],
              },
              {
                title: 'Business Hour',
                links: [
                  {
                    label: 'Weekday: 8am - 9pm',
                    link: '#',
                  },
                  { label: 'Weekend: 8am - 9pm', link: '#' },
                ],
              },
            ]}
          />
        </NotificationsProvider>
      </MantineProvider>
    </>
  );
}

App.getInitialProps = ({ ctx }: { ctx: GetServerSidePropsContext }) => ({
  colorScheme: getCookie('mantine-color-scheme', ctx) || 'light',
});
