import React from 'react'
import { Button } from 'react-native';
import { Dimensions, View, StyleSheet } from 'react-native';

const WIDTH = Dimensions.get('window').width;

class HomeScreen extends React.Component {
    static navigationOptions = {
      title: 'Mela-KNOW-ma',
      headerTitleStyle: {
        width: WIDTH - 75,
        textAlign: 'center'
      },
    };
    render() {
      const {navigate} = this.props.navigation;
      return (
          <>
          <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <View style={styles.myButton}>
              <Button
                color="transparent"
                title="Statistics"
                onPress={() => navigate('Statistics', {data: [20,21,20,19,18,22,24,25,14]})}
              />
            </View>
          </View>
          <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <View style={styles.myButton}>
              <Button
                // style={{backgroundColor: "transparent"}}
                style={{shadowOffset: { height: 0, width: 0 }, shadowOpacity: 0, elevation:0}}
                title="Scan"
                onPress={() => navigate('LiveFeed')}
                color="transparent"
              />
            </View>
          </View>
        </>
      );
    }
  }

  const styles = StyleSheet.create({
    myButton:{
      width: 300, 
      height: 50,
      padding: 15,
      margin: 15,
      borderRadius:20,
      backgroundColor:'#9F000F',
      
    }
  });

export default HomeScreen