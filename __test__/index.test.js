import { render, screen } from '@testing-library/react';
import Home from '../pages/index';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import { store } from './../redux/store';

describe('Home', () => {
  it('renders a heading', () => {
    render(<Provider store={store}><Home /></Provider>)

    const heading = screen.getByRole('heading', {
      name: /Get ahead with Afrilearn!\.js!/i,
    })

    expect(heading).toBeInTheDocument()
  })
});