import {
  Text,
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Image,
  Button,
  Linking,
  
} from "react-native";
import { TarjetaExperiencia } from "@/components/TarjetaExperiencia";
import { experiencias } from "@/data/experiencia";
import { Iconos } from "@/components/Iconos";

const onGithubPressHandler = () => {
  Linking.openURL("https://github.com/YeseniaDavalos");
};

const onTwitterPressHandler = () => {
  Linking.openURL("https://www.linkedin.com/in/yesenia-davalos-buitrago-developer/");
};

const onAtPressHandler = () => {
  Linking.openURL("https://www.linkedin.com/in/yesenia-davalos-buitrago-developer/");
};

const onInstagramPressHandler = () => {
  Linking.openURL("https://www.instagram.com/yessdavalos/");
};

const onFacebookPressHandler = () => {
  Linking.openURL("https://www.instagram.com/yessdavalos/");
};

export default function Index() {
  return (
    <SafeAreaView style={styles.contenido}>
      <ScrollView>
        <View style={styles.contentContainer}>
          <Image
            source={require("@/assets/images/bannerOne.png")}
            style={styles.banner}
          />
          <Image
            source={require("@/assets/images/yess.jpeg")}
            style={styles.imagenPersonal}
          />
          <Text style={styles.title}>Yesenia Dávalos Buitrago</Text>

          {/* Pasamos las funciones como props */}
          <Iconos
            onGithubPress={onGithubPressHandler}
            onTwitterPress={onTwitterPressHandler}
            onAtPress={onAtPressHandler}
            onInstagramPress={onInstagramPressHandler}
            onFacebookPress={onFacebookPressHandler}
          />

          <Button title="Contacto" onPress={onAtPressHandler} />

          <Text style={styles.bio}>
            Apasionada desarrolladora que disfruta construyendo experiencias digitales impactantes.
            Actualmente explorando el mundo de React Native y el desarrollo móvil.
            Me encanta aprender, compartir conocimientos y enfrentar nuevos desafíos en tecnología.
          </Text>

          <Text style={styles.experiencia}>Experiencia</Text>

          {experiencias.map((experiencia, index) => (
            <TarjetaExperiencia
              key={index}
              logo={experiencia.logo}
              posicion={experiencia.posicion}
              empresa={experiencia.empresa}
              fecha={experiencia.fecha}
              locacion={experiencia.locacion}
              tecnologias={experiencia.tecnologias}
            />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

// Estilos
const styles = StyleSheet.create({
  contenido: {
    flex: 1,
  },
  contentContainer: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    color: "darkblue",
  },
  banner: {
    width: "100%",
    aspectRatio: 16 / 9,
  },
  imagenPersonal: {
    width: 200,
    height: 200,
    borderRadius: 100,
    borderWidth: 5,
    borderColor: "white",
    marginTop: -100,
  },
  bio: {
    fontSize: 12,
    lineHeight: 18,
    textAlign: "center",
    marginHorizontal: 20,
  },
  experiencia: {
    fontWeight: "bold",
    fontSize: 18,
    marginTop: 20,
    color: "darkblue",
    marginBottom: 10,
  },
});
