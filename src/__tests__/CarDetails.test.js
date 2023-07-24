import React from 'react';
import 'matchmedia-polyfill';
import 'matchmedia-polyfill/matchMedia.addListener';
import { render, screen } from '@testing-library/react';
import { BrowserRouter, useParams } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import '@testing-library/jest-dom';
import CarDetails from '../components/CarDetails';

const mockStore = configureMockStore([]);
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useParams: jest.fn(),
}));

describe('HomePage and Cars Component', () => {
  let store;

  beforeEach(() => {
    store = mockStore({
      details: {
        carDetails: {
          id: 1,
          name: 'Test Car',
          details: 'test details',
          image:
            'https://www.autocar.co.uk/sites/autocar.co.uk/files/images/car-reviews/first-drives/legacy/99-best-luxury-cars-2023-bmw-i7-lead.jpg',
        },
      },
    });
    store.dispatch = jest.fn();
    useParams.mockReturnValue({
      id: '1',
    });
  });

  it('should render the cars from store', () => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <CarDetails />
        </Provider>
      </BrowserRouter>
    );

    expect(screen.getByText('Test Car')).toBeInTheDocument();
    expect(screen.getByText('test details')).toBeInTheDocument();
  });
});
