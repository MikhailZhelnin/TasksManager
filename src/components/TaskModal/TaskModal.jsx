import React from 'react';
import { useDispatch } from 'react-redux';

import {
  checkTask,
  deleteTask,
  closeTaskModal,
  addTaskPhoto,
} from '../../redux/actionCreators/groupActionCreator';

import { MdClose, MdCheck } from 'react-icons/md';
import { HiOutlinePhotograph } from 'react-icons/hi';

import './TaskModal.scss';

const TaskModal = ({ taskId }) => {
  const dispatch = useDispatch();

  const checkHandler = (taskId) => {
    dispatch(checkTask(taskId));
    dispatch(closeTaskModal(taskId));
  };

  const deleteHandler = (taskId) => {
    dispatch(deleteTask(taskId));
    dispatch(closeTaskModal(taskId));
  };

  const addImageHandler = (e) => {
    const reader = new FileReader();
    reader.onloadend = () => {
      if (reader.readyState === 2) {
        dispatch(addTaskPhoto(taskId, reader.result));
        dispatch(closeTaskModal(taskId));
      }
    };
    reader.readAsDataURL(e.target.files[0]);
  };

  return (
    <div className="taskModal">
      <MdCheck className="taskModal-btn" onClick={() => checkHandler(taskId)} />
      <input
        type="file"
        name="taskModal-btn__imgUpload"
        id="input"
        accept="image/*"
        onChange={addImageHandler}
      />
      <label htmlFor="input" className="taskModal-btn__imgUpload-label">
        <HiOutlinePhotograph className="taskModal-btn" />
      </label>
      <MdClose className="taskModal-btn" onClick={() => deleteHandler(taskId)} />
    </div>
  );
};

export default TaskModal;
