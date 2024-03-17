import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteTodo } from '../redux/actions';
const DeletingField = (props) => {
	const {deletingField, id} = props

	DeletingField.propTypes={
	deletingField: PropTypes.func,
	id: PropTypes.string,
	}

	const dispatch = useDispatch()
	const handleRemove = ()=>{
		dispatch(deleteTodo(id))
	}

  return (
	<div className='dialogControls'>
		<button onClick={handleRemove}>Удалить</button>
		<button onClick={()=>deletingField('close')}>Отмена</button>
	</div>
  )
}

export default DeletingField
