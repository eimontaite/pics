import React from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';

class App extends React.Component {
    onSearchSubmit(term) {
        axios.get('https://api.unsplash.com/search/photos', {
            params: { query: term },
            headers: {
                Authorization: 'Client-ID EMqmTFAQuLGTaEIr3aC0jSHo2V1gPifJcMSNQg1J95I'
            }

        });
    }

    render() {
        return (
            <div className="ui container" style = {{ marginTop: '10px'}}>
                <SearchBar onSubmit={this.onSearchSubmit} />
            </div>
        )
    }
}

export default App;