import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { useAssets } from "expo-asset";
import { ResizeMode, Video } from "expo-av";
import { Link } from "expo-router";
import { defaultStyles } from "@/constants/Styles";
import Colors from "@/constants/Colors";
import { rgbaColor } from "react-native-reanimated/lib/typescript/reanimated2/Colors";


const Page = () => {
  const [assets] = useAssets([require("@/assets/videos/intro2.mp4")]);
  return (
    <View style={styles.container}>
      {assets && (
        <Video
          resizeMode={ResizeMode.COVER}
          isMuted
          isLooping
          shouldPlay
          source={{ uri: assets[0].uri }}
          style={styles.video}
        />
      )}
      <View style={{padding:30}}>
        <Text style={styles.header}>Ready to change the way you save!</Text>
      </View>
      <View style={styles.buttons}>
        <Link href={'/signup'} asChild style={[defaultStyles.pillButton, {flex:1, backgroundColor: "white"}]}>
        <TouchableOpacity>
          <Text style={{color: "black", fontSize:17, fontWeight:"bold"}}>Sign Up</Text>
        </TouchableOpacity>
       </Link>
       <Link href={"/login"} asChild style={[defaultStyles.pillButton, {flex:1, backgroundColor: Colors.dark}]}>
        <TouchableOpacity>
          <Text style={styles.buttonColor}>Login</Text>
        </TouchableOpacity>
       </Link>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    
  },
  video: {
    width: "100%",
    height: "100%",
    position: "absolute",
    
  },
  header: {
    textTransform: "uppercase",
    fontWeight: "bold",
    fontSize: 25,
    color: "rgba(4, 110, 112, 0.9)",
    textAlign: "center",
    marginBottom: 20,
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "center",
    gap:40,
    paddingHorizontal: 30,
  },
  buttonColor: {
    color: Colors.lightGray,
    fontWeight: "bold",
    fontSize:17
  }
});

export default Page;
