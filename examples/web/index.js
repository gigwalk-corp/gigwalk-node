/* eslint gigwalk/require-valid-flow-file-annotation: 0,  import/no-unresolved: 0 */
import React, { Component } from 'react';
import { render } from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import GigwalkAPI from '../../lib';

injectTapEventPlugin();

const client = new GigwalkAPI();

const formStyle = {
    margin: '0 auto',
    maxWidth: 1000,
    paddingLeft: 40,
    paddingRight: 40
};

class App extends Component {
    static propTypes = {
        client: React.PropTypes.shape({
            authorize: React.PropTypes.func.isRequired
        }).isRequired
    };

    constructor(...args) {
        super(...args);
        this.state = {
            username: '',
            password: '',
            res: ''
        };
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChangeEmail(e) {
        this.setState({
            username: e.target.value
        });
    }

    onChangePassword(e) {
        this.setState({
            password: e.target.value
        });
    }

    onSubmit() {
        // TODO: Move to authorization resource?
        //this.props.client.authorize(this.state.username, this.state.password);
        //this.props.client.authorize(this.state.username, this.state.password)
        //    .then((res) => {
        //        this.setState({ res: JSON.stringify(res, null, 4) });
        //    }, (err) => {
        //        this.setState({ res: JSON.stringify(err, null, 4) });
        //    });
    }

    render() {
        return (
            <MuiThemeProvider>
                <div>
                    <AppBar title="Example Application using Gigwalk API" />
                    <form onSubmit={this.onSubmit} style={formStyle}>
                        <div>
                            <TextField type="email" floatingLabelText="Email" onChange={this.onChangeEmail} />
                        </div>
                        <div>
                            <TextField type="password" floatingLabelText="Password" onChange={this.onChangePassword} />
                        </div>
                        <div>
                            <RaisedButton label="Submit" primary onClick={this.onSubmit} />
                        </div>
                        <div style={{ overflowX: 'scroll' }}>
                            <pre>{this.state.res}</pre>
                        </div>
                    </form>

                </div>
            </MuiThemeProvider>
        );
    }
}


render(<App client={client} />, document.querySelector('#app'));
