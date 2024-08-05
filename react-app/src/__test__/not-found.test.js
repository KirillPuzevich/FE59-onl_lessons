import React from 'react';
import { render } from '@testing-library/react';
import "@testing-library/jest-dom";
import { NotFound } from '../pages/not-found'; 

describe('NotFound Component', () => {
  test('renders the 404 title', () => {
    const { getByText } = render(<NotFound />);
    const titleElement = getByText('404'); 
    expect(titleElement).toBeInTheDocument();
  });

  test('renders the page not found message', () => {
    const { getByText } = render(<NotFound />);
    const messageElement = getByText('Page not found'); 
    expect(messageElement).toBeInTheDocument();
  });

  test('renders the not-found section', () => {
    const { getByRole } = render(<NotFound />);
    const sectionElement = getByRole('heading', { name: '404' }); 
    expect(sectionElement).toBeInTheDocument();
  });
});