import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button,Image } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.view0}>
      <Image source= {require('D:/thiết kế hệ thống web/LT_ThietBiDiDong/Bai1reactive/assets/images.png')}
      style={{width:'100px',height:'100px'}}></Image>
      </View>
      <View style={styles.view1} >
        <text>
        GROW
    
        </text>
      </View>
      <View style={styles.view2}>
        <text>
        YOUR BUSINESS
        </text>
      </View>
      <View style={styles.view3}>
        <text>
        We will help you to grow your business using
        </text>
        <text> online sever</text>
      </View>
      <View style={styles.view4}>
  <Button title="Login" color="black" />
  <Button title="Sign Up" color="black" />
  </View>
      <View style={styles.view5}>
      <text>HOW WE WORK ? </text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  backgroundColor: '#4edbfb',

  },
  view0: {
    flex: 3 ,
    alignItems: "center",
    justifyContent: "space-around"
  },
  view1: {
    flex: 2 ,
    alignItems: "center",
    justifyContent: "flex-end",
  },
  view2:{
    flex: 1,
    alignItems: "center",
   
  },
  view3:{
    flex: 1,
    alignItems: "center",
    justifyContent: "between"
  },
  view4:{
    flex: 1,
    alignItems: "center",
    flexDirection: "ROW",
    justifyContent: "space-around",
    fontWeight: 'bold',
  },
  view5:{
    flex: 3,
    alignItems: "center",
    justifyContent: "between",
  },

});
