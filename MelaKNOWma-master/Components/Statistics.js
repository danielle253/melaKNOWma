import React from 'react'
import { Text, View, StyleSheet } from 'react-native';
import { Dimensions } from 'react-native';
import { LineChart } from 'react-native-chart-kit'

const WIDTH = Dimensions.get('window').width;

class Statistics extends React.Component {
    static navigationOptions = {
      title: 'Statistics',
      headerTitleStyle: {
        width: WIDTH - 75,
      },
    };
    
    render() {
      return (
        <View style={styles.container}>
            <Text>Average Temperature over 10 Trials</Text>
        <LineChart
            data={{
            labels: [1,2,3,4,5,6,7,8,9,10],
            datasets: [{
                data: this.props.navigation.state.params.data
            }]
            }}
            width={WIDTH - 2}
            height={220}
            yAxisLabel={'Degrees'}
            chartConfig={{
                backgroundGradientFrom: '#00e4ff',
                backgroundGradientTo: '#00e4ff',
                decimalPlaces: 2,
                color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
                style: {
                    borderRadius: 16
                }
            }}
            bezier
            style={{
                marginVertical: 8,
                borderRadius: 16
            }}
        />
        <Text>
            Time
        </Text>
        </View>
      );
    }
  }

  const styles = StyleSheet.create({
    container: {
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

export default Statistics