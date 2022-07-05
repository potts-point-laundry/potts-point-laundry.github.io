import { Container, createStyles, Space, Text, Title } from '@mantine/core';
import React from 'react';

const useStyles = createStyles((theme, params: { bgImgSrc: string }) => ({
  bannerMain: {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(255, 255, 255, 0.4)), url("${params.bgImgSrc}")`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center',
    backgroundSize: 'cover',
    minHeight: '24rem',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },

  title: {
    textShadow: `0 2px 10px #424949`,
    color: theme.colors.gray[0],
    fontWeight: 600,
    textAlign: 'center',
    fontSize: theme.fontSizes.xl * 2,
    '@media (max-width: 520px)': {
      fontSize: 30,
      textAlign: 'left',
    },
  },

  description: {
    textAlign: 'center',
    color: theme.colors.dark[3],

    '@media (max-width: 520px)': {
      textAlign: 'left',
      fontSize: theme.fontSizes.md,
    },
  },
}));

interface BannerProps {
  bgImgSrc: string;
  title: React.ReactNode;
  description?: React.ReactNode;
}

export function Banner({ bgImgSrc, title, description }: BannerProps) {
  const { classes } = useStyles({
    bgImgSrc,
  });

  return (
    <div className={classes.bannerMain}>
      <Container>
        <Title className={classes.title}>{title}</Title>
        <Space h="xs" />
        {description && (
          <Container p={0} size={600}>
            <Text size="lg" color="dimmed" className={classes.description}>
              {description}
            </Text>
          </Container>
        )}
      </Container>
    </div>
  );
}
