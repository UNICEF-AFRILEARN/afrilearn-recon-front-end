import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/globals.css";
import Layout from "../components/layouts";
import "bootstrap/dist/css/bootstrap.min.css";

import { wrapper, store, persistor } from "../redux/store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      {/* <PersistGate persistor={persistor}> */}
        <Layout>
          <Component {...pageProps} />
        </Layout>
      {/* </PersistGate> */}
    </Provider>
  );
}

export default MyApp;
