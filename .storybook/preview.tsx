import { MantineProvider } from '@mantine/core';
import { NotificationsProvider } from '@mantine/notifications';
import { useDarkMode } from 'storybook-dark-mode';

export const parameters = { layout: 'fullscreen' };

function ThemeWrapper(props: { children: React.ReactNode }) {
  return (
    <MantineProvider
      theme={{ colorScheme: useDarkMode() ? 'dark' : 'light' }}
      withGlobalStyles
      withNormalizeCSS
    >
      <NotificationsProvider>{props.children}</NotificationsProvider>
    </MantineProvider>
  );
}

export const decorators = [(renderStory: Function) => <ThemeWrapper>{renderStory()}</ThemeWrapper>];
