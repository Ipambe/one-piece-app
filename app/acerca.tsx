import { Image, ScrollView, Text, View } from 'react-native'

const uri =
  'https://static.wikia.nocookie.net/onepiece/images/8/8d/One_Piece.png/revision/latest?cb=20131217174846&path-prefix=es'
export default function Acerca() {
  return (
    <ScrollView className='flex-1 mb-4'>
      <Image
        source={{ uri }}
        className='w-full aspect-video'
      />
      <View className='p-4'>
        <View>
          <Text className='text-xl text-neutral-200 mb-2'>
            <Text className='font-bold'>Obra:</Text> One Piece
          </Text>
          <Text className='text-xl text-neutral-200 mb-2'>
            <Text className='font-bold'>Creador:</Text> Eiichirō Oda
          </Text>
          <Text className='text-xl text-neutral-200 mb-2'>
            <Text className='font-bold'>Sagas y arcos argumentales:</Text> 11
            Sagas y 33 Arcos Argumentales
          </Text>
        </View>
        <View className='mt-4 gap-4'>
          <Text className='text-xl text-neutral-300'>
            One Piece es una reconocida franquicia japonesa que comenzó como un
            manga escrito e ilustrado por Eiichirō Oda. Su publicación inició el
            22 de julio de 1997 en la revista Weekly Shōnen Jump, y hasta la
            fecha cuenta con más de 110 volúmenes publicados. La historia sigue
            las aventuras de Monkey D. Luffy y su tripulación, los Piratas del
            Sombrero de Paja, en su travesía por los mares para encontrar el
            legendario tesoro conocido como One Piece, con el objetivo de que
            Luffy se convierta en el Rey de los Piratas.
          </Text>
          <Text className='text-xl text-neutral-300'>
            La popularidad del manga dio origen a una extensa franquicia
            multimedia, incluyendo una serie de anime producida por Toei
            Animation, que comenzó a transmitirse en Fuji TV el 20 de octubre de
            1999 y continúa en emisión. El anime adapta fielmente la historia
            original, aunque también incluye episodios de relleno, especiales de
            televisión, películas, OVAs, videojuegos, novelas ligeras, mangas
            derivados, e incluso una adaptación de imagen real.
          </Text>
          <Text className='text-xl text-neutral-300'>
            One Piece ostenta numerosos logros: es el manga más vendido de la
            historia de Japón con más de 516 millones de copias vendidas en todo
            el mundo, y posee el Récord Guinness por ser el cómic con mayor
            cantidad de copias publicadas de una misma obra realizada por un
            solo autor. Además, fue el manga más vendido anualmente en Japón
            durante más de una década (2007-2018).
          </Text>
          <Text className='text-xl text-neutral-300'>
            Tanto el manga como el anime han sido aclamados por la crítica y el
            público. En encuestas realizadas por TV Asahi, One Piece fue elegido
            como el mejor manga de la historia, y su versión animada ocupó los
            puestos número 6 (como serie en línea) y número 4 (como serie
            nacional). Actualmente, el anime es también uno de los más longevos
            de todos los tiempos.
          </Text>
        </View>
      </View>
    </ScrollView>
  )
}
