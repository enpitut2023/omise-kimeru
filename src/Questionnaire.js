import React, { useState } from 'react';
import Question from './Question';
// import Modal from 'react-bootstrap/Modal';
// import Button from 'react-bootstrap/Button';

// const CannotGetGeolocationModal = ({isGetGeolocation}) => {
//   console.log(isGetGeolocation)
//   const [show, setShow] = useState();
//   const handleClose = () => setShow(false);

//   return (
//     <>
//       <Modal show={show} onHide={handleClose}>
//         <Modal.Header closeButton>
//           <Modal.Title>位置情報</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           位置情報を取得できません。
//           位置情報を取得するには、ブラウザの設定を変更してください。
//         </Modal.Body>
//         <Modal.Footer>
//           <Button variant="secondary" onClick={handleClose}>
//             閉じる
//           </Button>
//         </Modal.Footer>
//       </Modal>
//     </>
//   );
// }

function Questionnaire(props){
  const filterAttr = props.filterAttr
  const setFilterAttr = props.setFilterAttr
  const setFilteredShops = props.setFilteredShops
  const setFinish = props.setFinish
  const getShops = props.getShops
  const isGetGeolocation = props.isGetGeolocation

  return (
    <div
    className="App"
    style={{
        textAlign : 'center',
        backgroundColor : 'rgb(245,235,235)',
        padding : '5%'
    }}>
        {
          // <CannotGetGeolocationModal
          //   isGetGeolocation={isGetGeolocation}
          // />
        }
        <Question
          filterAttr={ filterAttr }
          setFilterAttr={ setFilterAttr }
        />

        <button
        style={{
          padding : '5%'
        }}
        onClick={async () => {
          const filteredShops = await getShops();
          setFilteredShops(filteredShops);
          setFinish(true)
        }}>
          今日のご飯を決める！
        </button>
    </div>
    )
}

export default Questionnaire;
