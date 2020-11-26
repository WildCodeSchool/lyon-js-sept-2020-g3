import React, { useState, useEffect } from 'react';
import BackgroundSound from './audio/BackgroundSound.mp3';
import ButtonClick from './audio/ButtonClick.mp3';

export const SoundEffectContext = React.createContext();
export function SoundEffectContextProvider({ children }) {
  const [audio] = useState(new Audio(ButtonClick));
  const [buttonSound, setButtonSound] = useState(false);
  const [backgroundAudio] = useState(new Audio(BackgroundSound));
  const [backgroundAudioSound, setBackgroundAudioSound] = useState(false);

  useEffect(() => {
    if (buttonSound) {
      audio.play(ButtonClick);
    } else {
      audio.pause();
    }
  }, [buttonSound]);
  const useButton = () => {
    setButtonSound(!buttonSound);
  };

  useEffect(() => {
    if (backgroundAudioSound) {
      backgroundAudio.volume = 0.1;
      backgroundAudio.play(BackgroundSound);
    } else {
      backgroundAudio.pause();
    }
  }, [backgroundAudioSound]);
  const useBackgroundSound = () => {
    setBackgroundAudioSound(!backgroundAudioSound);
  };

  const playButtonSound = () => {
    if (buttonSound) {
      audio.play(ButtonClick);
    }
  };

  return (
    <SoundEffectContext.Provider
      value={{
        audio,
        buttonSound,
        setButtonSound,
        backgroundAudio,
        backgroundAudioSound,
        setBackgroundAudioSound,
        useButton,
        useBackgroundSound,
        ButtonClick,
        BackgroundSound,
        playButtonSound,
      }}
    >
      {children}
    </SoundEffectContext.Provider>
  );
}
