import { useFocusEffect } from 'expo-router'
import { useVideoPlayer, VideoView } from 'expo-video'
import { useCallback } from 'react'
import { View } from 'react-native'

const uri =
  'https://res.cloudinary.com/dnmnyien6/video/upload/v1750950399/VID_20250626_105739_g184ie.mp4'

export default function EnMiVida() {
  const player = useVideoPlayer(uri, (player) => {
    // player.play()
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
    <View className='flex-1 items-center p-4'>
      <View className='rounded-3xl border border-neutral-200 p-2'>
        <VideoView
          style={{
            width: '70%',
            aspectRatio: 9 / 16,
            borderRadius: 16,
          }}
          player={player}
          allowsFullscreen
          allowsPictureInPicture
          allowsVideoFrameAnalysis={false}
          nativeControls
        />
      </View>
    </View>
  )
}
