import { PERSONAJES } from '@/constants/personajes'
import { Link } from 'expo-router'
import { Text, TouchableOpacity, View } from 'react-native'

export default function Personajes() {
  return (
    <View className='flex-1 items-center gap-8 px-4 pt-8'>
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
            className='w-full flex-row items-center gap-4 rounded-2xl border px-4 py-6'
          >
            <Text
              className='text-center text-3xl font-medium'
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
