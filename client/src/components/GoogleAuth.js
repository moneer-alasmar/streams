import React from "react";

class GoogleAuth extends React.Component {
  state = { isSignedIn: null };
  componentDidMount = () => {
    window.gapi.load("client:auth2", () => {
      window.gapi.client
        .init({
          clientId:
            "763730780506-5s87dqdup9gfd20eso7a2dgek51bke1k.apps.googleusercontent.com",
          scope: "email"
        })
        .then(() => {
          this.auth = window.gapi.auth2.getAuthInstance();
          this.setState({ isSignedIn: this.auth.isSignedIn.get() });
        });
    });
  };

  renderAuthButton() {
    if (this.state.isSignedIn === null) {
      return <div>I don't know if we're signed in</div>;
    } else if (this.state.isSignedIn) {
      return <div>I am signed in!</div>;
    } else {
      return <div>I am not signed in.</div>;
    }
  }

  render() {
    return <div>{this.renderAuthButton()}</div>;
  }
}

export default GoogleAuth;
