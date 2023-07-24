import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import MyReservations from '../components/MyReservations';
import '@testing-library/jest-dom';

const mockStore = configureMockStore([]);

describe('MyReservations Component', () => {
  let store;

  beforeEach(() => {
    store = mockStore({
      reservations: {
        reservations: [
          {
            reservation: {
              id: 1,
              city: 'Test City',
              date: '2023-07-15',
            },
            service: { name: 'test car' },
          },
        ],
      },
    });
    store.dispatch = jest.fn();
  });

  it('should render the reservations from store', () => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <MyReservations />
        </Provider>
      </BrowserRouter>,
    );

    expect(screen.getByText('test car')).toBeInTheDocument();
    expect(screen.getByText('City: Test City')).toBeInTheDocument();
    expect(screen.getByText('My Reservations')).toBeInTheDocument();
  });
});
