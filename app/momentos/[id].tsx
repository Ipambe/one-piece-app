import { MOMENTOS } from '@/constants/momentos'
import { useFocusEffect, useLocalSearchParams } from 'expo-router'
import { useVideoPlayer, VideoView } from 'expo-video'
import { useCallback } from 'react'
import { ScrollView, Text, View } from 'react-native'

export default function Momento() {
  const { id } = useLocalSearchParams()
  const momento = MOMENTOS.find((m) => m.id === id)

  if (!momento) {
    return (
      <View className='flex-1 items-center justify-center'>
        <Text className='text-2xl text-white'>Momento no encontrado</Text>
      </View>
    )
  }

  const player = useVideoPlayer(momento.uri, (player) => {
    player.play()
  })

  useFocusEffect(
    useCallback(() => {
      player.play?.()
      return () => {
        player.pause?.()
      }
    }, [player])
  )

  return (
    <ScrollView className='flex-1'>
      <View className='items-center p-4'>
        <VideoView
          style={{
            width: '100%',
            aspectRatio: 16 / 9,
            borderRadius: 16,
            backgroundColor: '#000'
          }}
          player={player}
          allowsFullscreen
          allowsPictureInPicture
          allowsVideoFrameAnalysis={false}
          nativeControls
        />
      </View>
      <View className='mt-4 gap-2 px-4'>
        <Text className='text-3xl font-bold text-neutral-100'>
          Descripción y contexto
        </Text>
        <Text className='text-xl text-neutral-200'>{momento.description}</Text>
      </View>
    </ScrollView>
  )
}
