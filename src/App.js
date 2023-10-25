import './App.css';
import useWindowSize from "./hooks/useWindowSize";
import {MainSpaDesktop} from "./desktop/routes/mainSpaDesktop";
import {MainSpaTablet} from "./tablet/routes/mainSpaTablet";
import {MainSpaMobile} from "./mobile/routes/mainSpaMobile";

function App() {

    const windowSize = useWindowSize()

    if (windowSize.desktop) {
        return <MainSpaDesktop />;
    } else if (windowSize.tablet) {
        return <MainSpaTablet />;
    } else if (windowSize.mobile) {
        return <MainSpaMobile />;
    }

}

export default App;
