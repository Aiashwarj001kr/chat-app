import React from 'react';
import firebase from 'firebase/app';
import { Alert, Button, Col, Container, Grid, Icon, Panel, Row } from 'rsuite';
import { auth , database } from '../misc/firebase';

// eslint-disable-next-line arrow-body-style
const SignIn = () => {

    const signIn = async provider => {
        try {
            const {additionalUserInfo, user} = await auth.signInWithPopup(provider);

            if(additionalUserInfo.isNewUser){
                database.ref(`/profiles/${user.uid}`).set({
                    name: user.displayName,
                    createdAt: firebase.database.ServerValue.TIMESTAMP,
                });
            }

            Alert.success('SignIN', 3000)

        } catch (error) {
            Alert.info(error.message, 3000)
        }
    }

    const onSignIn = () => {
        signIn(new firebase.auth.GoogleAuthProvider());
    }

  return (
    <Container>
      <Grid>
        <Row>
          <Col xs={24} md={12} mdOffset={6}>
            <Panel>
              <div className="text-center" style={{marginTop: "50%"}}>
                <h1>Welcome to Chat App</h1>
                <p>Chat plaform</p>
              </div>
              <div style={{marginTop: "10%"}}>
                <Button block color="green" onClick={onSignIn()}>
                  <Icon icon="google"/> Continue with Google
                </Button>
              </div>
            </Panel>
          </Col>
        </Row>
      </Grid>
    </Container>
  );
};

export default SignIn;
