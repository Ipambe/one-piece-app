import { PERSONAJES } from '@/constants/personajes'
import { Link } from 'expo-router'
import { Text, TouchableOpacity, View } from 'react-native'

export default function Personajes() {
  return (
    <View className='flex-1 justify-center items-center gap-8'>
      {PERSONAJES.map((personaje) => (
        <Link
          key={personaje.slug}
          asChild
          href={{
            pathname: '/personajes/[id]',
            params: { id: personaje.slug }
          }}
        >
          <TouchableOpacity
            style={{ borderColor: personaje.color }}
            className='py-6 border w-3/4 rounded-2xl text-2xl font-bold text-center'
          >
            <Text
              className='text-3xl font-medium text-center'
              style={{ color: personaje.color }}
            >
              {personaje.name}
            </Text>
          </TouchableOpacity>
        </Link>
      ))}
    </View>
  )
}
