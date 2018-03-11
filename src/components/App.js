import React                       from 'react';
import PropTypes                   from 'prop-types';
import Routes                      from '../Routes';

class App extends React.Component{
    render(){
        return(
            <div className="container-fluid">
                <p>Header here...</p>
                    <Routes />
                <p>Foother here...</p>
            </div>
        );
    }
}

App.propTypes = {
    children: PropTypes.object.isRequired
};

export default App;