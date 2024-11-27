import { View, StyleSheet, Image} from 'react-native';
import {Link} from 'expo-router';



export default function App() {

const logoSpotify =

''

return (
    <View style={styles.container}>
      <View style={styles.box}>

      <Image style= {styles.logo} source={require('./img/logo.webp')} /> 
      
      <Image
        style={styles.logo}
        source={{
          uri : logoSpotify,
        }}
      />
      <Link style={styles.log} href= "/login">Faça seu login</Link>

      <Link style={styles.log} href= "/cadastro">Crie sua conta</Link>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
    container:{
      flex: 1,
      alignItems: 'center',
      backgroundColor:'#083757',
      justifyContent: 'center',
    },
    background:{
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
    },
    logo:{
      width: 100,
      height: 100,
      alignItems:'center',
      justifyContent:'center'
    },

    log:{
      flex: 1,
      color:"#ffff",
      alignItems: 'center',
      backgroundColor: '#083757',
      borderRadius: 20,
      padding: 10,
      margin: 10,
      width: '50%'
    },
  box: {
      width: "100%",
      maxWidth: 400,
      backgroundColor: "#7195ad",
      borderRadius: 15,
      shadowColor: "#000",
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.2,
      shadowRadius: 6,
      elevation: 4,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 20,
  },
  });