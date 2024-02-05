import React from 'react';
import { Card, Text, Button, Group } from '@mantine/core';

const PayoutCard = ({ totalAmount }) => {
  return (
    <Card
      shadow="sm"
      p="lg"
      radius="md"
      withBorder
      style={{
        height: '280px',
        display: 'flex',
        flexDirection: 'col',
        justifyContent: 'space-between',
      }}
    >
      <Text size="xl" weight={500} mb="md">
        Toplam Tutar: ${totalAmount.toFixed(2)}
      </Text>
      <Text color="dimmed" mb="xl">
        Ücretsiz Kargo
      </Text>
      <Group position="center">
        <Button color="blue" radius="md">
          Ödeme Yap
        </Button>
      </Group>
    </Card>
  );
};

export default PayoutCard;
