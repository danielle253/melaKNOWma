import React from 'react'
import { Text, View, StyleSheet } from 'react-native';
import { Dimensions } from 'react-native';
import { GithubPicker } from 'react-color';

const WIDTH = Dimensions.get('window').width;
const colorInts = ['#FF0030', '#FF1400', '#FF4600', '#FF7800', '#FFa000', '#FFd200', '#fdff00', '#65ff00'];

const colorMap = [
    '#0500ff',
    '#0064ff',
    '#00a4ff',
    '#00fff4',
    '#00ff5c',
    '#65ff00',
    '#b0ff00',
    '#fdff00',
    '#FFd200',
    '#FFa000',
    '#FF7800',
    '#FF4600',
    '#FF1400',
    '#FF0030'
]

const sampleData = [20.75, 26.00, 25.00, 24.50, 24.75, 25.75, 24.50, 24.50, 
    25.75, 25.50, 25.25, 25.50, 25.50, 25.25, 25.00, 25.50, 
    25.50, 25.50, 24.75, 24.75, 25.50, 25.25, 25.00, 25.25, 
    26.00, 25.50, 25.25, 25.25, 10.0, 25.00, 25.00, 24.75, 
    25.25, 25.75, 25.75, 25.25, 25.25, 25.25, 25.00, 25.25, 
    26.25, 26.25, 25.50, 25.50, 25.75, 25.00, 25.25, 25.25, 
    30.00, 28.25, 25.50, 25.50, 25.50, 25.75, 25.25, 25.25, 
    31.75, 30.75, 27.50, 26.25, 26.25, 26.25, 26.00, 25.75, 
    ]

var colors = []
var dataMap = {};
var unsortedData = []

sampleData.forEach(elem => {
    unsortedData.push(elem)
})

var dataSorted = sampleData.sort();

function mapColors() {
    dataMap = {}
    dataSorted.forEach(elem => {
        // console.warn(Math.floor((elem*10 - 200) / 5))
        let index = Math.floor((elem*10 - 200) / 5) 
        if(index < 0){
            index = 0
        }
        let idx = index >= colorMap.length ? colorMap.length - 1 : index
        dataMap[elem] = colorMap[idx]
    })
}

class LiveFeed extends React.Component {
    static navigationOptions = {
      title: 'LiveFeed',
      headerTitleStyle: {
        width: WIDTH - 75,
      },
    };
    
    render() {
        var grid = []
        var row = []
        colors = []
        mapColors()
        unsortedData.forEach(dataPoint => {
            var color = dataMap[dataPoint];
            colors.push(color);
        });
        colors.forEach(elem => {
            if(row.length === 8) {
                grid.push(<View key={grid.length} style={{flexDirection: 'row'}}>{row}</View>);
                row = []
            }
            row.push(<View key={row.length} style={{width: 45, height: 45, backgroundColor: elem, flexDirection: 'row'}}/>)
        })
        if(row.length != 0) {
            grid.push(<View key={grid.length} style={{flexDirection: 'row'}}>{row}</View>);
        }
      return (
        <View style={styles.container}>
            {grid}
        </View>
      );
    }
  }

  const styles = StyleSheet.create({
    container: {
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'column',
      marginTop: 50,
    },
  });

export default LiveFeed