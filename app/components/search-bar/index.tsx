'use client';

import { Input } from '@mantine/core';
import { useRouter } from 'next/navigation';

import React, { useEffect, useRef, useState } from 'react';
import { useDebounce } from 'use-debounce';

const SearchBar = ({ search }: { search: { [key: string]: string | string[] | undefined } }) => {
  const router = useRouter();
  const initialRender = useRef(true);
  const categoryId = search.categoryId || '';
  const [text, setText] = useState(search.title || '');
  const [query] = useDebounce(text, 750);
  const handleOnChange = (e: { target: { value: React.SetStateAction<string | string[]> } }) => {
    setText(e.target.value);
  };
  useEffect(() => {
    if (initialRender.current) {
      initialRender.current = false;
      return;
    }
    if (!query) {
      router.push(`/categories/${search}`);
    } else {
      router.push(`/categories/?categoryId=${categoryId}&title=${query}`);
    }
  }, [query]);

  return <Input placeholder="Input component" onChange={handleOnChange} value={text} />;
};

export default SearchBar;
