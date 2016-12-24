import React, {Component, PropTypes} from 'react';

class Home extends Component {
    render() {
        return (
            <div>
              <span>I want to learn...</span>
              <div>
                <span>React</span>
                <span>React Native</span>
                <span>React Native Animations</span>
                <span>React Native Maps</span>
                <span>React Native Routing</span>
              </div>
            </div>
        );
    }
}

Home.propTypes = {

};

export default Home;