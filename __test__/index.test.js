import { render, screen } from '@testing-library/react';
import Home from '../pages/index';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import { store } from './../redux/store';

describe('Home', () => {
  it('renders a heading', () => {
    render(<Provider store={store}><Home /></Provider>)

    const heading = screen.getByText(/Get ahead with Afrilearn!/)
    expect(heading).toBeInTheDocument()
  })
});