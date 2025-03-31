import { Dimensions } from "react-native";
import { Asset } from "expo-asset";

export const Images = [
  Asset.fromModule(require("./assets/car1.jpeg")).uri,
  Asset.fromModule(require("./assets/car2.jpeg")).uri,
  Asset.fromModule(require("./assets/car3.jpeg")).uri,
  Asset.fromModule(require("./assets/car4.jpeg")).uri,
  Asset.fromModule(require("./assets/car5.jpeg")).uri,
  Asset.fromModule(require("./assets/car6.jpeg")).uri,
  Asset.fromModule(require("./assets/car7.jpeg")).uri,
  Asset.fromModule(require("./assets/car8.jpeg")).uri,
];

export const { width } = Dimensions.get("window");
export const _itemWidth = width * 0.62;
export const _itemHeight = _itemWidth * 1.67;
export const _spacing = 16;
export const _itemSize = _itemWidth + _spacing;
