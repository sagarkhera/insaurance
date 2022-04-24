import { render, screen } from '@testing-library/react';
import Header from './Header';
import data from '../data';


describe('Header component', () => {
  const initialProps = {
    countCartItems: data.products.length
  };
  it('renders Header', () => {
    render(<Header {...initialProps}/>);
    const headerText = screen.getByText("Buy Insaurance");
    expect(headerText).toBeDefined();
  });
  it('renders Cart counter', () => {
    render(<Header {...initialProps}/>);
    const countCartItems = screen.getByText("3");
    expect(countCartItems).toBeDefined();
  });
});
