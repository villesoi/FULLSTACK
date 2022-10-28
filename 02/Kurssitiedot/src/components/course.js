const Course = (props)=>{
    const courses = props.course
  
    return(
      <div>
          <>
          {courses.map(courses =>
          <h2 key={courses.id}>
              {courses.name}
              <ul>
                  {courses.parts.map(parts => (
                      <p key={parts.id}>
                        {parts.name} {parts.exercises}
                          </p>
                          
                  ))}
              </ul>
              <p>Total of {courses.parts.reduce((s,p)=> s + p.exercises,0)} exercises: </p>
          </h2>)}
          </>
      </div>
  )
  }

  export default Course