import React from "react";
import { ScrollView, StyleSheet, Animated } from "react-native";
import { DrawerItems, SafeAreaView } from "react-navigation";
import { Text } from "react-native-elements";

export const CustomDrawerContentComponent = props => {
  const translateX = props.drawerOpenProgress.interpolate({
    inputRange: [0, 1],
    outputRange: [-100, 0]
  });
  return (
    <Animated.View style={{ transform: [{ translateX }] }}>
      <ScrollView>
        <SafeAreaView
          style={styles.container}
          forceInset={{ top: "always", horizontal: "never" }}
        >
          <Text>Salva Brás</Text>
          <DrawerItems {...props} />
          <Text>Sair</Text>
        </SafeAreaView>
      </ScrollView>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
