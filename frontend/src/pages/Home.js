import {useEffect, useState} from 'react'

//components 
import WorkoutDetails from '../components/WorkoutDetails'

const Home = () => {
    const [workouts, setWorkouts] = useState(null)
    //useEffect hook
    useEffect( () => {
        const fetchWorkouts = async () => {
            const response = await('/api/workouts')
            const json = await response.json()

            if (response.ok){
                setWorkouts(json)
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

        </div>
    )
}

export default Home