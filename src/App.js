import React from 'react';
import { Amplify } from 'aws-amplify';
import { Authenticator, Button } from '@aws-amplify/ui-react';
// import { Switch, Route } from 'react-router-dom';
import logo from './logo.svg';
// import { settings } from './config';

import './App.css';
import '@aws-amplify/ui-react/styles.css';
import Notification from './firebaseNotifications/Notification'

Amplify.configure({
  Auth: {
    region: "us-west-2",
    userPoolId: "us-west-2_7LZpZQNkU",
    userPoolWebClientId: "3cuh76hllcsnagn7qcn81ounii"
  },
  // oauth: {
  //   scope: ['email'],

  // },

});

function App() {
  const callAPI = async () => {
    for (let key in localStorage) {
      if (!localStorage.hasOwnProperty(key)) {
        continue; // skip keys like "setItem", "getItem" etc
      }
      alert(`${key}: ${localStorage.getItem(key)}`);
    }
    // console.log('ddd', localStorage.getItem('CognitoIdentityServiceProvider.3cuh76hllcsnagn7qcn81ounii.test222.accessToken'))
    const response = await fetch('https://b5g8fh1rpi.execute-api.us-west-2.amazonaws.com/p/sign_in', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        "user_type": "trainer",
        "email": "sahitiandi122@gmail.com",
        "lang": "en",
        "third_party_user_name": "bc11fb88-212b-4e51-bd9c-dc57cfe2b952"
      }),
    })
    console.log(await response.json())
  }


  return (
    <div className="App">
      <Authenticator signUpAttributes={['email']}>
        {({ signOut, user }) => (

          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            Hello {user?.username}
            <p className="text-blue-600">
              Edit <code>src/App.tsx</code> and save to reload.
            </p>
            <Button onClick={callAPI}>Call API</Button>
            <Button onClick={signOut}>Log out</Button>
          </header>

        )}
      </Authenticator>
      <Notification />
    </div>
  );
}

export default App;