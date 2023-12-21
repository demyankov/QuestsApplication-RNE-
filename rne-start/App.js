import { StyleSheet, SafeAreaView } from "react-native";
import { Header, ContentSection } from "./components";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <ContentSection />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
