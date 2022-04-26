import React from 'react';
import {TouchableOpacity, StyleSheet, Text} from 'react-native';

type Props = {
  children: string;
};

export function Button({children}: Props) {
  return (
    <TouchableOpacity style={styles.button}>
      <Text>{children}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    borderColor: 'purple',
    borderWidth: 3,
  },
});
