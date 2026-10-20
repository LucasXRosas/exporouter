import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import { useLocalSearchParams, router } from 'expo-router';

const FILMES = [
  { id: '0', nome: 'Interestelar' },
  { id: '1', nome: 'A Origem' },
  { id: '2', nome: 'Batman: O Cavaleiro das Trevas' },
  { id: '3', nome: 'Matrix' },
  { id: '4', nome: 'O Poderoso Chefão' },
  { id: '5', nome: 'Pulp Fiction' },
  { id: '6', nome: 'Clube da Luta' },
  { id: '7', nome: 'Avatar' },
  { id: '8', nome: 'Gladiador' },
  { id: '9', nome: 'Oppenheimer' },
];

export default function MovieDetailScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();

  const filme = FILMES.find((f) => f.id === id);
  const nomeFilme = filme ? filme.nome : 'Filme não encontrado';

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.idBadge}>ID: {id}</Text>
        <Text style={styles.detailText}>
          Exibindo detalhes do filme: <Text style={styles.movieTitle}>{nomeFilme}</Text>
        </Text>
      </View>

      <Pressable style={styles.backButton} onPress={() => router.back()}>
        <Text style={styles.backButtonText}>← Voltar</Text>
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
  card: {
    width: '100%',
    padding: 24,
    backgroundColor: '#1c1917',
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#451a03',
    alignItems: 'center',
    marginBottom: 24,
  },
  idBadge: {
    color: '#a8a29e',
    fontSize: 12,
    fontFamily: 'monospace',
    marginBottom: 12,
  },
  detailText: {
    fontSize: 18,
    color: '#f5f5f4',
    textAlign: 'center',
    lineHeight: 26,
  },
  movieTitle: {
    color: '#f59e0b',
    fontWeight: 'bold',
  },
  backButton: {
    paddingVertical: 14,
    paddingHorizontal: 24,
    backgroundColor: '#292524',
    borderRadius: 12,
  },
  backButtonText: {
    color: '#f59e0b',
    fontWeight: '600',
    fontSize: 14,
  },
});