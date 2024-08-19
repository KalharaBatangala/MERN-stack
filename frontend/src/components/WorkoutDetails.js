const WorkoutDetails = ( {workouts}) => {
    return(
        <div className="workout-details">
            <h4>{workouts.title}</h4>
            <p><strong> Load : (kg) </strong> {workout.load} </p>
            <p><strong> Reps : </strong> {workout.reps} </p>
            <p>{workout.createdAt} </p>
        </div>
    )
}

export default WorkoutDetails