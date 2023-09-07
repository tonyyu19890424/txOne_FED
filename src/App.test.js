import { render, screen } from '@testing-library/react';
import App from './App';

test('The App render success', () => {
  render(<App />);
  const linkElement = screen.getByText(/Open Menu/i);
  expect(linkElement).toBeInTheDocument();
});

test('The tonicProvider render success', () => {
  render(<App />);
  const tonicProviderElement = screen.queryByTestId('tonic-provider');
  expect(tonicProviderElement).toBeDefined();
});

test('The Menu Button render success', () => {
  render(<App />);
  const menuBtn = screen.queryByTestId('menu-btn');
  expect(menuBtn).toBeDefined();
});

test('The Modal render success', () => {
  render(<App />);
  const modal = screen.queryByTestId('modal');
  expect(modal).toBeDefined();
});
