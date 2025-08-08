import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the dashboard heading', () => {
  render(<App />);
  expect(screen.getByText(/dashboard/i)).toBeInTheDocument();
});
