import React from 'react';
import { render } from '@testing-library/react';
import { useDispatch, useSelector } from 'react-redux';
import Cars from '../components/Cars';

jest.mock('react-redux', () => ({
  useDispatch: jest.fn(),
  useSelector: jest.fn(),
}));

describe('Cars Component', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should render without crashing', () => {
    useSelector.mockReturnValue([]);

    useDispatch.mockReturnValue(jest.fn());

    const { asFragment } = render(<Cars startIndex={0} endIndex={10} />);

    expect(asFragment()).toMatchSnapshot();
  });
});
