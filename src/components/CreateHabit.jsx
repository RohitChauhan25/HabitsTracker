import { useState } from 'react'
import { Modal, Button, Form } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { addHabit } from '../store/habitSlice'
import { details } from '../store/habitSlice'

const CreateHabit = (props) => {
  const dispatch = useDispatch()
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')

  // handle new habits
  const AddHabitHandler = () => {
    dispatch(addHabit({ title, description, details }))
    setDescription('')
    setTitle('')
    props.onHide()
  }

  return (
    // Modal Component
    <Modal
      {...props}
      size="sm"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Dialog className="modal-sm">
        <Modal.Body>
          <Form onSubmit={() => AddHabitHandler}>
            <Form.Group controlId="title">
              <Form.Label>Habit Title</Form.Label>
              <Form.Control
                type="text"
                placeholder="enter title"
                value={title}
                autoFocus={true}
                required={true}
                onChange={(e) => setTitle(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId="description">
              <Form.Label>Describe it </Form.Label>
              <Form.Control
                type="text"
                placeholder="short description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Modal.Footer>
              <Button onClick={() => AddHabitHandler()}>Add Habit</Button>
            </Modal.Footer>
          </Form>
        </Modal.Body>
      </Modal.Dialog>
    </Modal>
  )
}

export default CreateHabit
