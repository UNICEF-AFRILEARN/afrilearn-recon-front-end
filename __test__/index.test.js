import { render, screen } from '@testing-library/react';
import Home from '../pages/index';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import { store } from './../redux/store';

describe('Home', () => {
  it('renders main heading', () => {
    render(<Provider store={store}><Home /></Provider>)

    const heading = screen.getByText(/Get ahead with Afrilearn!/)
    expect(heading).toBeInTheDocument()
  })

  it('renders sub headings', () => {
    render(<Provider store={store}><Home /></Provider>)

    const subheading = screen.getByText(/Why Afrilearn works/)
    expect(subheading).toBeInTheDocument()
  })
});