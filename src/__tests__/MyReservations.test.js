import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import MyReservations from '../components/MyReservations';

const mockStore = configureMockStore([]);

describe('MyReservations Component', () => {
  it('should render correctly', () => {
    const store = mockStore({
      reservations: {
        reservations: [
          {
            service: { name: 'Test Service', image: 'test.jpg' },
            reservation: { id: 1, city: 'Test City', date: '2023-07-15' },
          },
        ],
      },
    });
    const tree = renderer.create(
      <Provider store={store}>
        <MyReservations />
      </Provider>,
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
