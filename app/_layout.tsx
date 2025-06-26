import Ionicons from '@expo/vector-icons/Ionicons'
import { DrawerItemList } from '@react-navigation/drawer'
import { router } from 'expo-router'
import { Drawer } from 'expo-router/drawer'
import { Text, TouchableOpacity, View } from 'react-native'
import { GestureHandlerRootView } from 'react-native-gesture-handler'

export default function Layout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer
        initialRouteName='index'
        backBehavior='history'
        screenOptions={{
          drawerType: 'front',
          drawerStyle: {
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
            fontWeight: 'bold'
          },
          drawerActiveTintColor: '#f97316',
          drawerInactiveTintColor: '#aaa',
          drawerActiveBackgroundColor: '#444',
          drawerInactiveBackgroundColor: '#333',
          drawerLabelStyle: {
            fontSize: 16,
            fontWeight: 'bold'
          }
        }}
        drawerContent={(props) => (
          <View className='mt-safe flex-1'>
            <View className='border-b border-b-neutral-500 p-6'>
              <Text className='text-2xl font-bold text-orange-500'>
                One Piece App
              </Text>
            </View>
            <View className='mt-10 flex-1 px-2'>
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
          name='personajes/index'
          options={{ title: 'Personajes' }}
        />
        <Drawer.Screen
          name='personajes/[id]'
          options={({ route }: { route: { params?: { id?: string } } }) => {
            const id = route?.params?.id
            const { PERSONAJES } = require('@/constants/personajes')
            const personaje = PERSONAJES.find((p: any) => p.slug === id)
            return {
              drawerItemStyle: { display: 'none' },
              title: personaje ? personaje.name : 'Personaje',
              headerLeft: () => {
                return (
                  <TouchableOpacity
                    className='mr-1 p-2 pl-1'
                    style={{ marginLeft: 10 }}
                    onPress={() => router.back()}
                  >
                    <Ionicons
                      name='arrow-back'
                      size={24}
                      color='#fff'
                    />
                  </TouchableOpacity>
                )
              }
            }
          }}
        />
        <Drawer.Screen
          name='momentos/index'
          options={{ title: 'Momentos' }}
        />
        <Drawer.Screen
          name='momentos/[id]'
          options={({ route }: { route: { params?: { id?: string } } }) => {
            const id = route?.params?.id
            const { MOMENTOS } = require('@/constants/momentos')
            const momento = MOMENTOS.find((m: any) => m.id === id)
            return {
              drawerItemStyle: { display: 'none' },
              title: momento ? momento.title : 'Momento',
              headerLeft: () => {
                return (
                  <TouchableOpacity
                    className='mr-1 p-2 pl-1'
                    style={{ marginLeft: 10 }}
                    onPress={() => router.back()}
                  >
                    <Ionicons
                      name='arrow-back'
                      size={24}
                      color='#fff'
                    />
                  </TouchableOpacity>
                )
              }
            }
          }}
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
