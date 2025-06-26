import { SOCIAL_LINKS } from '@/constants/social'
import { Image, Linking, Text, TouchableOpacity, View } from 'react-native'
const uri =
  'https://res.cloudinary.com/dnmnyien6/image/upload/v1750910320/1750910277541_qtmmwh.webp'

export default function Contratame() {
  return (
    <View className='flex-1'>
      <View className='mx-auto mt-10 w-2/3 items-center overflow-hidden rounded-xl bg-slate-800'>
        <View className='absolute top-10 z-10 rounded-full bg-white p-1'>
          <Image
            className='h-60 w-60 rounded-full'
            source={{ uri }}
          />
        </View>
        <View className='mt-40 w-full items-center bg-white pb-12 pt-32'>
          <Text className='text-3xl font-bold text-black'>
            Rafael Adolfo Rosa
          </Text>
          <Text className='text-xl italic text-neutral-700'>
            Desarrollador Full Stack
          </Text>
          <View className='mt-6 flex-row items-center justify-center gap-6'>
            {SOCIAL_LINKS.map(({ slug, icon, url }) => (
              <TouchableOpacity
                key={slug}
                onPress={() => Linking.openURL(url)}
              >
                <Image
                  className='size-10'
                  source={{
                    uri: icon
                  }}
                />
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </View>
    </View>
  )
}
