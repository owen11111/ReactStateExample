import { render, screen } from '@testing-library/react';
import App from './App';

test('renders increment button', () => {
  render(<App />);
  const linkElement = screen.getByText(/increment/i);
  expect(linkElement).toBeInTheDocument();
});
