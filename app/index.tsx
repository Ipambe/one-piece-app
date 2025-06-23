import { Text, View } from 'react-native'
import '../global.css'

export default function Index() {
  return (
    <View className='flex-1 items-center justify-center p-6'>
      <Text className='text-3xl font-extrabold text-op-red mb-2'>
        ¡Bienvenido a la app de One Piece! 🏴‍☠️
      </Text>
      <Text className='text-2xl text-op-white mb-4 text-center'>
        Explora el mundo de los piratas, descubre personajes, tripulaciones y
        aventuras inspiradas en el universo de One Piece. ¡Zarpa hacia Grand
        Line!
      </Text>
    </View>
  )
}
