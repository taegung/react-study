import React,{useState} from 'react'
import TodoFilter from './TodoFliter'
import { createPortal } from 'react-dom';
import Modal from '../ui/Modal';
import TodoForm from './TodoForm';


const TodoHeader = () => {
  const [openModal,open] =useState(false);

  return (
    <div className="flex items-center justify-between mb-2" id="task-control">
    <button 
            onClick={()=>open(true)}
            className="px-6 py-2 font-semibold text-gray-100 bg-gray-800 border-none rounded cursor-pointer"
            data-cy="add-todo-button">Add Todo
    </button>
    {/* Modal이 생성되는 위치 */}
    {openModal && createPortal(
      <Modal>
        {/* 함수도 props로 전달 가능하다 */}
        {/* Todoheader가 가진 open()함수 시그니처를 onclose라는 props이름으로 TodoForm에 전달 */}
        <TodoForm onClose={()=>open(false)}/>
      </Modal>,
      document.body
    )}
    
    <TodoFilter/>
  </div>
  )
}
export default TodoHeader