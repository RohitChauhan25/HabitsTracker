import { Fragment } from 'react'
import { Row, Col } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { changeStatus } from '../store/habitSlice'
import { NotificationContainer, NotificationManager } from 'react-notifications'
import { Button, IconeWrapper } from '../style/habitDisplay'

const HabitDetails = ({ habit, habit: { details }, HabitIndex }) => {
  const dispatch = useDispatch()
  const day = new Date().getDay()

  // handlers to change status on click
  const checkStatusHandler = (status, HabitIndex, index) => {
    if (index >= day) {
      return NotificationManager.error(
        'You are not allowed to mark the status for future habit',
      )
    }
    dispatch(
      changeStatus({
        status: status,
        HabitIndex: HabitIndex,
        index: index,
      }),
    )
  }

  return (
    <Row>
      {details.map((detail, index) => (
        <Fragment key={detail.day}>
          <Col>
            <p className="day-headings">{detail.day}</p>
            <IconeWrapper>
              {detail.status === 'done' ? (
                <Button>
                  <i
                    className=" fa-lg fa-solid fa-circle-check done"
                    onClick={() =>
                      checkStatusHandler('none', HabitIndex, index)
                    }
                  ></i>
                </Button>
              ) : (
                <div>
                  <i
                    className="fa-solid fa-check"
                    onClick={() =>
                      checkStatusHandler('done', HabitIndex, index)
                    }
                  ></i>
                </div>
              )}

              {detail.status === 'fail' ? (
                <div>
                  <i
                    className=" fa-lg fa-solid fa-circle-xmark fail"
                    onClick={() =>
                      checkStatusHandler('none', HabitIndex, index)
                    }
                  ></i>
                </div>
              ) : (
                <div>
                  <i
                    class="fa-regular fa-circle-xmark"
                    onClick={() =>
                      checkStatusHandler('fail', HabitIndex, index)
                    }
                  ></i>
                </div>
              )}
            </IconeWrapper>
          </Col>
        </Fragment>
      ))}
      <NotificationContainer />
    </Row>
  )
}

export default HabitDetails
