import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import React , { useEffect, useState } from 'react';

const GeolocationModal = ({show, handleClose, handleGetGeolocation}) => {
  const [errorMessage, setErrorMessage] = useState('');

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>位置情報</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {errorMessage ? (
            <p>{errorMessage}</p>
          ) : (
            <>
              位置情報を取得できません。
              位置情報を取得するには、ブラウザの設定を変更してください。
              このまま継続する場合は、つくばを中心とした検索結果を表示します。
            </>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            閉じる
          </Button>
          <Button variant="primary" onClick={() => handleGetGeolocation(setErrorMessage)}>
            位置情報を再取得
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default GeolocationModal;
