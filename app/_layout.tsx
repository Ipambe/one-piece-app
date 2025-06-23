import { Stack } from 'expo-router'

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: true,
        headerShadowVisible: false,
        contentStyle: { backgroundColor: '#222' },
        headerStyle: { backgroundColor: '#FF8C00' },
        headerTitleStyle: { color: '#222', fontWeight: 'bold' },
        headerTintColor: '#007bff',
        headerBackTitle: 'Atrás',
        headerBackVisible: true
      }}
    ></Stack>
  )
}
