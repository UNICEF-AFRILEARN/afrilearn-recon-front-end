import Navbar from './mainNav';
import Footer from './footer';

const Layout = ({children}) => {
  return (
    <>
      <Navbar/>
        <main>
          {children}
        </main>
      <Footer/>
    </>
  )
}

export default Layout;