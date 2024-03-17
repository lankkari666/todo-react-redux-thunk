import './App.css'
import sort from './assets/sort-by-alphabet_icon-icons.com_73407.svg'
import { useEffect, useState, useMemo } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { debounce } from 'lodash'
import { Task } from './components/Task'
import { getTodos } from './redux/actions'
import { selectCreateTodo, selectSearchFlag, selectSearchInput, selectSortFlag, selectTasks } from './redux/selectors'
import { createTodo, setSorting, setSearchFlag, setSearchValue, setCreateValue } from './redux/actions'

function App() {
	const dispatch = useDispatch()
	const tasks = useSelector(selectTasks)
	const isSorted = useSelector(selectSortFlag)
	const searchFlag = useSelector(selectSearchFlag)
	const searchValue = useSelector(selectSearchInput)
	const createValue = useSelector(selectCreateTodo)
	const [isValidValue, setIsValidValue] = useState(false)


	useEffect(()=>{
		dispatch(getTodos(isSorted, searchValue))
	}, [isSorted, searchFlag])


	const create = ({target}) =>{
		dispatch(setCreateValue(target.value))
		if(target.value.length>=5){
			setIsValidValue(true)
		}
		else{
			setIsValidValue(false)
		}
	}


	const debounceSearch = useMemo(()=>debounce((searchValue)=>{dispatch(setSearchFlag(searchValue))}, 800),[])
	const search = ({target}) =>{
		dispatch(setSearchValue(target.value))
		debounceSearch(target.value)
	}

	const handleCreate = (event)=>{
		event.preventDefault()
		dispatch(createTodo(createValue))
		dispatch(setCreateValue(''));setIsValidValue(false)
	}

	const handleSorting =()=>{
		dispatch(setSorting(!isSorted))
	}

    return (
	<main>
		<div className='formContainer'>
			<form className='inputContainer' onSubmit={handleCreate}>
				<input onChange={create} value={createValue} type="text" placeholder='Создать новую задачу (не менее 5 символов)'/>
				<button disabled={!isValidValue} className='createTodo'>+</button>
			</form>
			<div className='inputContainer'>
				<input onChange={search} value={searchValue} type="text" placeholder='Поиск'/>
				<button onClick={handleSorting} style={isSorted?{backgroundColor: 'rgba(0, 0, 0, 0.4)'}: null} className='searchTodo'>
					<img className='sortImg' src={sort} alt="sort"/>
				</button>
			</div>
		</div>

		<ul className='TodosList'>
		{tasks.map(({id, title, completed})=>
			<Task key={id} id={id} title={title} completed={completed}/>
		)}
		</ul>
	</main>
  )
}

export default App
