import tick from '../assets/check-circle-twotone.svg'
import cross from '../assets/close-circle-filled.svg'
import edit from '../assets/edit-svgrepo-com.svg'
import remove from '../assets/garbage-trash-svgrepo-com.svg'
import PropTypes from 'prop-types';
import { toggleCompleted } from '../redux/actions';
import { useDispatch } from 'react-redux';
const Controls = (props) => {
	const {editingField, deletingField, task} = props
	const dispatch = useDispatch()
	Controls.propTypes={
	editingField: PropTypes.func,
	deletingField: PropTypes.func,
	task: PropTypes.object
	}



	const handleToggler=()=>{
		dispatch(toggleCompleted(task))
	}

  return (
	<div className='controls'>
		<img className='isCompletedToggle' src={task.completed ? tick : cross} onClick={handleToggler} />
		<img className='isHovered' src={edit} onClick={()=>editingField('open')} />
		<img className='isHovered' src={remove} onClick={()=>deletingField('open')} />
	</div>
  )
}

export default Controls
