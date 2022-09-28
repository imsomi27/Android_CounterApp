/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import React, {useState} from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import Counter from './components/Counter';

const App = () => {
  const [count, setCount] = useState(10);

  const onIncrease = () => setCount(count + 1);
  const onDecrease = () => setCount(count - 1);

  return (
    <SafeAreaView style={styles.full}>
      <Counter count={count} onIncrease={onIncrease} onDecrease={onDecrease} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  full: {
    flex: 1,
  },
});
// const App = () => {
//   return <SafeAreaView style={styles.full} />;
// };

// const styles = StyleSheet.create({
//   full: {
//     flex: 1,
//   },
// });
//   const [visible, setVisible] = useState(true);
//   const onPress = () => {
//     setVisible(!visible);
//   };
//   return (
//     <SafeAreaView>
//       <Button title="버튼" onPress={onPress} />
//       {visible ? <Box rounded={true} size="large" color="blue" /> : null}
//     </SafeAreaView>
//   );
// };

export default App;
