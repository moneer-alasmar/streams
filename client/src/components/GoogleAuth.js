import React from "react";

class GoogleAuth extends React.Component {
  componentDidMount = () => {
    window.gapi.load("client:auth2", () => {
      window.gapi.client.init({
        clientId:
          "763730780506-5s87dqdup9gfd20eso7a2dgek51bke1k.apps.googleusercontent.com",
        scope: "email"
      });
    });
  };

  render() {
    return <div>Google Auth</div>;
  }
}

export default GoogleAuth;
