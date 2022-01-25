import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';

export default function App() {

  const [count, setCount] = useState(0)

  return (
    <View style={[styles.container, {backgroundColor: '#328f99', paddingTop: 10}]}>
      <Text style = {{fontSize: 30, padding: 10, backgroundColor: '#03e6ff', margin: 60,  borderRadius: 25}}>
        COUNTER APP
      </Text>
      <TouchableOpacity
        onPress={() => setCount(count+1)}
        style={styles.UpperTriangleShapeCSS}>
      </TouchableOpacity>
      <Text style={{fontSize: 50, color: '#fff'}}>
        {count}
      </Text>
      <TouchableOpacity
        onPress={() => setCount(count-1)}
        style={styles.LowerTriangleShapeCSS}>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => setCount(0)}
        style={[{backgroundColor: '#e84a4a', marginTop: 40, borderRadius: 25, padding: 7}]}>
        <Text style={[{color: '#faf0f0',fontSize: 40, alignItems: 'center', justifyContent: 'center'}]}> Reset </Text>
      </TouchableOpacity>
      {/* <StatusBar style="auto" /> */}
      <Text style={{marginTop: 80}}> &copy; Designed by Pratyush Raj </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  UpperTriangleShapeCSS: {
    borderBottomWidth: 120,
    borderLeftWidth: 60,
    borderRightWidth: 60,
    backgroundColor: 'transparent',
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderBottomColor: '#00BCD4'
  },
  LowerTriangleShapeCSS: {
        borderTopWidth: 120,
        borderRightWidth: 60,
        borderLeftWidth: 60,
        borderRightColor: 'transparent',
        borderBottomColor: 'transparent',
        borderLeftColor: 'transparent',
        borderTopColor: "#00BCD4",
  },
});
