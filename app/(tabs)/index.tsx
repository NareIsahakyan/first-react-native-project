import {
  Image,
  StyleSheet,
  Platform,
  ImageBackground,
  Text,
  Button,
  Pressable,
  TextInput,
} from "react-native";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import { View } from "react-native";
import { ScrollView } from "react-native";
import React from "react";

function onPressFunction() {}

function onPressButton() {}

export default function HomeScreen() {
  const [name, onChangeName] = React.useState("");
  const [email, onChangeEmail] = React.useState("");
  const [data, onChangeData] = React.useState("");
  const [time, onChangeTime] = React.useState("");
  const [people, onChangePeople] = React.useState("");

  return (
    <ScrollView style={styles.container} nestedScrollEnabled>
      <SafeAreaView>
        <ImageBackground source={require("@/assets/images/img/bg1.png")}>
          <View style={styles.headerStyle}>
            <Image
              resizeMode="cover"
              source={require("@/assets/images/img/01.png")}
            />
            <Text style={styles.text}>Express Delivery +1 234 567 890</Text>
          </View>
          <Image source={require("@/assets/images/img/logo.png")} />
        </ImageBackground>

        <ImageBackground>
          <View>
            <Text style={styles.text1}>
              IT IS GOOD TIME FOR THE GREATE TASTEA OF BURGERS
            </Text>
            <Text style={styles.H1}>BURGER</Text>
            <Text style={styles.H1}>WEEK</Text>
            <Image
              resizeMode="contain"
              source={require("@/assets/images/img/img1.png")}
            />
          </View>
        </ImageBackground>
        <ImageBackground
          source={require("@/assets/images/img/001.png")}
          style={styles.reactLogo1}
        >
          <Text style={styles.textTry}>TRY IT TODAY</Text>
          <Text style={styles.textTry}>MOST POPULAR BURGER</Text>
        </ImageBackground>
        <ImageBackground
          source={require("@/assets/images/img/002.png")}
          style={styles.reactLogo1}
        >
          <Text style={styles.textTry}>TRY IT TODAY</Text>
          <Text style={styles.textTry}>MORE FUN</Text>
          <Text style={styles.textTry}>MORE TASTE</Text>
        </ImageBackground>

        <ImageBackground
          source={require("@/assets/images/img/img4.png")}
          style={styles.reactLogo1}
        >
          <Text style={styles.textTry}>TRY IT TODAY</Text>
          <Text style={styles.textTry}>FRESH & CHILI</Text>
        </ImageBackground>
        <Text style={styles.H1Withbg}>Always Tasty Burger</Text>
        <Text style={styles.H1center}>CHOOSE & ENJOY</Text>
        <Text style={styles.text2}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum
          suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan
          lacus vel facilisis.
        </Text>
        <ScrollView style={styles.innerscrolview} horizontal>
          <View style={styles.bgImages}>
            <Image
              resizeMode="contain"
              source={require("@/assets/images/img/004.png")}
              style={{ height: 250 }}
            />
            <Text style={styles.H2}>Lorem ipsum dolor</Text>
            <Text style={styles.text2}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.
            </Text>
            <Pressable style={styles.button} onPress={onPressFunction}>
              Order Now
            </Pressable>
          </View>

          <View style={styles.bgImages}>
            <Image
              resizeMode="contain"
              source={require("@/assets/images/img/005.png")}
              style={{ height: 250 }}
            />
            <Text style={styles.H2}>Lorem ipsum dolor</Text>
            <Text style={styles.text2}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.
            </Text>
            <Pressable style={styles.button} onPress={onPressFunction}>
              Order Now
            </Pressable>
          </View>

          <View style={styles.bgImages}>
            <Image
              resizeMode="contain"
              source={require("@/assets/images/img/004.png")}
              style={{ height: 250 }}
            />
            <Text style={styles.H2}>Lorem ipsum dolor</Text>
            <Text style={styles.text2}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.
            </Text>
            <Pressable style={styles.button} onPress={onPressFunction}>
              Order Now
            </Pressable>
          </View>
        </ScrollView>

        <View style={styles.bgShadow}>
          <Text style={styles.H1}>Discover</Text>
          <Text style={styles.H1}>Upcoming Events</Text>
          <Text style={styles.text3}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
            ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas
            accumsan lacus vel facilisis.
          </Text>
          <Image
            resizeMode="center"
            source={require("@/assets/images/img/img2.png")}
          />
        </View>
        <Text style={styles.H3}>Reservation</Text>
        <Text style={styles.H1center}>Book your table</Text>
        <View style={styles.reservation}>
          <TextInput
            style={styles.input}
            onChangeText={onChangeName}
            placeholder="NAME"
            keyboardType="default"
            value={name}
          />
          <TextInput
            style={styles.input}
            onChangeText={onChangeEmail}
            placeholder="EMAIL"
            keyboardType="email-address"
            value={email}
          />
          <TextInput
            style={styles.input}
            onChangeText={onChangeData}
            placeholder="DATA"
            keyboardType="numbers-and-punctuation"
            value={data}
          />
          <TextInput
            style={styles.input}
            onChangeText={onChangeTime}
            placeholder="TIME"
            keyboardType="numbers-and-punctuation"
            value={time}
          />
          <TextInput
            style={styles.input}
            onChangeText={onChangePeople}
            placeholder="PEOPLE"
            keyboardType="numeric"
            value={people}
          />
          <Pressable style={styles.button} onPressIn={onPressButton}>
            FIND A TABLE
          </Pressable>
        </View>
        <ImageBackground
          source={require("@/assets/images/img/003.png")}
          style={styles.reactLogo}
        >
          <Image
            resizeMode="stretch"
            source={require("@/assets/images/img/logo1.png")}
            style={styles.logostyle}
          />
          <Text style={styles.textTry}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
            ipsum suspendisse ultrices gravida. Risus commodo viver ra maecenas
            accumsan lacus vel facilisis.
          </Text>
          <Text style={styles.textTry}>Main Road, Building Name, Country</Text>
          <Text style={styles.textTry}>info@companyname.com</Text>
          <Text style={styles.textTry}>
            © Company Name 2020. All rights reserved.
          </Text>
        </ImageBackground>
      </SafeAreaView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  reservation: {
    alignItems: "center",
    flex: 1,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    width: 250,
  },
  bgShadow: {
    boxShadow: [
      {
        offsetX: 30,
        offsetY: 0,
        blurRadius: 15,
        spreadDistance: 10,
        color: "rgb(19, 18, 18)",
        inset: false,
      },
    ],
  },
  button: {
    height: 40,
    color: "#FAF8F4",
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 5,
    backgroundColor: "#9B4F50",
    width: 200,
    flexDirection: "column",
    justifyContent: "center",
  },
  headerStyle: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "baseline",
  },
  innerscrolview: {
    flex: 1,
    padding: 5,
    height: 160,
  },
  textTry: {
    color: "#FAF8F4",
    fontSize: 12,
    fontWeight: "bold",
    textAlign: "left",
    paddingLeft: 5,
  },
  bgImages: {
    margin: 25,
    justifyContent: "center",
    alignItems: "center",
    width: 370,
    padding: 15,
  },
  H1: {
    fontSize: 48,
    color: "#543608",
    fontWeight: "bold",
    textAlign: "left",
    paddingLeft: 5,
  },
  H2: {
    fontSize: 36,
    color: "#543608",
    fontWeight: "bold",
    textAlign: "center",
  },
  H3: {
    fontSize: 28,
    color: "#543608",
    fontWeight: "bold",
    textAlign: "center",
  },
  H1Withbg: {
    fontSize: 36,
    color: "#543608",
    fontWeight: "bold",
    textAlign: "center",
    padding: 3,
    backgroundColor: "#F9AF3D",
  },
  H1center: {
    fontSize: 36,
    color: "#543608",
    fontWeight: "bold",
    textAlign: "center",
    paddingLeft: 5,
  },
  container: {
    flex: 1,
    padding: 5,
  },
  image: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 5,
    left: 1,
    right: 1,
    top: 1,
  },
  text: {
    color: "#543608",
    fontSize: 14,
    lineHeight: 84,
    fontWeight: "bold",
    textAlign: "center",
    paddingLeft: 5,
  },
  text1: {
    color: "#543608",
    fontSize: 14,
    lineHeight: 36,
    fontWeight: "bold",
    textAlign: "center",
    paddingTop: 5,
  },
  text2: {
    color: "#543608",
    fontSize: 18,
    textAlign: "center",
    paddingTop: 5,
  },
  text3: {
    color: "#543608",
    fontSize: 18,
    textAlign: "left",
    paddingTop: 5,
  },
  reactLogo: {
    height: 250,
    width: 385,
    marginBottom: 8,
    gap: 15,
  },
  reactLogo1: {
    height: 150,
    width: 385,
    marginBottom: 8,
  },
  logostyle: {
    width: 250,
    height: 50,
    margin: 5,
  },
});
