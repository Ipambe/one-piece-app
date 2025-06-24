import { DrawerItemList } from '@react-navigation/drawer'
import { Drawer } from 'expo-router/drawer'
import { Text, View } from 'react-native'
import { GestureHandlerRootView } from 'react-native-gesture-handler'

export default function Layout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer
        initialRouteName='index'
        screenOptions={{
          drawerType: 'front',
          drawerStyle: {
            // width: 240,
            backgroundColor: '#333',
            borderRightWidth: 1,
            borderRightColor: '#444'
          },
          sceneStyle: {
            backgroundColor: '#333'
          },
          headerStyle: {
            backgroundColor: '#444'
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
            color: '#fff'
          },
          drawerActiveTintColor: '#FF8C00',
          drawerInactiveTintColor: '#aaa',
          drawerActiveBackgroundColor: '#444',
          drawerInactiveBackgroundColor: '#333',
          drawerLabelStyle: {
            fontSize: 16,
            fontWeight: 'bold'
          }
        }}
        drawerContent={(props) => (
          <View className='flex-1 mt-safe'>
            <View className='p-6 border-b border-b-neutral-500'>
              <Text className='text-2xl font-bold text-op-orange'>
                One Piece App
              </Text>
            </View>
            <View className='px-2 mt-10 flex-1'>
              <DrawerItemList {...props} />
            </View>
          </View>
        )}
      >
        <Drawer.Screen
          name='index'
          options={{ title: 'Inicio' }}
        />
        <Drawer.Screen
          name='personajes'
          options={{ title: 'Personajes' }}
        />
        <Drawer.Screen
          name='momentos'
          options={{ title: 'Momentos' }}
        />
        <Drawer.Screen
          name='acerca'
          options={{ title: 'Acerca de' }}
        />
        <Drawer.Screen
          name='en-mi-vida'
          options={{ title: 'En mi vida' }}
        />
        <Drawer.Screen
          name='contratame'
          options={{ title: 'Contrátame' }}
        />
      </Drawer>
    </GestureHandlerRootView>
  )
}
