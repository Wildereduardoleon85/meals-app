import { FlatList } from 'react-native'
import { CATEGORIES } from '../data/dummy-data'
import CategoryGridTile from '../components/CategoryGridTile'

function CategoriesScreen() {
  return (
    <FlatList
      key='categories'
      data={CATEGORIES}
      renderItem={({ item }) => (
        <CategoryGridTile id={item.id} title={item.title} color={item.color} />
      )}
      keyExtractor={(item) => item.id}
      numColumns={2}
    />
  )
}

export default CategoriesScreen
