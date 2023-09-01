import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../views/Home';
import { AppProvider } from '../contexts/AppContext';
import Details from '../views/Details';

//import  {createStore, applyMiddleware} from 'redux';
//import  createSagaMiddlwWare from 'redux-saga';
//import  {Provider} from 'react-redux';
//import reducers from '../redux/reducers'

const Stack = createNativeStackNavigator();

function Router() {
  //const sagaMidlleware = createSagaMiddlwWare();
  //const store = createStore(reducers, applyMiddleware(sagaMidlleware))
  return (
    //<Provider store={store}>
    <AppProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen 
            name="Home" 
            component={Home}
            options={{
              headerShown: false
            }}
          />
         <Stack.Screen 
            name="Details" 
            component={Details}
            options={{
              headerShown: true
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </AppProvider>
    //</Provider>
  );
}

export default Router;