import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Marquee } from "@animatereactnative/marquee";
import Animated, {
  Easing,
  FadeInUp,
  SharedValue,
} from "react-native-reanimated";
import { _itemHeight, _spacing, Images } from "../constants";
import SliderItem from "./SliderItem";

const Slider = ({ offset }: SharedValue<number>) => {
  return (
    <Marquee spacing={_spacing} position={offset}>
      <Animated.View
        entering={FadeInUp.delay(500)
          .duration(1000)
          .easing(Easing.elastic(0.9))
          .withInitialValues({
            transform: [{ translateY: -_itemHeight / 2 }],
          })}
        style={{ flexDirection: "row", gap: _spacing }}
      >
        {Images.map((image, index) => {
          return <SliderItem key={`image-${index}`} image={image} />;
        })}
      </Animated.View>
    </Marquee>
  );
};

export default Slider;

const styles = StyleSheet.create({});
