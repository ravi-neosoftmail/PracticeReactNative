import React, { useEffect } from 'react';
import {
  FlatList,
  Text,
  View,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from './Redux/Action';
import { fetchUserRequest } from './Redux/Action';

export default function UserData() {
  const dispatch = useDispatch();

  const usersDetails = useSelector(state => state.users)
  console.log(usersDetails, 'users123');

//   useEffect(() =>{
//     dispatch(fetchUsers())
//   }, [])

    useEffect(() =>{
    dispatch(fetchUserRequest())
    }, [])

    return (
        <View>
          <FlatList
           data={usersDetails}
           keyExtractor={(user) => user.id}
           renderItem={( user ) =>(
             <View>
               {console.log(user, 'renderUsers')}
            <View style={{flexDirection:'row'}}>
              <Text>Id: {user.item.id}</Text>
              <Text style={{marginLeft:20}}>Name: {user.item.name}</Text>
            </View>
            </View>
           )}
          />
        </View>
    )
}
