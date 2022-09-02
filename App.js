import React, { useState } from "react";
import { Dimensions, StyleSheet, Text, View, TouchableOpacity } from "react-native";
import Board from "./Board";

const windowWidth = Dimensions.get("window").width;

export default function App() {
  const [player, setPlayer] = useState("X");

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>PLAY TIC TAC TOE</Text>
      <View style={[styles.rowTurn, { backgroundColor: player === "X" ? "#d059ff" : "#33909e" }]}>
        <Text style={styles.turn}>Turn: Player {player}</Text>
      </View>
      <View>
        <Board width={windowWidth} player={player} setPlayer={setPlayer} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    marginTop: 70,
  },
  heading: {
    fontSize: 40,
    fontWeight: "bold",
  },

  rowTurn: {
    display: "flex",
    flexDirection: "row",
    backgroundColor: "#ad6fda",
    marginTop: 40,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
  },
  turn: {
    fontSize: 40,
    fontWeight: "bold",
    marginTop: 0,
  },
});
