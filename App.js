import { View, Text, SafeAreaView, StyleSheet, TextInput, Button, Pressable} from 'react-native';
import { useState } from 'react';

export default function App() {
  const [count, setCount] = useState(0)
  const [inputValue, setInputValue] = useState('');

  function handleClick() {
    setCount(count + 1);
  }

  function handleClick2() {
    setCount(count - 1);
  }

  const Sifirla = () => {
    setCount(0)
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.counter}>{inputValue}</Text>
      <Text style={styles.counter}>{count}</Text>

      <View style={styles.button}>
      <Pressable  
      style={styles.button1}
      onPress={handleClick}
      >
      <Text style={styles.text1}>Arttır</Text>
      </Pressable>

      <Pressable 
      style={styles.button2}
      onPress={handleClick2}>
      <Text style={styles.text2}>Azalt</Text>
      </Pressable>

      
      <Pressable style={styles.button3}
      onPress={Sifirla}
      >
      <Text style={styles.text3}>Sıfırla</Text>
      </Pressable>


      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
    alignItems: "center",
  },
  button: {
    bottom: 50,
  },
  button1: {
    borderRadius: 10,
  },
  counter: {
    fontSize: 50,
    fontWeight: "bold",
    bottom: 100,
  },
  button1: {
    borderRadius: 20,
    width: 90,
    height: 40,
    backgroundColor: "blue",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
  },
  button2: {
    borderRadius: 20,
    width: 90,
    height: 40,
    backgroundColor: "red",
    alignItems: "center",
    justifyContent: "center",
  },
  text1: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
  },
  text2: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
  },
  button3: {
    borderRadius: 20,
    width: 90,
    height: 40,
    backgroundColor: "green",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
  },
  text3: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
  },
});
