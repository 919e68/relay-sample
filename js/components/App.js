import React from 'react';
import Relay from 'react-relay';

class App extends React.Component {
  render() {
    var stations = this.props.viewer.stations

    return (
      <div>
        <h1>{this.props.owner.name}</h1>
        <h2>{this.props.viewer.stations[0].brand}</h2>
        <ul>
          {stations.map(
            station => <li>{station.brand}</li>
          )}
        </ul>
      </div>
    )
  }
}

export default Relay.createContainer(App, {
  fragments: {
    owner: () => Relay.QL`
      fragment on Owner {
        id
        name
      }
    `,
    viewer: () => Relay.QL`
      fragment on Viewer {
        stations {
          brand
        }
      }
    `
  }
})
