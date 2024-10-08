import React, { useRef, useState } from 'react';
import { StyleSheet, View, Button, Dimensions } from 'react-native';
import { Video } from 'expo-av';

// Obtener las dimensiones de la pantalla
const { width, height } = Dimensions.get('window');

export default function VideoScreen() {
  const video = useRef(null);
  const [status, setStatus] = useState({});

  return (
    <View style={styles.container}>
      <Video
        ref={video}
        style={styles.video}
        source={require('../assets/videoPelea.mp4')} // Ruta al archivo MP4
        useNativeControls
        resizeMode="contain" // Ajuste de contenido
        isLooping
        onPlaybackStatusUpdate={status => setStatus(() => status)}
      />
      <View style={styles.controls}>
        <Button
          title={status.isPlaying ? 'Pause' : 'Play'}
          onPress={() =>
            status.isPlaying ? video.current.pauseAsync() : video.current.playAsync()
          }
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  video: {
    width: width, // Ancho completo de la pantalla
    height: height * 0.8, // Ajusta la altura al 50% de la pantalla (puedes modificar este valor)
  },
  controls: {
    marginTop: 10,
  },
});