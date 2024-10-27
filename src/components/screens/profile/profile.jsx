import { Text, View } from "react-native";
import { styles } from "./profile.style.js";

function Profile() {
  return (
    <View style={styles.container}>
      <View style={styles.item}>
        <Text style={styles.title}>Nome</Text>
        <Text style={styles.text}>Lúcio</Text>
      </View>
      <View style={styles.item}>
        <Text style={styles.title}>Nome</Text>
        <Text style={styles.text}>Lúcio</Text>
      </View>
    </View>
  );
}

export default Profile;
