import React, { useEffect } from 'react';
import PwaInstallPrompt from 'pwa-install-prompt';
import 'pwa-install-prompt/style.css';

const PromptInstall = () => {
  useEffect(() => {
    new PwaInstallPrompt('.pwa-install-prompt__container', {
      condition: null,
      expires: 180,
      show_after: 90,
    });
  }, []);

  return (
    <div className="pwa-install-prompt__container">
      <button className="pwa-install-prompt__overlay" type="button">
        Close
      </button>
      <div className="pwa-install-prompt">
        <div className="pwa-install-prompt__icon__container">
          <img
            className="pwa-install-prompt__icon"
            src="apple-touch-icon.png"
            alt="Установите на домашний экран"
          />
        </div>
        <div className="pwa-install-prompt__content">
          <h3 className="pwa-install-prompt__title">Установка</h3>
          <p className="pwa-install-prompt__text">
            Установите приложение на домашний экран для быстрого и удобного доступа к своим данным
          </p>
          <p className="pwa-install-prompt__guide">
            <span>Нажмите</span>
            <svg className="pwa-install-prompt__guide__icon" viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg">
              <title>Поделиться</title>
              <path
                fill="#007AFF"
                d="M48.883,22.992L61.146,10.677L61.146,78.282C61.146,80.005 62.285,81.149 64,81.149C65.715,81.149 66.854,80.005 66.854,78.282L66.854,10.677L79.117,22.992C79.693,23.57 80.256,23.853 81.114,23.853C81.971,23.853 82.534,23.57 83.11,22.992C84.25,21.848 84.25,20.125 83.11,18.981L65.997,1.794C65.715,1.511 65.421,1.215 65.139,1.215C64.563,0.932 63.718,0.932 62.861,1.215C62.579,1.498 62.285,1.498 62.003,1.794L44.89,18.981C43.75,20.125 43.75,21.848 44.89,22.992C46.029,24.149 47.744,24.149 48.883,22.992ZM103.936,35.32L81.114,35.32L81.114,41.053L103.936,41.053L103.936,121.27L24.064,121.27L24.064,41.053L46.886,41.053L46.886,35.32L24.064,35.32C20.928,35.32 18.355,37.904 18.355,41.053L18.355,121.27C18.355,124.419 20.928,127.003 24.064,127.003L103.936,127.003C107.072,127.003 109.645,124.419 109.645,121.27L109.645,41.053C109.645,37.891 107.072,35.32 103.936,35.32Z"
              />
            </svg>
          </p>
          <p className="pwa-install-prompt__guide">и добавить на экран &quot;Домой&quot;</p>
        </div>
      </div>
    </div>
  );
};

export default PromptInstall;
