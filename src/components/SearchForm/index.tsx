import { FormEvent, useRef } from 'react';
import { Form, Input, Button } from './style';
import { useIPTracker } from '../../context/IPTrackerContext';

const SearchForm = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const { handleSearch } = useIPTracker();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const value = inputRef.current?.value;

    if (!value) return;

    handleSearch(value);

    inputRef.current.value = '';
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Input
        ref={inputRef}
        type="text"
        placeholder="Search for any IP address or domain"
      />
      <Button type="submit">
        <img src="/images/icon-arrow.svg" alt="" />
      </Button>
    </Form>
  );
};

export default SearchForm;
