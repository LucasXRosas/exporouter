import { Stack } from 'expo-router';

export default function Layout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: { backgroundColor: '#1c1917' },
        headerTintColor: '#f59e0b',
        headerTitleStyle: { fontWeight: 'bold' },
        contentStyle: { backgroundColor: '#0c0a09' },
      }}
    >
      <Stack.Screen name="index" options={{ title: 'Clube de Cinema' }} />
      <Stack.Screen name="home" options={{ title: 'Início' }} />
      <Stack.Screen name="movie/[id]" options={{ title: 'Detalhes do Filme' }} />
    </Stack>
  );
}