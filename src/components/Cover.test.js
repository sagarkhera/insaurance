import { render, screen, fireEvent } from '@testing-library/react';
import Cover from './Cover';
import data from '../data';

describe('Cover component', () => {
    const initialProps = {
      product: data.products[0],
      onAdd: jest.fn(), 
    };
    it('renders Add To Cart button', () => {
      render(<Cover {...initialProps} />);
      expect(screen.getByRole('button', { name: 'Add To Cart' })).toBeDefined();
    });
    it('should call onAdd when clicking + button', () => {
      const onAddMock = jest.fn();
      render(<Cover {...initialProps} onAdd={onAddMock} />);
      fireEvent.click(screen.getByRole('button', { name: 'Add To Cart' }));
      expect(onAddMock).toHaveBeenCalled();
    });
});