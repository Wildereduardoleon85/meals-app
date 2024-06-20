import {
  NavigationProp,
  ParamListBase,
  useNavigation,
} from '@react-navigation/native'
import { Platform, Pressable, StyleSheet, Text, View } from 'react-native'
import { Screens } from '../types'

type CategoryGridTileProps = {
  title: string
  color?: string
  id: string
}

function CategoryGridTile({
  id,
  title,
  color,
}: Readonly<CategoryGridTileProps>) {
  const { navigate } = useNavigation<NavigationProp<ParamListBase>>()

  function onTilePressHandler() {
    navigate(Screens.MealsOverview, { categoryId: id })
  }

  return (
    <View style={[styles.rootContainer, { backgroundColor: color }]}>
      <Pressable
        onPress={onTilePressHandler}
        style={styles.button}
        android_ripple={{ color: '#ccc' }}
      >
        <View style={styles.innerContainer}>
          <Text style={styles.title}>{title}</Text>
        </View>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  rootContainer: {
    height: 150,
    width: 150,
    flex: 1,
    margin: 16,
    borderRadius: 8,
    elevation: 3,
    backgroundColor: 'white',
    overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
  },
  button: {
    flex: 1,
  },
  buttonPressed: {
    opacity: 0.5,
  },
  innerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18,
  },
})

export default CategoryGridTile
