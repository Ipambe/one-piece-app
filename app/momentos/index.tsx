import { MOMENTOS } from '@/constants/momentos'
import { Link } from 'expo-router'
import { Text, TouchableOpacity, View } from 'react-native'

export default function Momentos() {
  return (
    <View className='flex-1 items-center gap-8 px-4 pt-8'>
      {MOMENTOS.map((momento) => (
        <Link
          key={momento.id}
          asChild
          href={{
            pathname: '/momentos/[id]',
            params: { id: momento.id }
          }}
        >
          <TouchableOpacity className='w-full flex-row items-center gap-4 rounded-2xl border border-orange-400 bg-neutral-800 px-4 py-6'>
            <View className='flex-1'>
              <Text className='text-2xl font-bold text-white'>
                {momento.title}
              </Text>
              <Text className='mt-1 text-neutral-300'>Ver más</Text>
            </View>
          </TouchableOpacity>
        </Link>
      ))}
    </View>
  )
}
