import { Image } from "react-native";
import React from "react";
import Animated from "react-native-reanimated";
import { _itemHeight, _itemWidth } from "../constants";

function SliderItem({ image }: { image: string }) {
  return (
    <Animated.View
      style={{
        width: _itemWidth,
        height: _itemHeight,
      }}
    >
      <Image source={{ uri: image }} style={{ flex: 1, borderRadius: 16 }} />
    </Animated.View>
  );
}
export default SliderItem;
