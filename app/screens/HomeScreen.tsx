import { StyleSheet, Text, Image, View, Dimensions } from "react-native";
import React, { useState } from "react";
import { Asset } from "expo-asset";
import Animated, {
  FadeIn,
  FadeOut,
  runOnJS,
  Easing,
  useAnimatedReaction,
  useSharedValue,
  FadeInUp,
} from "react-native-reanimated";
import StaggerContent from "../components/StaggerContent";
import Slider from "../components/Slider";
import { _itemSize, Images } from "../constants";

const HomeScreen = () => {
  const offset = useSharedValue(0);
  const [activeIndex, setActiveIndex] = useState(0);

  useAnimatedReaction(
    () => {
      const floatingIndex =
        ((offset.value + _itemSize / 2) / _itemSize) % Images.length;
      return Math.abs(Math.floor(floatingIndex));
    },
    (value) => {
      runOnJS(setActiveIndex)(value);
    }
  );

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "black",
      }}
    >
      <View style={[StyleSheet.absoluteFillObject]}>
        <Animated.Image
          key={`bg-image-${activeIndex}`}
          source={{ uri: Images[activeIndex] }}
          style={{ flex: 1 }}
          blurRadius={50}
          entering={FadeIn.duration(1000)}
          exiting={FadeOut.duration(1000)}
        />
      </View>
      <Slider offset={offset} />
      <StaggerContent />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
