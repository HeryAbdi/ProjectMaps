import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { StyleSheet } from 'react-native';
import MapView from 'react-native-maps';
import { Marker } from 'react-native-maps';
export default class App extends Component {

  state = {
    region: {
      latitude: -8.5157872,
      longitude: 115.2913661,
      latitudeDelta: 0.8922,
      longitudeDelta: 0.8421,
    },
    markers : [
      {
        key:1,
        latlng: {
          latitude:-8.1109039,
          longitude: 115.0786784
        },
        title: 'ATM BII',
        subtitle: ''
      },
      {
        key:2,
        latlng: {
          latitude:-8.1106809,
          longitude: 115.0843433
        },
        title: 'ATM Mandiri',
        subtitle: ''
      },
      {
        key:3,
        latlng: {
          latitude:-8.1125378,
          longitude: 115.0844005
        },
        title: 'ATM Bank BRI'
      },
      {
        key:4,
        latlng: {
          latitude:-8.1141251,
          longitude: 115.0859074
        },
        title: 'ATM CDM CIMB NIAGA (Dewi Sartika) '
      },
      {
        key:5,
        latlng: {
          latitude:-8.1170974,
          longitude: 115.085652
        },
        title: 'ATM Bank BRI '
      },
      {
        key:6,
        latlng: {
          latitude:-8.1160528,
          longitude: 115.0919901
        },
        title: 'ATM BNI KCU Singaraja '
      },
      {
        key:7,
        latlng: {
          latitude:-8.1187187,
          longitude: 115.0918528
        },
        title: 'ATM Bank Saudara '
      },
      {
        key:8,
        latlng: {
          latitude:115.0918528,
          longitude: 115.0855497
        },
        title: 'ATM BRI KPPN Singaraja '
      },
      {
        key:9,
        latlng: {
          latitude:-8.1166268,
          longitude: 115.0948946
        },
        title: 'ATM Pelangi Pulsa '
      },
      {
        key:10,
        latlng: {
          latitude:-8.1199536,
          longitude: 115.0923758
        },
        title: 'ATM Bersama BRI, BPD, CIMB NIAGA '
      }
   ]
  };

  render() {
    return (
      <View style={styles.contMain}>
        <View style={styles.contHeader}>
            <Text style={styles.textHeader}>
              Letak ATM di Singaraja
            </Text>
        </View>
        <View style={styles.contMaps}>
              <MapView
                style={styles.map}
                region={this.state.region}
              >
              {this.state.markers.map(mark => (
              <Marker
                  key = {mark.key}
                  coordinate={mark.latlng}
                  title={mark.title}
                  description={mark.subtitle}
                />
              ))}
              </MapView>
        </View>
        <View style={styles.contFooter}>
           <Text style={styles.textFooter}> Hery-Abdi Maps</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  contMain: {
      flex : 1
  },
  contHeader: {
    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    position: 'relative'
  },
  contMaps : {
    flex : 10
  },
  textHeader: {
    fontSize: 20,
    color: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  contFooter: {
    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    position: 'relative'
  },
  textFooter: {
    fontSize: 16,
    color: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  }

});
