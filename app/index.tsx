import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons'
import { useFocusEffect } from '@react-navigation/native'
import { useVideoPlayer, VideoView } from 'expo-video'
import { useCallback, useEffect, useState } from 'react'
import { TouchableOpacity, View } from 'react-native'
import '../global.css'

const videoId = require('../assets/videos/intro.mp4')

export default function Index() {
  const [status, setStatus] = useState<'playing' | 'paused' | 'ended'>(
    'playing'
  )
  const player = useVideoPlayer(videoId, (player) => {
    player.play()
    setStatus('playing')
  })

  useEffect(() => {
    const onEnded = () => setStatus('ended')
    player.addListener?.('playToEnd', onEnded)
    return () => player.removeListener?.('playToEnd', onEnded)
  }, [player])

  useFocusEffect(
    useCallback(() => {
      if (status === 'playing') {
        player.play?.()
      }
      return () => {
        player.pause?.()
      }
    }, [player, status])
  )

  let iconType: 'motion-play-outline' | 'motion-pause-outline' | 'replay' =
    'motion-pause-outline'
  if (status === 'paused') iconType = 'motion-play-outline'
  if (status === 'ended') iconType = 'replay'

  const icon = (
    <MaterialCommunityIcons
      name={iconType}
      size={64}
      color='#f97316'
    />
  )

  const handleButtonPress = () => {
    if (status === 'ended') {
      player.currentTime = 0
      player.play()
      setStatus('playing')
    } else if (status === 'playing') {
      player.pause()
      setStatus('paused')
    } else {
      player.play()
      setStatus('playing')
    }
  }

  return (
    <View className='flex-1 items-center justify-center'>
      <VideoView
        style={{
          height: '40%',
          aspectRatio: 16 / 9,
          borderRadius: 16
        }}
        player={player}
        allowsFullscreen={false}
        allowsPictureInPicture
        allowsVideoFrameAnalysis={false}
        nativeControls={false}
      />
      <View className='flex-row items-center justify-center mt-4'>
        <TouchableOpacity
          className='p-4 rounded-lg'
          onPress={handleButtonPress}
        >
          {icon}
        </TouchableOpacity>
      </View>
    </View>
  )
}
