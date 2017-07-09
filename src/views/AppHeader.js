import React,{Component} from 'react';
import { Header, Title, Left, Body, Right, Button, Icon } from 'native-base';

class AppHeader extends Component {
  render() {
    return (
      <Header>
        <Left>
          <Button
            transparent
            onPress={() => this.props.navigation.navigate('DrawerOpen')}
          >
            <Icon name="menu" />
          </Button>
        </Left>
        <Body>
          <Title>בתי חולים</Title>
        </Body>
        <Right />
      </Header>
    );
  }
}

export default AppHeader;