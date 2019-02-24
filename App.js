import React, { Component } from "react";
import { Platform, StyleSheet, Text, View, Slider } from "react-native";
import Video from "react-native-video";

export default class App extends Component {
  state = {
    rate: 1,
    fps: 24
  };

  handleSlider = fps => {
    const rate = fps / 24;
    this.setState({
      rate,
      fps
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <Video
          source={require("./ballfall.mp4")}
          style={styles.backgroundVideo}
          rate={this.state.rate}
          repeat
        />
        <Text style={{ marginBottom: 20, alignSelf: "center", fontSize: 20 }}>
          Current fps: {this.state.fps}
        </Text>
        <Slider
          minimumValue={1}
          maximumValue={24}
          step={1}
          value={24}
          style={{ marginBottom: 20 }}
          onValueChange={this.handleSlider}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5FCFF",
    justifyContent: "flex-end"
  },
  backgroundVideo: {
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0
  }
});

/*
    //instead of photo could be used any file/media
    const photo = {
      uri: photoUri,
      type: 'multipart/form-data',
      name: 'photo.jpg',
    };
 
    const body = new FormData();
    body.append('someKey', 'message');
    body.append('media', photo);
    body.append('title', 'A beautiful photo!');
    //append here anything you need

    const options = {
       method: 'post',
       headers: {
       'Content-Type': 'multipart/form-data',
       },
       body
    }

    fetch(serverURL, options).then(response => console.log("done")).catch(err => console.log("error"))
*/
