import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import logo from './assets/reactify-logo-white.png';

test('renders the logo image', () => {
    render(<LogoComponent />);
    const logoElement = screen.getByAltText(/reactify logo/i);
    expect(logoElement).toBeInTheDocument();
});

test('logo image has correct class name', () => {
    render(<LogoComponent />);
    const logoElement = screen.getByAltText(/reactify logo/i);
    expect(logoElement).toHaveClass('logo');
});
