import { Banner } from '../components/Banner/Banner';
import PricingBannerImg from '../assets/images/service-banner.jpg';
import { Container, createStyles, Group } from '@mantine/core';
import ServiceSection from '../components/ServiceSetion/ServiceSection';
import WashIcon from '../assets/icons/wash-icon.png';
import PressIcon from '../assets/icons/press-icon.png';
import DryCleanIcon from '../assets/icons/dry-cleaning-icon.png';

const useStyles = createStyles((theme) => ({
  wrapper: {
    paddingBlock: theme.spacing.xl * 2,
  },
}));

export default function ServicesPage() {
  const { classes } = useStyles();

  return (
    <>
      <Banner title="Service Pricing" bgImgSrc={PricingBannerImg.src} />
      <Container className={classes.wrapper}>
        <Group direction="column" spacing="xl">
          <ServiceSection
            iconSrc={WashIcon.src}
            title="Laundry"
            data={[
              { serviceName: 'Self-serve wash', servicePrice: 'Range from $4 - $6' },
              { serviceName: 'Self-serve dry', servicePrice: 'Starts from $1' },
              {
                serviceName: 'Staff-serve laundry',
                serviceSubName: 'Including wash, dry and fold.',
                servicePrice: 'Starts from $12',
              },
            ]}
          />
          <ServiceSection
            iconSrc={PressIcon.src}
            title="Pressing"
            data={[
              { serviceName: 'Self-serve wash', servicePrice: 'Range from $4 - $6' },
              { serviceName: 'Self-serve dry', servicePrice: 'Starts from $1' },
              {
                serviceName: 'Staff-serve laundry',
                serviceSubName: 'Including wash, dry and fold.',
                servicePrice: 'Starts from $12',
              },
            ]}
          />
          <ServiceSection
            iconSrc={DryCleanIcon.src}
            title="Dry Cleaning"
            data={[
              { serviceName: 'Self-serve wash', servicePrice: 'Range from $4 - $6' },
              { serviceName: 'Self-serve dry', servicePrice: 'Starts from $1' },
              {
                serviceName: 'Staff-serve laundry',
                serviceSubName: 'Including wash, dry and fold.',
                servicePrice: 'Starts from $12',
              },
            ]}
          />
        </Group>
      </Container>
    </>
  );
}
