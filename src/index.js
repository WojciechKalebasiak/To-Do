import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/containers/App';
import { AppContainer } from 'react-hot-loader';
if(module.hot) {
        module.hot.accept('./components/containers/App', ()=> {
                ReactDOM.render(
                    <AppContainer>
                        <App/>
                    </AppContainer>,
                    document.getElementById('app')
                );
        });
}
ReactDOM.render(<App/>, document.getElementById('app'));