'use client';

import React, { useState } from 'react';
import { Box, NavLink } from '@mantine/core';
import { useRouter } from 'next/navigation';
import { Category } from '@/types';

interface CategoryListProps {
  categoryId: string;
  categories: Category[];
}

export default function CategoryList({ categoryId, categories }: CategoryListProps) {
  const [active, setActive] = useState(parseInt(categoryId, 10) - 1);
  const router = useRouter();
  const handleClick = (id: number) => {
    setActive(id - 1);
    router.push(`/categories/?categoryId=${id}`);
  };
  const items = categories.map((category: Category, index: number) => (
    <NavLink
      onClick={() => handleClick(category.id)}
      key={category.id}
      active={index === active}
      label={category.name}
    />
  ));

  return <Box w={220}>{items}</Box>;
}
