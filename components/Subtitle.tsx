import React from 'react'
import { StyleProp, StyleSheet, Text, TextStyle } from 'react-native'

type SubtitleProps = {
  children: React.ReactNode
  style?: StyleProp<TextStyle>
}

export default function Subtitle({ children, style }: Readonly<SubtitleProps>) {
  return <Text style={[styles.subtitle, style]}>{children}</Text>
}

const styles = StyleSheet.create({
  subtitle: {
    color: '#e2b497',
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 4,
    padding: 6,
    textAlign: 'center',
    borderBottomColor: '#e2b497',
    borderBottomWidth: 2,
  },
})
