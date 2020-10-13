import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import BlankScreen412179Navigator from '../features/BlankScreen412179/navigator';
import BlankScreen312178Navigator from '../features/BlankScreen312178/navigator';
import BlankScreen212177Navigator from '../features/BlankScreen212177/navigator';
import BlankScreen111389Navigator from '../features/BlankScreen111389/navigator';
import BlankScreen010890Navigator from '../features/BlankScreen010890/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
BlankScreen412179: { screen: BlankScreen412179Navigator },
BlankScreen312178: { screen: BlankScreen312178Navigator },
BlankScreen212177: { screen: BlankScreen212177Navigator },
BlankScreen111389: { screen: BlankScreen111389Navigator },
BlankScreen010890: { screen: BlankScreen010890Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
