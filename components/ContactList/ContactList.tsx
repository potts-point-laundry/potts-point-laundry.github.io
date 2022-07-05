import { Group, Text } from '@mantine/core';
import { HiOutlineLocationMarker, HiOutlineSun, HiPhone } from 'react-icons/hi';
import ContactListItem from './ContactListItem';

export default function ContactList() {
  return (
    <Group direction="column" grow>
      <ContactListItem
        label="Address"
        icon={HiOutlineLocationMarker}
        description={
          <Text
            component="a"
            color="blue"
            href="https://goo.gl/maps/pwXK4ptWuu8Ezj5U6"
            target="_blank"
          >
            138 Victoria Street, Potts Point NSW 2011
          </Text>
        }
      />
      <ContactListItem
        label="Phone"
        icon={HiPhone}
        description={
          <Text component="a" color="blue" href="tel:(02) 9357 3660">
            (02) 9357 3660
          </Text>
        }
      />
      <ContactListItem
        label="Business Hour"
        icon={HiOutlineSun}
        description={
          <>
            <Text>Weekday: 8am - 9am</Text>
            <Text>Weekend: 8am - 9am</Text>
          </>
        }
      />
    </Group>
  );
}
