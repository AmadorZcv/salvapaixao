import React, { PureComponent } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { Image } from "react-native-elements";

export default class Home extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        <View style={{ ...styles.cardLine, marginTop: 5 }}>
          <Image
            source={require("../img/index/spt-logo.png")}
            containerStyle={styles.card}
          />
          <Image
            source={require("../img/index/spm-logo.png")}
            containerStyle={styles.card}
          />
        </View>
        <View style={styles.cardLine}>
          <Image
            source={require("../img/index/spr-logo.png")}
            containerStyle={styles.card}
          />
          <Image
            source={require("../img/index/spl-logo.png")}
            containerStyle={styles.card}
          />
        </View>
        <View style={styles.cardLine}>
          <Image
            source={require("../img/index/spin-logo.png")}
            containerStyle={styles.card}
          />
          <Image
            source={require("../img/index/sq-logo.png")}
            containerStyle={styles.card}
          />
        </View>
        <View style={styles.cardLine}>
          <Image
            source={require("../img/index/sm-logo.png")}
            containerStyle={styles.card}
          />
          <Image
            source={require("../img/index/sb-logo.png")}
            containerStyle={styles.card}
          />
        </View>
        <View style={styles.cardLine}>
          <Image
            source={require("../img/index/sr-logo.png")}
            containerStyle={styles.card}
          />
          <Image
            source={require("../img/index/smb-logo.png")}
            containerStyle={styles.card}
            resizeMode={"stretch"}
            style={{ width: 170 }}
          />
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  cardLine: {
    flexDirection: "row",
    justifyContent: "center"
  },
  card: {
    margin: 5,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#e6e7e9"
  }
});
