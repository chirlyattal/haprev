import { DrawerNavigator } from 'react-navigation';
import HomeScreen from '../views/App';
import DashboardScreen from '../views/Dashboard';
import SearchScreen from '../views/search';
import HospitalScreen from '../views/hospitalList/HospitalList';
// import SideBar from '../views/SideBar';

export default  DrawerNavigator({
  Home: { screen: HomeScreen },
  Dashbaord: {screen:DashboardScreen},
  Search: {screen:SearchScreen},
  Hospital : {screen:HospitalScreen}
},{
  initialRouteName :'Hospital',
  // contentComponent: props => <SideBar {...props} />
});
