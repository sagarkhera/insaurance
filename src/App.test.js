import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Header', () => {
  render(<App />);
  const headerText = screen.getByText("Buy Insaurance");
  expect(headerText).toBeDefined();
});
