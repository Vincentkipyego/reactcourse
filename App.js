import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View, SafeAreaView, ScrollView, RefreshControl  } from 'react-native';
import React, {useState} from 'react';

export default function App() {
  const[items, setItems] = useState([
    {key: 0, item: 'item 1'},
    {key: 1, item: 'item 2'},
    {key: 2, item: 'item 3'},
    {key: 3, item: 'item 4'},
    {key: 4, item: 'item 5'},
    {key: 5, item: 'item 6'},
    {key: 6, item: 'item 7'},
    {key: 7, item: 'item 7'},
    {key: 8, item: 'item 6'},
    {key: 9, item: 'item 6'},
    {key: 10, item: 'item 10'},
    {key: 11, item: 'item 11'},
    {key: 12, item: 'item 12'},
    {key: 13, item: 'item 13'},
    {key: 14, item: 'item 13'},
    {key: 15, item: 'item 14'},
    {key: 16, item: 'item 16'},
  ])
const[refreshing, setRefreshing]= useState(false)

const refresh =()=>{
  setRefreshing(true)
  setItems([...items, {key: 68, item: 'item 69'}])
  setRefreshing(false)
}
 
  return (
    
    <ScrollView style={styles.container} refreshControl=
    {<RefreshControl refreshing={refreshing}
    onRefresh={refresh}/>}>
    {
      items.map((item)=>{return(
       <View style= {styles.list} key={item.key}>
       <Text style={styles.text}>{item.item}</Text>
       </View> 
      )})
    }
    </ScrollView>
   
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'white',
    marginTop:20,
  
   
   
  },
  list: {
    backgroundColor: 'blue',
    margin: 10,
    alignItems: 'center',
    justifyContent:'center',
    width:'100%',
    height:40,
    
    
  },
   text:{
     color :'white',
     fontSize:20,
   },
});
