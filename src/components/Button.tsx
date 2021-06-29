import React from 'react';
import { TouchableOpacity, TouchableOpacityProps, Text, StyleSheet } from 'react-native'

interface ButtonProps extends TouchableOpacityProps {
  title: string;

};

export function Button({ title, ...rest }: ButtonProps) {
  return (
    <TouchableOpacity
      style={styles.button}
      activeOpacity={0.61}
      {...rest}
    >
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "orange",
    padding: 15,
    borderRadius: 7,
    alignItems: 'center',
    marginTop: 10,
  },

  buttonText: {
    color: "#fff",
    fontSize: 17,
    fontWeight: 'bold'
  },


});
