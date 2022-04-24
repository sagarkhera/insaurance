import { render, screen, fireEvent } from '@testing-library/react';
import Cart from './Cart';
import data from '../data';

describe('Cart component', () => {
    const initialProps = {
    cartItems: data.products,
    onAdd: jest.fn(), 
    onRemove: jest.fn()
    };
    it('renders Checkout button', () => {
        render(<Cart {...initialProps} />);
        expect(screen.getByRole('button', { name: 'Checkout' })).toBeDefined();
    });
    it('renders remove and add buttons for each item', () => {
        render(<Cart {...initialProps} />);
        expect(screen.getAllByRole('button', { name: '-' })).toBeDefined();
        expect(screen.getAllByRole('button', { name: '+' })).toBeDefined();
    });
    it('renders labels Item Price, Tax Price, Total Price', () => {
        render(<Cart {...initialProps} />);
        expect(screen.getByText('Items Price')).toBeDefined();
        expect(screen.getByText('Tax Price')).toBeDefined();
        expect(screen.getByText('Total Price')).toBeDefined();
    });
    it('shows message Cart is empty when no cartItems added', () => {
        const props = {
        ...initialProps,
        cartItems: []
        }
        render(<Cart {...props} />);
        expect(screen.getByText('Cart is empty')).toBeDefined();
    });
    it('should call onAdd when clicking + button', () => {
        const onAddMock = jest.fn();
        render(<Cart {...initialProps} onAdd={onAddMock} />);
        fireEvent.click(screen.getAllByRole('button', { name: '+' })[0]);
        expect(onAddMock).toHaveBeenCalled();
    });
    it('should call onRemove when clicking - button', () => {
        const onRemoveMock = jest.fn();
        render(<Cart {...initialProps} onRemove={onRemoveMock} />);
        fireEvent.click(screen.getAllByRole('button', { name: '-' })[0]);
        expect(onRemoveMock).toHaveBeenCalled();
    });
});