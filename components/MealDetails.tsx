import {
  StyleProp,
  StyleSheet,
  Text,
  TextStyle,
  View,
  ViewStyle,
} from 'react-native'
import { Meal } from '../types'

type MealDetailsProps = {
  meal: Meal
  style?: StyleProp<ViewStyle>
  textStyle?: StyleProp<TextStyle>
}

export default function MealDetails({
  meal,
  style,
  textStyle,
}: Readonly<MealDetailsProps>) {
  return (
    <View style={[styles.details, style]}>
      <Text style={[styles.detailsItem, textStyle]}>{meal.duration}m</Text>
      <Text style={[styles.detailsItem, textStyle]}>
        {meal.complexity.toUpperCase()}
      </Text>
      <Text style={[styles.detailsItem, textStyle]}>
        {meal.affordability.toUpperCase()}
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  details: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 8,
    justifyContent: 'center',
  },
  detailsItem: {
    marginHorizontal: 4,
    fontSize: 12,
  },
})
