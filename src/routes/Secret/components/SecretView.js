import React from 'react';

class SecretView extends React.Component {
  componentWillMount() {
    fetch('/api/secret', {
      mode: 'cors',
      credentials: 'include'
    }).then(res => res.json().then(json => console.log(json)));
  }

  render() {
    return (
      <div>
        <p>
          Now fetching secret...
        </p>
      </div>
    )
  }
}

export default SecretView;
