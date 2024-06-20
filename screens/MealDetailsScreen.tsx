import { useLayoutEffect } from 'react'
import {
  NavigationProp,
  ParamListBase,
  RouteProp,
} from '@react-navigation/native'
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import { RootStackParamList } from '../App'
import { Screens } from '../types'
import { MEALS } from '../data/dummy-data'
import MealDetails from '../components/MealDetails'
import Subtitle from '../components/Subtitle'
import List from '../components/List'
import { FontAwesome } from '@expo/vector-icons'
import IconButton from '../components/IconButton'

type MealDetailsScreenProps = {
  route: RouteProp<RootStackParamList, Screens.MealDetails>
  navigation: NavigationProp<ParamListBase>
}

export default function MealDetailsScreen({
  route,
  navigation,
}: Readonly<MealDetailsScreenProps>) {
  const mealId = route.params.mealId
  const selectedMeal = MEALS.find((meal) => meal.id === mealId)

  function headerButtonPressHandler() {
    console.log('pressed')
  }

  function headerRight() {
    return (
      <IconButton onPress={headerButtonPressHandler}>
        <FontAwesome name='star' size={24} color='white' />
      </IconButton>
    )
  }

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight,
    })
  }, [navigation])

  return (
    <ScrollView>
      <Image style={styles.image} source={{ uri: selectedMeal.imageUrl }} />
      <Text style={styles.title}>{selectedMeal.title}</Text>
      <View>
        <MealDetails textStyle={styles.detailsText} meal={selectedMeal} />
      </View>
      <View style={styles.listContainer}>
        <Subtitle>Ingredients</Subtitle>
        <List items={selectedMeal.ingredients} />
        <Subtitle>Steps</Subtitle>
        <List items={selectedMeal.steps} />
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 350,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 24,
    margin: 8,
    textAlign: 'center',
    color: 'white',
  },
  detailsText: {
    color: 'white',
  },
  listContainer: {
    width: '85%',
    marginHorizontal: 'auto',
    marginBottom: 32,
  },
})
