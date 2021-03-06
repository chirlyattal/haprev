import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import PropTypes from 'prop-types';

class Dashboard extends Component {
  render() {
    const { screenName, dummyMessage, sendDummy } = this.props;
    return (
      <View style={styles.container}>
        <Text>
          This will be {screenName} screen
        </Text>
        <Text>
          dummy is {dummyMessage}{' '}
        </Text>
        <Button onPress={() => sendDummy('eeee')} title="send Message" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
});

Dashboard.propTypes = {
  screenName: PropTypes.string,
  dummyMessage: PropTypes.string,
  sendDummy: PropTypes.func
};

export default Dashboard;
