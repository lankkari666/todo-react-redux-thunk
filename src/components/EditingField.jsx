import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { editTodo } from '../redux/actions';

const EditingField = (props) => {
	const {isValidValue, editingField, value, id} = props
	const dispatch = useDispatch()
	EditingField.propTypes={
		value: PropTypes.string,
		id: PropTypes.string,
		isValidValue: PropTypes.bool,
		editingField: PropTypes.func,
	}

	const handleEdit = ()=>{dispatch(editTodo(value ,id));editingField('close')}

  return (
	<div className='dialogControls'>
		<button disabled={!isValidValue} onClick={handleEdit}>Изменить</button>
		<button onClick={()=>{editingField('close')}}>Отмена</button>
	</div>
  )
}

export default EditingField
