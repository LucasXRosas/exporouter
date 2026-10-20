import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import { Link, router } from 'expo-router';

export default function IndexScreen() {
  const handleRandomMovie = () => {
    const randomId = Math.floor(Math.random() * 10).toString();
    router.push(`/movie/${randomId}`);
  };

  const handleLoggedInUser = () => {
    router.push('/home?user=Fulano');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Clube de Cinema</Text>
      <Text style={styles.subtitle}>Escolha como deseja navegar:</Text>

      <Link href="/home" asChild>
        <Pressable style={styles.buttonSecondary}>
          <Text style={styles.buttonTextSecondary}>Entrar como Convidado</Text>
        </Pressable>
      </Link>

      <Pressable style={styles.buttonPrimary} onPress={handleLoggedInUser}>
        <Text style={styles.buttonTextPrimary}>Entrar como Usuário Logado</Text>
      </Pressable>

      <Pressable style={styles.buttonAccent} onPress={handleRandomMovie}>
        <Text style={styles.buttonTextPrimary}>Ver um Filme Aleatório</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
    backgroundColor: '#0c0a09',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#f59e0b',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 14,
    color: '#a8a29e',
    marginBottom: 32,
  },
  buttonPrimary: {
    width: '100%',
    padding: 16,
    backgroundColor: '#f59e0b',
    borderRadius: 12,
    alignItems: 'center',
    marginVertical: 8,
  },
  buttonSecondary: {
    width: '100%',
    padding: 16,
    backgroundColor: '#292524',
    borderWidth: 1,
    borderColor: '#44403c',
    borderRadius: 12,
    alignItems: 'center',
    marginVertical: 8,
  },
  buttonAccent: {
    width: '100%',
    padding: 16,
    backgroundColor: '#78350f',
    borderRadius: 12,
    alignItems: 'center',
    marginVertical: 8,
  },
  buttonTextPrimary: {
    color: '#000000',
    fontWeight: 'bold',
    fontSize: 15,
  },
  buttonTextSecondary: {
    color: '#f59e0b',
    fontWeight: '600',
    fontSize: 15,
  },
});