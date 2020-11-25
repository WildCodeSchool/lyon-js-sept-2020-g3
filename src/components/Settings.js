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

  return (
    <div className="settingsBody">
      <Background />
      <div className="settingsTitle">
        <h2>Settings</h2>
      </div>
      <div className="backgroundSettings">
        <div className="containerButton">
          <button
            className={buttonSound ? 'buttonOff' : 'buttonOn'}
            type="button"
            onClick={useButton}
          >
            {!buttonSound ? 'No ' : ''}
            Effects
          </button>
          <button
            className={backgroundAudioSound ? 'buttonOff' : 'buttonOn'}
            type="button"
            onClick={useBackgroundSound}
          >
            {!backgroundAudioSound ? 'No ' : ''}
            Backgroung Music
          </button>
        </div>
      </div>
    </div>
  );
};

export default Settings;
