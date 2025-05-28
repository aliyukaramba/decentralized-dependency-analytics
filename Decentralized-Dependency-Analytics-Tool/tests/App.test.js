import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../src/client/App';

describe('App Component', () => {
  test('renders dependency graph', () => {
    render(<App />);
    const graphElement = screen.getByText(/dependency graph/i);
    expect(graphElement).toBeInTheDocument();
  });

  test('renders teaRank', () => {
    render(<App />);
    const teaRankElement = screen.getByText(/teaRank/i);
    expect(teaRankElement).toBeInTheDocument();
  });

  test('renders TEA token balance', () => {
    render(<App />);
    const teaTokenElement = screen.getByText(/tea token balance/i);
    expect(teaTokenElement).toBeInTheDocument();
  });

  test('renders vulnerability reports', () => {
    render(<App />);
    const vulnerabilitiesElement = screen.getByText(/vulnerability reports/i);
    expect(vulnerabilitiesElement).toBeInTheDocument();
  });

  test('renders input form for project URL', () => {
    render(<App />);
    const inputElement = screen.getByPlaceholderText(/enter project repository url/i);
    expect(inputElement).toBeInTheDocument();
  });
});