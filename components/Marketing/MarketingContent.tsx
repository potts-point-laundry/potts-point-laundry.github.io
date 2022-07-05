import { Space, Text } from '@mantine/core';
import { BsCashCoin, BsCoin, BsGoogle } from 'react-icons/bs';
import {
  MdOutlineAccessTime,
  MdOutlineDirectionsWalk,
  MdOutlineLocalLaundryService,
} from 'react-icons/md';
import { FeatureProps, Marketing } from './Marketing';

const data: FeatureProps[] = [
  {
    title: 'Affordable Services',
    description: (
      <>
        High quality services does not mean expensive.
        <Space h="xs" />
        Our rates are affordable while offering exceptional service.
      </>
    ),
    icon: BsCashCoin,
  },
  {
    title: 'Open 7 Days',
    description: (
      <>
        Get your laundry done any day through out the week.
        <Space h="xs" />
        Time may vary on public holidays.
      </>
    ),
    icon: MdOutlineAccessTime,
  },
  {
    title: '4+ Star Review',
    description:
      'We have one of the highest review rating in Potts Point and Kings Cross. We ensure our customers are happy and satisfy with our services.',
    icon: BsGoogle,
  },
  {
    title: 'Convenient',
    description: (
      <>
        We are located on Victoria Street, 3 minute walk from Kings Cross train station.
        <Space h="xs" />
        <Text
          component="a"
          href="https://goo.gl/maps/pwXK4ptWuu8Ezj5U6"
          target="_blank"
          color="blue"
          size="sm"
        >
          Google Map
        </Text>
      </>
    ),
    icon: MdOutlineDirectionsWalk,
  },
  {
    title: 'Self Serve Laundry',
    description:
      'Self Service (Washing and Drying) is availble at our store. Let us know if you need coin exchange.',
    icon: BsCoin,
  },
  {
    title: 'Commercial Laundry Services',
    description: (
      <>
        We offer commercial laundry services to businesses. Feel free to drop by or{' '}
        <Text component="a" href="tel:(02) 9357 3660" color="blue" size="sm">
          give us a call
        </Text>{' '}
        to see if our services suits you.
      </>
    ),
    icon: MdOutlineLocalLaundryService,
  },
];

export default function MarketingContent() {
  return (
    <Marketing
      title="Dry Cleaners and Laundry in Kings Cross"
      description="Our staffs have decade of experiences with cleaning and laundry. Rest assure that you will be in good hands."
      data={data}
    />
  );
}
