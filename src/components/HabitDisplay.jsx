import { ListGroup } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import HabitDetails from './HabitDetails'
import { Description, Title, TitleWrapper } from '../style/habitDisplay'

const HabitDisplay = () => {
  const { habits } = useSelector((state) => state.allHabits)

  return (
    <div className="mt-4 ">
      {habits?.map((habit, index) => (
        <ListGroup.Item key={index} className="mb-3 rounded gradient1">
          <TitleWrapper>
            <Title>{habit.title} :</Title>
            <Description>{habit.description}</Description>
          </TitleWrapper>
          <HabitDetails key={habit.title} habit={habit} HabitIndex={index} />
        </ListGroup.Item>
      ))}
    </div>
  )
}

export default HabitDisplay
