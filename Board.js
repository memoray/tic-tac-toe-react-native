import React, { useEffect, useState } from "react";
import { StyleSheet, View, Text, TouchableOpacity, Alert } from "react-native";
import XIcon from "react-native-vector-icons/MaterialCommunityIcons";
import OIcon from "react-native-vector-icons/MaterialCommunityIcons";

const Board = ({ windowWidth, player, setPlayer }) => {
  const [icons, setIcons] = useState([""]);

  const markSpot = (spot) => {
    if (!icons[spot]) {
      let cell = [...icons];
      cell[spot] = player;
      setIcons(cell);
      {
        player === "X" ? setPlayer("O") : setPlayer("X");
      }
    }
  };

  const determineWinner = (spot) => {
    const winningThree = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < winningThree.length; i++) {
      const [a, b, c] = winningThree[i];
      if (spot[a] && spot[a] === spot[b] && spot[a] === spot[c]) {
        return spot[a];
        {
          return null;
        }
      }
    }
  };

  useEffect(() => {
    const winner = determineWinner(icons);
    if (winner === "X") {
      Alert.alert("The Winner is:", "Player X", [
        { text: "Nice", onPress: () => restartGame() },
        { text: "Restart", onPress: () => restartGame() },
      ]);
    } else if (winner === "O") {
      Alert.alert("The Winner is:", "Player O", [
        { text: "Nice", onPress: () => restartGame() },
        { text: "Restart", onPress: () => restartGame() },
      ]);
    }
  }, [icons]);

  const restartGame = () => {
    setIcons([]);
    setPlayer("X");
  };

  return (
    <View>
      <View style={styles.board} width={windowWidth}>
        <TouchableOpacity style={styles.square1} onPress={() => markSpot(0)}>
          {icons[0] === "X" && <XIcon style={styles.xIcon} name={"window-close"} />}
          {icons[0] === "O" && <OIcon style={styles.oIcon} name={"circle-outline"} />}
        </TouchableOpacity>
        <TouchableOpacity style={styles.square2} onPress={() => markSpot(1)}>
          {icons[1] === "X" && <XIcon style={styles.xIcon} name={"window-close"} />}
          {icons[1] === "O" && <OIcon style={styles.oIcon} name={"circle-outline"} />}
        </TouchableOpacity>
        <TouchableOpacity style={styles.square3} onPress={() => markSpot(2)}>
          {icons[2] === "X" && <XIcon style={styles.xIcon} name={"window-close"} />}
          {icons[2] === "O" && <OIcon style={styles.oIcon} name={"circle-outline"} />}
        </TouchableOpacity>
        <TouchableOpacity style={styles.square4} onPress={() => markSpot(3)}>
          {icons[3] === "X" && <XIcon style={styles.xIcon} name={"window-close"} />}
          {icons[3] === "O" && <OIcon style={styles.oIcon} name={"circle-outline"} />}
        </TouchableOpacity>
        <TouchableOpacity style={styles.square5} onPress={() => markSpot(4)}>
          {icons[4] === "X" && <XIcon style={styles.xIcon} name={"window-close"} />}
          {icons[4] === "O" && <OIcon style={styles.oIcon} name={"circle-outline"} />}
        </TouchableOpacity>
        <TouchableOpacity style={styles.square6} onPress={() => markSpot(5)}>
          {icons[5] === "X" && <XIcon style={styles.xIcon} name={"window-close"} />}
          {icons[5] === "O" && <OIcon style={styles.oIcon} name={"circle-outline"} />}
        </TouchableOpacity>
        <TouchableOpacity style={styles.square7} onPress={() => markSpot(6)}>
          {icons[6] === "X" && <XIcon style={styles.xIcon} name={"window-close"} />}
          {icons[6] === "O" && <OIcon style={styles.oIcon} name={"circle-outline"} />}
        </TouchableOpacity>
        <TouchableOpacity style={styles.square8} onPress={() => markSpot(7)}>
          {icons[7] === "X" && <XIcon style={styles.xIcon} name={"window-close"} />}
          {icons[7] === "O" && <OIcon style={styles.oIcon} name={"circle-outline"} />}
        </TouchableOpacity>
        <TouchableOpacity style={styles.square9} onPress={() => markSpot(8)}>
          {icons[8] === "X" && <XIcon style={styles.xIcon} name={"window-close"} />}
          {icons[8] === "O" && <OIcon style={styles.oIcon} name={"circle-outline"} />}
        </TouchableOpacity>
      </View>
      <View style={styles.restartWrapper}>
        <TouchableOpacity style={styles.restartBtn} onPress={() => restartGame()}>
          <Text style={styles.restartText}>Restart Game</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Board;

const styles = StyleSheet.create({
  board: {
    flexDirection: "row",
    justifyContent: "center",
    flexWrap: "wrap",
    marginVertical: 70,
  },
  square1: {
    borderRightWidth: 6,
    borderBottomWidth: 6,
    width: 100,
    height: 100,
  },
  square2: {
    borderRightWidth: 6,
    borderBottomWidth: 6,
    width: 100,
    height: 100,
  },
  square3: {
    borderBottomWidth: 6,
    width: 100,
    height: 100,
  },
  square4: {
    borderRightWidth: 6,
    borderBottomWidth: 6,
    width: 100,
    height: 100,
  },
  square5: {
    borderRightWidth: 5,
    borderBottomWidth: 5,
    width: 100,
    height: 100,
  },
  square6: {
    borderBottomWidth: 6,
    width: 100,
    height: 100,
  },
  square7: {
    borderRightWidth: 6,
    width: 100,
    height: 100,
  },
  square8: {
    borderRightWidth: 6,
    width: 100,
    height: 100,
  },
  square9: {
    width: 100,
    height: 100,
  },
  xIcon: {
    fontSize: 100,
    color: "#d059ff",
  },
  oIcon: {
    fontSize: 90,
    padding: 5,
    color: "#33909e",
  },
  restartWrapper: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
  },
  restartBtn: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "black",
    padding: 15,
    borderRadius: 20,
    width: "55%",
  },
  restartText: {
    fontSize: 25,
    fontWeight: "bold",
    color: "white",
  },
});
