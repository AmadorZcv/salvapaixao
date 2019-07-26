import React from "react";
import { ScrollView, StyleSheet, Animated, View } from "react-native";
import { DrawerItems, SafeAreaView } from "react-navigation";
import { Text } from "react-native-elements";
import { Color } from "../styles";

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
          <View>
            <Text>Perfil</Text>
          </View>
          <View>
            <Text>Icones</Text>
          </View>
          <View>
            <Text>Final</Text>
          </View>
          <Text>Salva Brás</Text>
          <DrawerItems {...props} />
          <Text style={{ flex: 1, justifyContent: "flex-end" }}>Sair</Text>
        </SafeAreaView>
      </ScrollView>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.background
  }
});
