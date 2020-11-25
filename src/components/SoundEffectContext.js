import React, { useState } from 'react';
import BackgroundSound from './audio/BackgroundSound.mp3';
import ButtonClick from './audio/ButtonClick.mp3';

export const SoundEffectContext = React.createContext();
export function SoundEffectContextProvider({ children }) {
  const [audio] = useState(new Audio(ButtonClick));
  const [buttonSound, setButtonSound] = useState(true);
  const [backgroundAudio] = useState(new Audio(BackgroundSound));
  const [backgroundAudioSound, setBackgroundAudioSound] = useState(true);

  const useButton = () => {
    setButtonSound(!buttonSound);
    if (buttonSound) {
      audio.play(ButtonClick);
    } else {
      audio.pause();
    }
  };

  const useBackgroundSound = () => {
    setBackgroundAudioSound(!backgroundAudioSound);
    if (backgroundAudioSound) {
      backgroundAudio.play(BackgroundSound);
    } else {
      backgroundAudio.pause();
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
      }}
    >
      {children}
    </SoundEffectContext.Provider>
  );
}
