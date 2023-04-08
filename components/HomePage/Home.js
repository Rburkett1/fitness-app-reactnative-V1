import { StyleSheet, View,  FlatList, Text } from 'react-native';
import { Button } from 'react-native-elements'
import Icon from 'react-native-vector-icons/Ionicons';





const activities = [
  {
  title:"Running",
  type:"Duration",
  icon: <Icon name="ios-walk" size={30} color="white" />
  },
  {
  title:"Biking",
  type:"Duration",
  icon: <Icon name="ios-bicycle" size={30} color="white" />
  },
  {
  title:"barbell reps",
  type:"Repetition",
  icon: <Icon name="ios-barbell-outline" size={30} color="white" />
  },
  {
  title:"bicep curls",
  type:"Repetition",
  icon: <Icon name="ios-barbell-outline" size={30} color="white" />
  },
  {
  title:"Jumping Jacks",
  type:"Repetition",
  icon: <Icon name="ios-body-outline" size={30} color="white" />
  },
  {
  title:"Water Intake",
  type:"Water",
  icon: <Icon name="ios-water-outline" size={30} color="white" />
  }
   
  ]

export default function Home( {navigation}) {

  return (
    <View style={styles.container}> 
    <Text style = {{fontSize: 30, marginTop: 20, color: 'white'}}>Pick an exercise</Text>   
      <FlatList style={styles.list}
        data={activities}
        renderItem={({item}) => 
       
        <Button
        title={item.title}
        icon = {item.icon}
        onPress={() => navigation.navigate(item.type, {activity: item.title})}       
        color={'white'}
        buttonStyle = {styles.Button}
        
      /> 
      
        }
        
        keyExtractor={item => item.title}
      />
      
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
   // backgroundColor: '#558C8C', //dark cyan
   // backgroundColor: '#EEF5DB', //beige
   // backgroundColor: '#34403A', //black olive
   // backgroundColor: '#7C9885', //cambridge blue //top pick for background
    backgroundColor: '#1C1C1E', //ios dark mode background system gray 6
    alignItems: 'center',
    justifyContent: 'center',
   

  },
  list: {
    flex: 1, 
    marginTop: 40
  },
  Button:{
    marginVertical: 15,
    paddingVertical: 25,
    borderRadius: 20,
    //backgroundColor: '#E6AF2E', //yellow
    //backgroundColor: '#F88141',  //orange
    backgroundColor: '#558C8C', //dark cyan
    //backgroundColor: '#EEF5DB', //beige
   // backgroundColor: '#34403A', //black olive //top pick for button pair with cambridge blue
   // backgroundColor: '#7C9885', //cambridge blue
      //backgroundColor: '#8E8E93', //ios dark mode background system gray 
    width: 300
  }
});
