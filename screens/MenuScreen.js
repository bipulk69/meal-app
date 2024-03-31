/* eslint-disable react-native/no-inline-styles */
import {
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {useRoute} from '@react-navigation/native';
import axios from 'axios';

const MenuScreen = () => {
  const [option, setOption] = useState('');
  const [type, setType] = useState('');
  const [item, setItem] = useState('');
  const [menuItems, setMenuItems] = useState([]);
  const route = useRoute();

  const addDishToMenu = async () => {
    setItem('');
    const dish = {
      date: route?.params.date,
      name: item,
      type: type,
      mealType: option,
    };

    const response = await axios.post(
      'http://localhost:3000/menu/addDish',
      dish,
    );

    const updatedMenuItem = [...menuItems, dish];
    setMenuItems(updatedMenuItem);

    console.log('dish added', response.data);
  };
  return (
    <SafeAreaView>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          padding: 10,
          backgroundColor: '#fd5c63',
        }}>
        <Text style={{flex: 1, color: 'white'}}>Back</Text>

        <View style={{flex: 1}}>
          <Text style={{color: 'white', fontSize: 16, fontWeight: 'bold'}}>
            {route?.params.date}
          </Text>
        </View>

        <Text style={{color: 'white'}}>Delete</Text>
      </View>

      <View
        style={{
          marginVertical: 12,
          flexDirection: 'row',
          alignItems: 'center',
          gap: 12,
          alignSelf: 'center',
        }}>
        <Pressable
          onPress={() => setOption('Breakfast')}
          style={{
            paddingHorizontal: 12,
            paddingVertical: 6,
            backgroundColor: option === 'Breakfast' ? '#fd5c63' : 'white',
            borderRadius: 25,
          }}>
          <Text
            style={{
              fontSize: 14,
              fontWeight: '600',
              color: option === 'Breakfast' ? 'white' : 'black',
            }}>
            Breakfast
          </Text>
        </Pressable>

        <Pressable
          onPress={() => setOption('Lunch')}
          style={{
            paddingHorizontal: 12,
            paddingVertical: 6,
            backgroundColor: option === 'Lunch' ? '#fd5c63' : 'white',
            borderRadius: 25,
          }}>
          <Text
            style={{
              fontSize: 14,
              fontWeight: '600',
              color: option === 'Lunch' ? 'white' : 'black',
            }}>
            Lunch
          </Text>
        </Pressable>

        <Pressable
          onPress={() => setOption('Dinner')}
          style={{
            paddingHorizontal: 12,
            paddingVertical: 6,
            backgroundColor: option === 'Dinner' ? '#fd5c63' : 'white',
            borderRadius: 25,
          }}>
          <Text
            style={{
              fontSize: 14,
              fontWeight: '600',
              color: option === 'Dinner' ? 'white' : 'black',
            }}>
            Dinner
          </Text>
        </Pressable>
      </View>

      <Pressable
        style={[
          {
            backgroundColor: 'white',
            borderRadius: 8,
            padding: 10,
            width: '100%',
            height: 80,
            marginVertical: 12,
          },
        ]}>
        <Text
          style={{
            textAlign: 'center',
            fontSize: 12,
            fontWeight: 600,
            color: 'gray',
          }}>
          There is no menu
        </Text>
      </Pressable>

      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          gap: 10,
          marginHorizontal: 10,
        }}>
        <Pressable
          onPress={() => setType('Staple')}
          style={{
            backgroundColor: type === 'Staple' ? '#E9967A' : 'white',
            paddingHorizontal: 10,
            paddingVertical: 4,
            borderRadius: 20,
          }}>
          <Text
            style={{
              fontSize: 15,
              color: type === 'Staple' ? 'white' : 'black',
            }}>
            Staple
          </Text>
        </Pressable>

        <Pressable
          onPress={() => setType('Main')}
          style={{
            backgroundColor: type === 'Main' ? '#E9967A' : 'white',
            paddingHorizontal: 10,
            paddingVertical: 4,
            borderRadius: 20,
          }}>
          <Text
            style={{
              fontSize: 15,
              color: type === 'Main' ? 'white' : 'black',
            }}>
            Main
          </Text>
        </Pressable>

        <Pressable
          onPress={() => setType('Side')}
          style={{
            backgroundColor: type === 'Side' ? '#E9967A' : 'white',
            paddingHorizontal: 10,
            paddingVertical: 4,
            borderRadius: 20,
          }}>
          <Text
            style={{
              fontSize: 15,
              color: type === 'Side' ? 'white' : 'black',
            }}>
            Side
          </Text>
        </Pressable>

        <Pressable
          onPress={() => setType('Soup')}
          style={{
            backgroundColor: type === 'Soup' ? '#E9967A' : 'white',
            paddingHorizontal: 10,
            paddingVertical: 4,
            borderRadius: 20,
          }}>
          <Text
            style={{
              fontSize: 15,
              color: type === 'Soup' ? 'white' : 'black',
            }}>
            Soup
          </Text>
        </Pressable>
      </View>

      <View
        style={{
          marginTop: 15,
          marginHorizontal: 10,
          flexDirection: 'row',
          gap: 10,
        }}>
        <TextInput
          value={item}
          onChangeText={text => setItem(text)}
          style={{
            padding: 10,
            backgroundColor: 'white',
            borderRadius: 6,
            flex: 1,
          }}
          placeholder="Disc Name"
        />
        <Pressable
          onPress={addDishToMenu}
          style={{padding: 10, backgroundColor: '#fd5c63', borderRadius: 6}}>
          <Text
            style={{
              fontSize: 15,
              fontWeight: '500',
              textAlign: 'center',
              color: 'white',
              width: 60,
            }}>
            Add
          </Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

export default MenuScreen;

const styles = StyleSheet.create({});
