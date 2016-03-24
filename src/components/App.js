import React from 'react';
import Header from './Header';
import Footer from './Footer';
import CreatedNoteList from '../containers/CreatedNoteList';
import SelectedNoteCard from '../containers/SelectedNoteCard';

const App = () => {
    return (
        <div>
            <Header />
            <CreatedNoteList />
            <SelectedNoteCard />
            <Footer />
        </div>
    );
};

export default App;
