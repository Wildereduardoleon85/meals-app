import { StyleSheet, Text, View } from 'react-native'

type ListProps = {
  items: string[]
}

export default function List({ items }: Readonly<ListProps>) {
  return items.map((items) => (
    <View style={styles.listItem} key={items}>
      <Text style={styles.itemtext}>{items}</Text>
    </View>
  ))
}

const styles = StyleSheet.create({
  listItem: {
    borderRadius: 6,
    paddingHorizontal: 8,
    paddingVertical: 4,
    marginVertical: 4,
    backgroundColor: '#e2b497',
  },
  itemtext: {
    color: '#351401',
    textAlign: 'center',
  },
})
