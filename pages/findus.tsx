import { Container, createStyles, Group } from '@mantine/core';
import WashingMachineImg from '../assets/images/findus-banner.jpg';
import { Banner } from '../components/Banner/Banner';

import ContactList from '../components/ContactList/ContactList';
import GoogleMap from '../components/ContactList/GoogleMap';

export default function FindUsPage() {
  return (
    <>
      <Banner title="Locate Us" bgImgSrc={WashingMachineImg.src} />
      <Container
        sx={(theme) => ({
          paddingBlock: theme.spacing.xl * 2,
        })}
      >
        <Group grow align={'flex-start'}>
          <div>
            <ContactList />
          </div>
          <GoogleMap />
        </Group>
      </Container>
    </>
  );
}
