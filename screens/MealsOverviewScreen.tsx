import { useLayoutEffect } from 'react'
import { FlatList, StyleSheet, View } from 'react-native'
import { CATEGORIES, MEALS } from '../data/dummy-data'
import {
  NavigationProp,
  ParamListBase,
  RouteProp,
} from '@react-navigation/native'
import { RootStackParamList } from '../App'
import { Screens } from '../types'
import MealItem from '../components/MealItem'

type MealsOverviewScreenProps = {
  route: RouteProp<RootStackParamList, Screens.MealsOverview>
  navigation: NavigationProp<ParamListBase>
}

function MealsOverviewScreen({
  route,
  navigation,
}: Readonly<MealsOverviewScreenProps>) {
  const displayedMeals = MEALS.filter((meal) =>
    meal.categoryIds.includes(route.params.categoryId)
  )

  const catId = route.params.categoryId

  useLayoutEffect(() => {
    const categoryTitle = CATEGORIES.find(
      (category) => category.id === catId
    ).title

    navigation.setOptions({ title: categoryTitle })
  }, [catId, navigation])

  return (
    <View style={styles.container}>
      <FlatList
        data={displayedMeals}
        renderItem={({ item }) => <MealItem meal={item} />}
        keyExtractor={(item) => item.id}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
})

export default MealsOverviewScreen
