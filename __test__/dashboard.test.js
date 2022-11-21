import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import { store } from './../redux/store';
import Dashboard, { Recommended } from '../components/features/dashboard/student';
import  Recommendation  from './../components/features/dashboard/student/extra/recommendation';


describe('Dashboard', () => {
    it('Render recomendation to the screen', () => {
        render(<Provider store={store}><Dashboard /></Provider>)

        const recommendationElement = screen.getByText(/Recommended For You/)
        expect(recommendationElement).toBeInTheDocument()
    })
});

describe('Recommended', () => {

    it('render recomendation', () => {
        render(<Provider store={store}><Recommended /></Provider>)

        const recon = screen.getByTestId('recon')
        expect(recon).toBeInTheDocument()
    })
});

describe('recommendation', () => {

    it('render recomendation list', () => {
        render(<Recommendation />)

        const reconList = screen.getByTestId('reconlist')
        expect(reconList).toBeInTheDocument()
    })
});