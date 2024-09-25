// EventDetails.test.tsx
import React from 'react';
import { render, screen } from '@testing-library/react';
import EventDetails from '../src/components/EventDetails';

describe('EventDetails Component', () => {
  test('renders event details correctly', () => {
    render(
      <EventDetails
        title="Event Title"
        date="2023-09-25"
        description="This is an event description."
      />
    );
    expect(screen.getByText('Event Title')).toMatchObject("title");
    expect(screen.getByText('2023-09-25')).toMatchObject("date");
    expect(screen.getByText('This is an event description.')).toMatchObject("description");
  });
});
