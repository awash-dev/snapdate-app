import { View, Image, StyleSheet, Text } from "react-native";
import React from "react";

import * as WebBrowser from "expo-web-browser";
WebBrowser.maybeCompleteAuthSession(); 
import { useOAuth } from "@clerk/clerk-expo";
import { useWarmUpBrowser } from "../hooks/useWarmUpBrowser";


export default function Login() { 
  useWarmUpBrowser();

  const { startOAuthFlow } = useOAuth({ strategy: [] });

  const onPress = React.useCallback(async () => {
    try {
      const { createdSessionId, signIn, signUp, setActive } =
        await startOAuthFlow();

      if (createdSessionId) {
        setActive({ session: createdSessionId });
      } else {
        // Use signIn or signUp for next steps such as MFA
      }
    } catch (err) {
      console.error("OAuth error", err);
    }
  }, []);
  return (
    <View style={{ alignItems: "center" }}>
      <Image
        source={require("./../../assets/happy.jpg")}
        style={styles.LoginImage}
      />
      <View style={styles.subContainer}>
        <Text
          style={{
            textAlign: "center",
            fontSize: 27,
            padding: 15,
            color: "white",
          }}
        >
          Wellcome For Span Ethiopia
        </Text>
        <Text style={{ fontSize: 25, color: "#5f5f5f", marginTop: 20 }}>
          Sign with{" "}
        </Text > 

        <View style={styles.Loginbtn}>
          <Text   onPress={() => {
              console.log("apple");
            }}>
            <Image
              source={require("./../../assets/Google.png")}
              style={{ width: 50, height: 50 }}
            />
          </Text>
          <Text
          onPress={onPress}
          >
            {" "}
            <Image
              source={require("./../../assets/facebook.jpeg")}
              style={{ width: 50, height: 50, borderRadius: 15 }}
            />
          </Text>

          <Text
            onPress={() => {
              console.log("apple");
            }}
          >
            <Image
              source={require("./../../assets/apple.png")}
              style={{ width: 50, height: 50, borderRadius: 15 }}
            />
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  LoginImage: {
    marginTop: 10,
    height: 400,
    width: 250,
    borderWidth: 4,
    borderColor: "black",
    borderRadius: 25,
    marginTop: 70,
  },
  subContainer: {
    width: "100%",
    backgroundColor: "#ED760E",
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    height: "70%",
    alignItems: "center",
  },
  Loginbtn: {
    flex: 1,
    flexDirection: "row",
    gap: 40,
    marginTop: 20,
    borderRadius: 15,
  },
});
