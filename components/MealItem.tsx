import {
  NavigationProp,
  ParamListBase,
  useNavigation,
} from '@react-navigation/native'
import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import { Meal, Screens } from '../types'
import MealDetails from './MealDetails'

type MealItemProps = {
  meal: Meal
}

export default function MealItem({ meal }: Readonly<MealItemProps>) {
  const navigation = useNavigation<NavigationProp<ParamListBase>>()

  function mealPressHandler() {
    navigation.navigate(Screens.MealDetails, { mealId: meal.id })
  }

  return (
    <View style={styles.mealItem}>
      <Pressable
        onPress={mealPressHandler}
        android_ripple={{ color: '#ccc' }}
        style={({ pressed }) => (pressed ? styles.buttonPressed : null)}
      >
        <View>
          <Image source={{ uri: meal.imageUrl }} style={styles.image} />
          <Text style={styles.title}>{meal.title}</Text>
        </View>
        <MealDetails meal={meal} />
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  mealItem: {
    margin: 16,
    borderRadius: 8,
    overflow: 'hidden',
    backgroundColor: 'white',
    elevation: 4,
  },
  buttonPressed: {
    opacity: 0.5,
  },
  image: {
    width: '100%',
    height: 200,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18,
    textAlign: 'center',
    margin: 8,
  },
})
