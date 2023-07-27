import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Navbar from '../components/Navbar';
import '@testing-library/jest-dom';

jest.mock('react-redux', () => ({
  useDispatch: jest.fn(),
  useSelector: jest.fn(),
}));

describe('Navbar', () => {
  it('should render the navbar with links', () => {
    useSelector.mockReturnValue({ isAuth: true, isAdmin: true });

    useDispatch.mockReturnValue(jest.fn());
    render(
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>,
    );

    const homeLink = screen.getByText('Cars');
    const reserveLink = screen.getByText('Reserve');
    const myreservationLink = screen.getByText('My Reservations');
    const addcarLink = screen.getByText('Add Cars');
    const deletecarLink = screen.getByText('Delete Cars');

    // Assert that the links are rendered correctly
    expect(homeLink).toBeInTheDocument();
    expect(reserveLink).toBeInTheDocument();
    expect(myreservationLink).toBeInTheDocument();
    expect(addcarLink).toBeInTheDocument();
    expect(deletecarLink).toBeInTheDocument();
  });

  it('should navigate to the correct pages when the links are clicked', () => {
    useSelector.mockReturnValue({ isAuth: true, isAdmin: true });

    useDispatch.mockReturnValue(jest.fn());
    render(
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>,
    );

    const homeLink = screen.getByText('Cars');
    const reserveLink = screen.getByText('Reserve');
    const myreservationLink = screen.getByText('My Reservations');
    const addcarLink = screen.getByText('Add Cars');
    const deletecarLink = screen.getByText('Delete Cars');

    // Assert that the links have the correct href attributes
    expect(homeLink.getAttribute('href')).toBe('/');
    expect(reserveLink.getAttribute('href')).toBe('/reserve');
    expect(myreservationLink.getAttribute('href')).toBe('/myreservations');
    expect(addcarLink.getAttribute('href')).toBe('/addcars');
    expect(deletecarLink.getAttribute('href')).toBe('/deletecars');
  });
});
