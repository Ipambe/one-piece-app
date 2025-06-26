import { PERSONAJES } from '@/constants/personajes'
import { useLocalSearchParams } from 'expo-router'
import { Image, ScrollView, Text, View } from 'react-native'

export default function Personaje() {
  const { id } = useLocalSearchParams()

  const personaje = PERSONAJES.find((p) => p.slug === id)

  if (!personaje) {
    return (
      <View>
        <Text>Personaje no encontrado</Text>
      </View>
    )
  }
  const { name, quote, uri, description, age, height, role, bounty, color } =
    personaje
  return (
    <ScrollView className='mb-4 flex-1'>
      <View className='mt-10 items-center gap-2'>
        <View
          className='rounded-full border-2 p-2'
          style={{ borderColor: color, width: 250, height: 250 }}
        >
          <Image
            style={{
              width: '100%',
              height: '100%',
              aspectRatio: 1,
              borderRadius: 200
            }}
            source={{
              uri
            }}
          />
        </View>
        <Text className='text-center text-4xl font-bold text-white'>
          {name}
        </Text>
        <Text
          className='text-center text-lg italic'
          style={{ color }}
        >
          "{quote}"
        </Text>
      </View>
      <View className='mx-2 mt-8 gap-4 rounded-2xl p-4'>
        <Text className='text-3xl font-bold text-white'>Descripción</Text>
        <Text className='text-xl text-neutral-200'>{description}</Text>
      </View>
      <View className='mx-2 mt-8 gap-4 rounded-2xl p-4'>
        <Text className='text-3xl font-bold text-white'>Atributos</Text>
        <View className='mt-4 flex-row justify-between border-t-2 border-t-neutral-500 py-4'>
          <View className='flex-1 gap-2'>
            <Text className='text-3xl text-white'>Edad</Text>
            <Text
              className='text-xl italic'
              style={{ color }}
            >
              {age} años
            </Text>
          </View>
          <View className='flex-1 gap-2'>
            <Text className='text-3xl text-white'>Altura</Text>
            <Text
              className='text-xl italic'
              style={{ color }}
            >
              {height} cm
            </Text>
          </View>
        </View>
        <View className='mt-4 flex-row justify-between border-t-2 border-t-neutral-500 py-4'>
          <View className='flex-1 gap-2'>
            <Text className='text-3xl text-white'>Recompensa</Text>
            <Text
              className='text-xl italic'
              style={{ color }}
            >
              {bounty
                ? `${bounty.toLocaleString('es-ES')} berries`
                : 'Desconocida'}
            </Text>
          </View>
          <View className='flex-1 gap-2'>
            <Text className='text-3xl text-white'>Rol</Text>
            <Text
              className='text-xl italic'
              style={{ color }}
            >
              {role}
            </Text>
          </View>
        </View>
      </View>
    </ScrollView>
  )
}
