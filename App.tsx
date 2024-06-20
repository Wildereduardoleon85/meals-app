import CategoriesScreen from './screens/CategoriesScreen'
import { StatusBar } from 'expo-status-bar'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import MealsOverviewScreen from './screens/MealsOverviewScreen'
import { Screens } from './types'
import MealDetailsScreen from './screens/MealDetailsScreen'
import { createDrawerNavigator } from '@react-navigation/drawer'
import FavoritesScreen from './screens/FavoritesScreen'

export type RootStackParamList = {
  Categories: undefined
  MealsOverview: { categoryId: string }
  MealDetails: { mealId: string }
  Drawer: undefined
  Favorites: undefined
}

const Stack = createNativeStackNavigator<RootStackParamList>()
const Drawer = createDrawerNavigator<RootStackParamList>()

function DrawerNavigator() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#351401',
        },
        headerTintColor: '#ffffff',
        sceneContainerStyle: {
          backgroundColor: '#3f2f25',
        },
      }}
    >
      <Drawer.Screen
        name={Screens.Categories}
        component={CategoriesScreen}
        options={{
          title: 'All Categories',
        }}
      />
      <Drawer.Screen name={Screens.Favorites} component={FavoritesScreen} />
    </Drawer.Navigator>
  )
}

export default function App() {
  return (
    <>
      <StatusBar style='light' />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name={Screens.Drawer}
            component={DrawerNavigator}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name={Screens.MealsOverview}
            component={MealsOverviewScreen}
          />
          <Stack.Screen
            name={Screens.MealDetails}
            component={MealDetailsScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  )
}
