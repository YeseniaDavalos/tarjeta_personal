import React from "react";
import { View, StyleSheet, Pressable, } from "react-native";
import { Icono } from "@/components/Icono";

interface IconosProps {
    onGithubPress: () => void;
    onTwitterPress: () => void;
    onAtPress: () => void;
    onInstagramPress: () => void;
    onFacebookPress: () => void;
  }
  
  export const Iconos = ({
    onGithubPress,
    onTwitterPress,
    onAtPress,
    onInstagramPress,
    onFacebookPress,
  }: IconosProps) => {
    return (
      <View style={styles.contenedorIconos}>
        <Icono
          icon="github"
          size={24}
          color="darkblue"
          activeColor="deepskyblue"
          onPress={onGithubPress}
        />
        <Icono
          icon="x-twitter"
          size={24}
          color="darkblue"
          activeColor="deepskyblue"
          onPress={onTwitterPress}
        />
        <Icono
          icon="at"
          size={24}
          color="darkblue"
          activeColor="deepskyblue"
          onPress={onAtPress}
        />
        <Icono
          icon="instagram"
          size={24}
          color="darkblue"
          activeColor="deepskyblue"
          onPress={onInstagramPress}
        />
        <Icono
          icon="facebook"
          size={24}
          color="darkblue"
          activeColor="deepskyblue"
          onPress={onFacebookPress}
        />
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    contenedorIconos: { flexDirection: "row", marginVertical: 10, gap: 15 },
  });