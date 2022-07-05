import { Text } from '@mantine/core';
import Link from 'next/link';

export default function Logo() {
  return (
    <Link href="/">
      <Text
        component="a"
        align="center"
        variant="gradient"
        gradient={{ from: 'indigo', to: 'cyan', deg: 45 }}
        underline={false}
        sx={(theme) => ({
          fontSize: theme.fontSizes.lg,
          fontWeight: 700,
          fontFamily: 'Greycliff CF, sans-serif',
          display: 'block',
          textAlign: 'left',

          [theme.fn.smallerThan('md')]: {
            fontSize: theme.fontSizes.md,
          },
        })}
        href=""
      >
        Potts Point Laundry & Dry Cleaning
      </Text>
    </Link>
  );
}
