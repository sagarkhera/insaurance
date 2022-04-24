import { render, screen } from '@testing-library/react';
import Main from './Main';
import data from '../data';


describe('Main component', () => {
  const initialProps = {
    products: data.products,
    onAdd: jest.fn(), 
  };
  it('renders header Covers', () => {
    render(<Main {...initialProps}/>);
    const headerText = screen.getByText("Covers");
    expect(headerText).toBeDefined();
  });
});
