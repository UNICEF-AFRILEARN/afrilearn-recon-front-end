import { render, screen } from '@testing-library/react';
import Home from '../pages/index';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import { store } from './../redux/store';
import Dashboard from '../components/features/dashboard/student';

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

describe('Dashboard', () => {
      it('Render recomendation to the screen', () => {
          render(<Provider store={store}><Dashboard /></Provider>)

          const recommendationElement = screen.getByText(/Recommended For You/)
          expect(recommendationElement).toBeInTheDocument()
      })
});