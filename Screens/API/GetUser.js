import { View, Text, FlatList, StyleSheet, Button, Pressable, ActivityIndicator } from 'react-native'
import React, { useEffect, useState } from 'react'

export default function GetUser() {

    const [myUserData, setMyUserData] = useState();
    const [isLoaded, setIsLoaded] = useState(true);
    const GetUserData = async () => {
        try {
           const response = await fetch("https://jsonplaceholder.typicode.com/users");
           const data =await response.json();
           setMyUserData(data)
           setIsLoaded(false)
           console.log(data) 
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        GetUserData();
    }, []);

  return (
    <View style={{margin : 20}}>
       
         {isLoaded ? (<View style={{alignItems:'center',justifyContent :'center'}}>
                        <ActivityIndicator size='large' color={'red'}/>
                    </View>)
                :(
    <View>
     <FlatList 
        data={myUserData}
        renderItem={({item})=>{
            return(
                <View>      
                <View style={{backgroundColor : '#a5a3a3',flex: 0.5,
                justifyContent:'space-between',  margin : 10}}> 
                        <Text style={{fontSize : 15, fontWeight : '500'}}>ID : {item.id < 10 ? `#0${item.id}` : `#${item.id}`}</Text>
                       
                <Text>Full Name : {item.name}</Text>
                    <Text>Email : {item.email}</Text>
                    </View>                    
                </View>                 
                )}
            }
     />        
     </View> )}
                
  </View>  
  )  }      
  
// export default function GetUser()
// {
//     const [myUserData, setMyUserData] = useState();
//     const [isLoaded, setIsLoaded] = useState(true);
//     const GETUSER = () => {
//         console.log("Fetch API Call");
      
//       fetch('https://vaistra-test.herokuapp.com/users',
//       {      
//         method: 'GET',
//         headers: {'Content-Type':'application/json', 
//         'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjI1NSwiZW1haWwiOiJyaXlhQGdtYWlsLmNvbSIsInBob25lIjoiKzkxOTE3MzUxNzI4OCIsImlhdCI6MTY1MjQxNzEzMiwiZXhwIjoxNjUyNjc2MzMyfQ.kOWa8-4HAvLymWlP2aS4fo7lfOIzHajHjf_6WxFytLI'},
//       })
//       .then((response) => response.json())
//       .then((json) => {
//           console.log('Fetch API Response', json.data);
          
//       })
//       .catch((error) => {
//         console.error(error);
//       });
      
//       }
//       return(
//         <View>
//         <Text style={styles.txt}>Fetch data example</Text>      
//       <View style={styles.btn}>
//           <Button 
//           title='POST:CREAT USER'
//                onPress ={()=>GETUSER()}
//           />  
//           <FlatList 
//           data={data}
//           />
//       </View>
//       </View>
//       )
// }
// const styles = StyleSheet.create({
//     btn : {
//       margin : 30,
//       paddingTop : 70,
//       paddingBottom:40,
  
//     },
//     txt  : {
//       paddingTop : 80,
//       fontSize : 24,
      
//     },
//     btnUpdate : {
//       margin : 30,
//       paddingTop : 20,
//       paddingBottom:40,
  
//     }
//   })
  