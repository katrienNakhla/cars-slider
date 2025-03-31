import { StyleSheet, Text } from "react-native";
import React from "react";
import { Stagger } from "@animatereactnative/stagger";

const StaggerContent = () => {
  return (
    <Stagger
      initialEnteringDelay={1000}
      duration={500}
      stagger={100}
      style={{
        flex: 0.5,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text
        style={{
          color: "white",
          fontWeight: 500,
          opacity: 0.6,
          textAlign: "center",
        }}
      >
        Welcom to
      </Text>
      <Text
        style={{
          color: "white",
          fontWeight: "bold",
          fontSize: 28,
          marginBottom: 16,
          textAlign: "center",
        }}
      >
        Super Cars
      </Text>
      <Text
        style={{
          color: "white",
          opacity: 0.8,
          paddingHorizontal: 20,
          textAlign: "center",
        }}
      >
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book.
      </Text>
    </Stagger>
  );
};

export default StaggerContent;

const styles = StyleSheet.create({});
