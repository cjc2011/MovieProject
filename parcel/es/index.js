import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import App from './app' 

class AppContainer extends Component{
  state = {
    name: 'Parcel 打包案例'
  }

  componentDidMount() {
    setTimeout( () => this.setState({name: 'parcel 打包成功'}), 2000)
  }

  render() {
    return <App name={this.state.name} />
  }
}

ReactDOM.render(<AppContainer />, document.getElementById('app'))