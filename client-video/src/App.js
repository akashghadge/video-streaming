import './App.css';
import { Switch, Route } from "react-router-dom"
import VideoUpload from './components/VideoUpload';
import Gallery from './components/Gallery';
function App() {
  return (
    <>
      {/* <NavbarM></NavbarM> */}
      <Switch>
        <Route path="/" component={VideoUpload} exact></Route>
        <Route path="/video-list" component={Gallery} exact></Route>
      </Switch>
    </>
  );
}

export default App;
