import { useContext } from 'react'
import { Context } from '../contexts/DieselProvider'

const useDiesel = () => {
  const { diesel } = useContext(Context)
  return diesel
}

export default useDiesel