import React, { useContext } from 'react';
import Background from './Background';
import './Settings.scss';
import { SoundEffectContext } from './SoundEffectContext';

const Settings = () => {
  const {
    useButton,
    useBackgroundSound,
    buttonSound,
    backgroundAudioSound,
  } = useContext(SoundEffectContext);

  // const setSoundAndButton = () => {
  //   useButton();
  //   useBackgroundSound();
  // };

  return (
    <div className="settingsBody">
      <Background />
      <div className="settingsTitle">
        <h2>Settings</h2>
      </div>
      <div className="backgroundSettings">
        <div className="containerButton">
          <button
            className={buttonSound ? 'buttonOn' : 'buttonOff'}
            type="button"
            onClick={useButton}
          >
            {buttonSound ? 'No ' : ''}
            EFFECT
          </button>
          <button
            className={backgroundAudioSound ? 'buttonOn' : 'buttonOff'}
            type="button"
            onClick={useBackgroundSound}
          >
            {backgroundAudioSound ? 'No ' : ''}
            SOUND
          </button>
        </div>
      </div>
    </div>
  );
};

export default Settings;
