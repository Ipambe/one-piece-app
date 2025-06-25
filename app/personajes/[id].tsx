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
    <ScrollView className='flex-1 mb-4'>
      <View className='mt-10 items-center gap-2'>
        <View
          className='border-2 p-2 rounded-full'
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
        <Text className='text-4xl text-white font-bold text-center'>
          {name}
        </Text>
        <Text
          className='text-lg italic text-center'
          style={{ color }}
        >
          "{quote}"
        </Text>
      </View>
      <View className='p-4 mt-8 mx-2 rounded-2xl gap-4'>
        <Text className='text-white text-3xl font-bold'>Descripción</Text>
        <Text className='text-neutral-200 text-xl'>{description}</Text>
      </View>
      <View className='p-4 mt-8 mx-2 rounded-2xl gap-4'>
        <Text className='text-white text-3xl font-bold'>Atributos</Text>
        <View className='py-4 mt-4 border-t-2 border-t-neutral-500 flex-row justify-between'>
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
        <View className='py-4 mt-4 border-t-2 border-t-neutral-500 flex-row justify-between'>
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
