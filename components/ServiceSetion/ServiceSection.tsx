import { Box, createStyles, Image, Paper, Table, Text, Title } from '@mantine/core';
import React from 'react';

interface ServiceSectionProps {
  iconSrc: string;
  title: React.ReactNode;
  data: {
    serviceName: string;
    serviceSubName?: string;
    servicePrice: string;
  }[];
}

const useStyles = createStyles((theme) => ({
  titleWrapper: {
    display: 'flex',
    alignItems: 'center',
    gap: theme.spacing.xs,
    paddingBottom: theme.spacing.md,
  },
  title: {
    fontSize: theme.fontSizes.xl * 1.3,
    fontWeight: 400,
  },
  titleIcon: {
    width: '3rem',
  },
  tableWrapper: {
    width: '100%',
  },
}));

export default function ServiceSection({ iconSrc, title, data }: ServiceSectionProps) {
  const { classes } = useStyles();

  const rows = data.map((each, i) => (
    <tr key={i}>
      <td>
        <Text component="span" size="sm">
          {each.serviceName}{' '}
          {each.serviceSubName && (
            <Text
              component="span"
              size="sm"
              sx={(theme) => ({
                color: theme.colors.gray[6],
              })}
            >
              - {each.serviceSubName}
            </Text>
          )}
        </Text>
      </td>
      <td>{each.servicePrice}</td>
    </tr>
  ));

  return (
    <Box sx={() => ({ width: '100%' })}>
      <Box className={classes.titleWrapper}>
        <Image src={iconSrc} alt="icon" className={classes.titleIcon} />
        <Title className={classes.title}>{title}</Title>
      </Box>
      <Paper shadow="xs" className={classes.tableWrapper}>
        <Table
          striped
          horizontalSpacing="xl"
          verticalSpacing="xs"
          sx={() => ({
            fontWeight: 500,
          })}
        >
          <thead>
            <tr>
              <th>SERVICE</th>
              <th>PRICING</th>
            </tr>
          </thead>
          <tbody>{rows}</tbody>
        </Table>
      </Paper>
    </Box>
  );
}
