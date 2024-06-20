import React from 'react'
import {
  GestureResponderEvent,
  Pressable,
  PressableStateCallbackType,
  StyleProp,
  StyleSheet,
  ViewStyle,
} from 'react-native'

type IconButtonProps = {
  onPress: (event: GestureResponderEvent) => void
  style?: StyleProp<ViewStyle>
  children: React.ReactNode
}

export default function IconButton({
  onPress,
  style,
  children,
}: Readonly<IconButtonProps>) {
  const getStyles = (state: PressableStateCallbackType) => {
    if (state.pressed) {
      return [styles.pressed, style]
    }
    return style
  }

  return (
    <Pressable style={(state) => getStyles(state)} onPress={onPress}>
      {children}
    </Pressable>
  )
}

const styles = StyleSheet.create({
  pressed: {
    opacity: 0.7,
  },
})
