import React from 'react';
import {StyleSheet, Text, View, Image, Dimensions, Button} from 'react-native';

const width = Dimensions.get('window').width; //full width
const height = Dimensions.get('window').height; //full height


const styles = StyleSheet.create({
  hero: {
    paddingTop: 50,
    backgroundColor: '#66b34e',
    flexDirection: 'row',
    flex: 3,
  },
  lookingFor: {
    backgroundColor: '#e3da74',
    flex: 1,
  },
  profileData: {
    backgroundColor: '#66b34e',
    flex: 3,
  },
  actions: {
    backgroundColor: '#e3da74',
    alignSelf: 'stretch',
    justifyContent: 'center',
    padding: 50,
    flexDirection: 'row',
    flex: 1,
  },
  card: {
    flex: 1,
    width: width,
    alignSelf: 'stretch',
    alignItems: 'center',
    borderRadius: 5,
    overflow: 'hidden',
    borderColor: 'grey',
    backgroundColor: 'white',
    borderWidth: 1,
    elevation: 1,
  },
  thumbnail: {
    alignSelf: 'center',
    width: 200,
    height: 200,
    borderRadius: 100,
  },
  text: {
    fontSize: 20,
    paddingTop: 10,
    paddingBottom: 5,
  },
  noMoreCards: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
})

class Card extends React.Component {
  handleUndo() {
    console.log("Undo")
  }
  render() {
    const mentoredText = this.props.mentoredCount && 'Mentored '
      + this.props.mentoredCount
      + (this.props.mentoredCount > 1 ? ' people' : ' person');

    return (
      <View style={styles.card}>
        <View style={styles.hero}>
          <View style={{flex: 1, backgroundColor: 'powderblue'}} >
          </View>
          <View style={{flex: 2, backgroundColor: 'skyblue'}} >
            <Image style={styles.thumbnail} source={{uri: this.props.image}} />
          </View>
          <View style={{flex: 1, backgroundColor: 'powderblue'}} >
          </View>
        </View>
        <View style={styles.lookingFor}>
          <Text style={styles.text} ellipsizeMode={'tail'} numberOfLines={3} >{this.props.mentorLookingFor}</Text>
        </View>
        <View style={styles.profileData}>
        </View>
        <View style={styles.actions}>
          <Button
            onPress={this.handleUndo}
            title="Undo"
            color="#66b34e"
            accessibilityLabel="Undo the last swipe"
          />
          <Image source={require('./img/close-icon.png')}  />
          <Image source={require('./img/like-icon.png')}  />
          <Image source={require('./img/hamburger.png')}  />
        </View>
      </View>
    )
  }
}

export default Card;