import Relay from 'react-relay';

export default class extends Relay.Route {
  static queries = {
    owner: () => Relay.QL`
      query { 
        owner 
      }
    `,
    viewer: () => Relay.QL`
      query {
        viewer
      }
    `
  }

  static routeName = 'AppHomeRoute';
}
