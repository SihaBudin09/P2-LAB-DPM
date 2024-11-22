import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Animated } from 'react-native';
import { useState } from 'react';

export default function App() {
  const [scale] = useState(new Animated.Value(1));

  // Efek animasi saat kotak dihover
  const handlePressIn = () => {
    Animated.spring(scale, {
      toValue: 1.1,
      friction: 3,
      useNativeDriver: true,
    }).start();
  };

  const handlePressOut = () => {
    Animated.spring(scale, {
      toValue: 1,
      friction: 3,
      useNativeDriver: true,
    }).start();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>R.M CHOIR SIHABUDIN</Text>
      <View style={styles.boxContainer}>
        <Animated.View
          style={[
            styles.box,
            { backgroundColor: '#FF6347', transform: [{ scale }] },
          ]}
          onTouchStart={handlePressIn}
          onTouchEnd={handlePressOut}
        ></Animated.View>
        <Animated.View
          style={[
            styles.box,
            { backgroundColor: '#20B2AA', transform: [{ scale }] },
          ]}
          onTouchStart={handlePressIn}
          onTouchEnd={handlePressOut}
        ></Animated.View>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F8FF', // Latar belakang biru muda
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  text: {
    fontSize: 28, // Ukuran font lebih besar untuk meningkatkan keterbacaan
    color: '#1E90FF', // Warna biru cerah
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 30,
    fontFamily: 'sans-serif-condensed', // Menambahkan font yang lebih menarik
  },
  boxContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
    alignItems: 'center',
    marginTop: 20,
  },
  box: {
    width: 120, // Membesarkan ukuran kotak
    height: 120,
    borderRadius: 15, // Sudut kotak yang lebih melengkung
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 6,
    marginHorizontal: 10, // Memberikan jarak antar kotak
    borderWidth: 2, // Menambahkan border pada kotak
    borderColor: '#fff', // Warna border putih
  },
});
