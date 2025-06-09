import React from 'react';
import { TouchableOpacity, Text, StyleSheet, GestureResponderEvent } from 'react-native';

/**
 * Primary action button component.
 * Usage:
 * ```tsx
 * <Button label="Click me" onPress={() => console.log('Pressed')} />
 * ```
 *
 * @bgui-meta category="control" platform="ios,android,web" theme="light|dark"
 */
export interface ButtonProps {
  /** Text shown inside the button */
  label: string;
  /** Called when the user presses the button */
  onPress?: (event: GestureResponderEvent) => void;
}

/**
 * Basic cross-platform button.
 * @bgui-meta category="control" platform="ios,android,web" theme="light|dark"
 */
export const Button: React.FC<ButtonProps> = ({ label, onPress }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Text style={styles.text}>{label}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 12,
    paddingHorizontal: 16,
    backgroundColor: '#007bff',
    borderRadius: 4,
  },
  text: {
    color: '#fff',
    textAlign: 'center',
  },
});

export default Button;
