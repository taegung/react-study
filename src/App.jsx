import DefaultLayout from './layouts/DefaultLayout'
import TodoHeader from './components/todos/TodoHeader'
import TodoBody from './components/todos/TodoBody'
import { useState } from 'react'

const dummyTodos = [
  {
    id: 1,
    title: 'React 공부',
    summary: 'React를 공부한다.',
    category: 'TODO',
  },
  {
    id: 2,
    title: '점심 먹기',
    summary: '점심을 먹는다.',
    category: 'PROGRESS',
  },
  {
    id: 3,
    title: '커피 마시기',
    summary: '커피를 마신다.',
    category: 'DONE',
  },
  // 새롭게 추가된 할일 데이터
]

function App() {

  const [todos, setTodos] = useState(dummyTodos);
 
 
 
  const addTodoHandler = (title, summary, category) => {
    const newTodo = {
      id: self.crypto.randomUUID(), // ID 식별용 값
      title,
      summary,
      category
    }

    const updatedTodos = [...todos, newTodo];

    setTodos(updatedTodos);
  }

  /**
   * #1-4. 할일 수정 기능
   * @param {*} updateTodo 새롭게 갱신할 할일 객체
   */
  const updateTodoHandler = (updateTodo) => {
    const updatedTodos = todos.map(todo => todo.id === updateTodo.id ? { ...updateTodo } : todo);
    setTodos(updatedTodos);
  }
 

  // const deleteTodoHandler = (id) => setTodos(todos.filter(todo => todo.id !== id));
  const deleteTodoHandler = (id) => {
    // 선택된 할일을 제외한 나머지 할일 데이터만 가지고(filtered) 새로운 배열 생성
    const updatedTodos = todos.filter(todo => todo.id !== id);
    setTodos(updatedTodos);
  }

  const [searchTerm, setSearchTerm] = useState('');
const [selectedCategory, setFilter] = useState('ALL');

// 필터링 로직
const filterTodos = () => {
  return todos.filter((todo) => {
    const matchesCategory =
      selectedCategory === 'ALL' || todo.category === selectedCategory;
    const matchesSearch =
      searchTerm === '' || todo.title.includes(searchTerm);
    return matchesCategory && matchesSearch;
  });
};
const filteredTodos = filterTodos();

const handleSearch = (term) => {
  setSearchTerm(term); // 검색어 상태 업데이트
};


  return (
    <>
      <DefaultLayout>
        <header>
              <h1 className='pt-8 mx-auto text-red-200 max-w-max text-7xl'>
                <img className='ml-4' src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Smilies/Thought%20Balloon.png" alt="Thought Balloon" width="75" height="75" />
                <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Animals/Seal.png" alt="Seal" width="75" height="75" />
              </h1>
        </header>

        <section className='max-w-xl m-4 mx-auto'>
          <TodoHeader onAdd={addTodoHandler} category={selectedCategory} onFilter={setFilter}  onSearch={handleSearch} />
          <TodoBody todos={filteredTodos} onUpdate={updateTodoHandler} onDelete={deleteTodoHandler}/>
        </section>
      </DefaultLayout>    
    </>
  )
}

export default App
