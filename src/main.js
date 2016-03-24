import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { addNote } from './actions';
import noteApp from './reducers';
import App from './components/App';

const store = createStore(noteApp);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)

setTimeout(() => {
    fetch('/api/notes')
        .then(response => response.json())
        .then(json => {
            json.notes.map(note => {
                store.dispatch(addNote(note));
            });
        });
}, 2000);
