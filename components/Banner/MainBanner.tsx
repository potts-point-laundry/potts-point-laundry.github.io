import {
  Button,
  Container,
  createStyles,
  Group,
  Image,
  List,
  Text,
  ThemeIcon,
  Title,
} from '@mantine/core';
import { FaCheck } from 'react-icons/fa';
import MainBannerImage from '../../assets/images/washing.png';

const useStyles = createStyles((theme) => ({
  inner: {
    display: 'flex',
    justifyContent: 'space-between',
    paddingTop: theme.spacing.xl * 2,
    paddingBottom: theme.spacing.xl * 2,
  },

  content: {
    maxWidth: 480,

    [theme.fn.smallerThan('md')]: {
      maxWidth: '100%',
      marginRight: 0,
    },
  },

  title: {
    color: theme.colors.gray[8],
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontSize: 44,
    lineHeight: 1.2,
    fontWeight: 700,

    [theme.fn.smallerThan('xs')]: {
      fontSize: 28,
    },
  },

  control: {
    [theme.fn.smallerThan('xs')]: {
      flex: 1,
    },
  },

  image: {
    flex: 1,
    [theme.fn.smallerThan('md')]: {
      display: 'none',
    },
  },

  highlight: {
    position: 'relative',
    backgroundColor:
      theme.colorScheme === 'dark'
        ? theme.fn.rgba(theme.colors[theme.primaryColor][6], 0.55)
        : theme.colors[theme.primaryColor][0],
    borderRadius: theme.radius.sm,
    padding: '4px 12px',
  },
}));

export default function MainBanner() {
  const { classes } = useStyles();

  return (
    <div>
      <Container>
        <div className={classes.inner}>
          <div className={classes.content}>
            <Title className={classes.title}>Like Laundry</Title>
            <Title className={classes.title}>Like Never Before.</Title>
            <Text color="dimmed" mt="md">
              Over the past decade, we have developed multiple laundry services for both personal
              and commercial. We have learned that excellent service begins and ends with
              experienced and friendly professionals.
            </Text>

            <List
              mt={30}
              spacing="sm"
              size="sm"
              icon={
                <ThemeIcon size={20} radius="xl">
                  <FaCheck size={12} />
                </ThemeIcon>
              }
            >
              <List.Item>
                <b>Professional & Experienced</b> – 10+ years in business and many happy return
                customers.
              </List.Item>
              <List.Item>
                <b>4+ Star Reviews</b> – We do our best to help our customers.
              </List.Item>
              <List.Item>
                <b>Sensitive Skin Washing Powder</b> – Let us know if you need anything.
              </List.Item>
            </List>

            <Group mt={30}>
              <Button size="md" className={classes.control}>
                Our Services
              </Button>
              <Button variant="default" size="md" className={classes.control}>
                Locate Us
              </Button>
            </Group>
          </div>
          <Image src={MainBannerImage.src} className={classes.image} />
        </div>
      </Container>
    </div>
  );
}
