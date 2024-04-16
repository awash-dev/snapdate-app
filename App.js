import { StyleSheet, Text, View } from "react-native";
import Login from "./App/Login/Login";
import { ClerkProvider, SignedIn, SignedOut } from "@clerk/clerk-expo";
export default function App() {
  return (
    <ClerkProvider publishableKey="pk_test_aGVhbHRoeS1iYXJuYWNsZS05Ny5jbGVyay5hY2NvdW50cy5kZXYk">
      <View style={styles.container}>
        <Login />
        <SignedIn>
          <Text>You are Signed in</Text>
        </SignedIn>

        
        <SignedOut>
          <Login />
        </SignedOut>
      </View>
    </ClerkProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 20,
  },
});
