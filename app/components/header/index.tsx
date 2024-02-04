'use client';

import { Container, Group, Burger } from '@mantine/core';
import Image from 'next/image';
import { IconShoppingBag } from '@tabler/icons-react';
import logo from '../../../public/logo.svg';
import classes from './index.module.scss';
import SignButton from '../sign-button';

const links = [{ link: '/checkout', label: 'Checkout', icon: IconShoppingBag }];

export function Header() {
  const items = links.map((link) => (
    <a key={link.label} href={link.link} className={classes.link}>
      {link.icon ? <link.icon width={25} height={25} /> : link.label}
    </a>
  ));

  return (
    <header className={classes.header}>
      <Container size="md" className={classes.inner}>
        <Image src={logo} alt="logo" />
        <Group gap={5} visibleFrom="xs">
          {items}
          <SignButton />
        </Group>
        <Burger hiddenFrom="xs" size="sm" />
      </Container>
    </header>
  );
}
