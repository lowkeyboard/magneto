import React, {useRef} from 'react';
import MainNav from './app/components/navigation/MainNav';
import {NavigationContainer} from '@react-navigation/native';
import analytics from '@react-native-firebase/analytics';

export function getActiveRouteName(state: any): any {
  const route = state.routes[state.index];

  // resolve nested navigators recursivly
  if (route.state) {
    return getActiveRouteName(route.state);
  }

  return route.name;
}
export default function App() {
  const routeNameRef = useRef(null);
  return (
    <NavigationContainer
      onStateChange={state => {
        const previousRouteName = routeNameRef.current;
        const currentRouteName = getActiveRouteName(state);
        if (previousRouteName !== currentRouteName) {
          analytics().logScreenView({
            screen_class: currentRouteName,
            screen_name: currentRouteName,
          });
        }
      }}>
      <MainNav />
    </NavigationContainer>
  );
}
