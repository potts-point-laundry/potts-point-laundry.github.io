import React from 'react';
import { createStyles, Text, ThemeIcon } from '@mantine/core';
import { HiOutlineLocationMarker } from 'react-icons/hi';
import { IconType } from 'react-icons';

interface ContactListItemProps {
  label: React.ReactNode;
  description: React.ReactNode;
  icon: IconType;
}

const useStyles = createStyles((theme) => ({
  wrapper: {
    display: 'flex',
    alignItems: 'center',
    gap: theme.spacing.md,
  },
  labelText: {
    color: theme.colors.gray[6],
    fontSize: theme.fontSizes.sm,
  },
}));

export default function ContactListItem({ label, description, icon: Icon }: ContactListItemProps) {
  const { classes } = useStyles();
  return (
    <div className={classes.wrapper}>
      <ThemeIcon size="xl" radius="md">
        <Icon size={24} />
      </ThemeIcon>
      <div>
        <Text className={classes.labelText}>{label}</Text>
        <div>{description}</div>
      </div>
    </div>
  );
}
