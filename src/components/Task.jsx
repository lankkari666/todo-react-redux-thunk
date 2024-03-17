import '../App.css'
import { useState } from 'react';
import DeletingField from './DeletingField';
import EditingField from './EditingField';
import Controls from './Controls';
import PropTypes from 'prop-types';

export function Task({id, title, completed}){
	Task.propTypes={
		id: PropTypes.string,
		title: PropTypes.string,
		completed: PropTypes.bool,
		}

	const [isOpenEditingField, setIsOpenEditingField] = useState(false)
	const [isOpenDeletingField, setIsOpenDeletingField] = useState(false)
	const [value, setValue] = useState('')
	const [isValidValue, setIsValidValue] = useState(false)


	const validation = ({target}) =>{
		setValue(target.value)
		if(target.value.length>=5){
			setIsValidValue(true)
		}
		else{
			setIsValidValue(false)
		}
	}
	const editingField = (type) =>{
		switch(type) {
			case 'open':
			setIsOpenEditingField(true)
			break
			case 'close':
			setIsOpenEditingField(false);
			setIsValidValue(false)
			break
			default:
		}
	}
	const deletingField = (type) =>{
		switch(type) {
			case 'open':
			setIsOpenDeletingField(true)
			break
			case 'close':
			setIsOpenDeletingField(false);
			break
			default:
		}
	}

	return(
		<li className='todo' style={{borderLeft: `4px solid ${completed ? 'green' : 'red'}`}}>
			{isOpenEditingField
			? <input onChange={validation} value={value} className='editField' placeholder='Не менее 5 символов'/>
			:<p className='titleTask'>{title}</p>
			}
			{
			isOpenDeletingField
			? <DeletingField deletingField={deletingField} id={id}/>
			: isOpenEditingField
			? <EditingField isValidValue={isValidValue} value={value} editingField={editingField} id={id}/>
			: <Controls editingField={editingField} deletingField={deletingField} task={{id, title, completed}}/>
			}
		</li>
	)
}
