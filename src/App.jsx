/* eslint-disable no-unused-vars */
import logo from './logo.svg';
import './App.css';
import MenuBtn from './MenuBtn';
import {
  TonicProvider,
  colorStyle,
} from '@tonic-ui/react';

function App(props) {
  return (
    <div className="App">
      <header className="App-header">
        <TonicProvider
          data-testid="tonic-provider"
          colorMode={{
            defaultValue: 'dark', // One of: 'dark', 'light'
          }}
          colorStyle={{
            defaultValue: colorStyle, // Custom color style
          }}
          useCSSBaseline={true} // If `true`, apply CSS reset and base styles
        >
          <MenuBtn data-testid="menu-btn"/>
        </TonicProvider>
      </header>
    </div>
  );
}

export default App;
