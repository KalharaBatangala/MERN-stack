import {useEffect} from 'react'
import {useWorkoutsContext} from '../hooks/useWorkoutsContext'


//components 
import WorkoutDetails from '../components/WorkoutDetails'
import WorkoutForm from '../components/WorkoutForm'



const Home = () => {
    const {workouts, dispatch} = useWorkoutsContext()
    //useEffect hook
    useEffect( () => {
        const fetchWorkouts = async () => {
            const response = await('/api/workouts')
            const json = await response.json()

            if (response.ok){
                dispatch({type: 'SET_WORKOUTS', payload: json})
            }
        }
    }, [])   // only call once

    return (
        <div className="home">
            <div className='workouts'>
                {workouts && workouts.map( (workout) => (
                    <WorkoutDetails key={workout._id} workout={workout} />
                ))}

            </div>
                <WorkoutForm/>
        </div>
    )
}

export default Home