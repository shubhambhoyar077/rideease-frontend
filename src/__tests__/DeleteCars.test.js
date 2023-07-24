import React from 'react';
import 'matchmedia-polyfill';
import 'matchmedia-polyfill/matchMedia.addListener';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import '@testing-library/jest-dom';
import DeleteCars from '../components/DeleteCars';

const mockStore = configureMockStore([]);

describe('HomePage and Cars Component', () => {
  let store;

  beforeEach(() => {
    store = mockStore({
      cars: {
        cars: [
          {
            id: 1,
            name: 'Test Car',
            details: 'test details',
            image:
              'https://www.autocar.co.uk/sites/autocar.co.uk/files/images/car-reviews/first-drives/legacy/99-best-luxury-cars-2023-bmw-i7-lead.jpg',
          },
        ],
      },
    });
    store.dispatch = jest.fn();
  });

  it('should render the delete cars list from store', () => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <DeleteCars />
        </Provider>
      </BrowserRouter>,
    );

    expect(screen.getAllByText('Delete Car')[0]).toBeInTheDocument();
    expect(screen.getByText('Test Car')).toBeInTheDocument();
  });
});
