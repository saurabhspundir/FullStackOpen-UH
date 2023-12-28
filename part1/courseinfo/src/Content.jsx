
import Part from "./Part"

const Content = (props) => {
  return (
    <>
      <Part part={props.contents[0].part} exercises={props.contents[0].exercises}/>
      <Part part={props.contents[1].part} exercises={props.contents[1].exercises}/>
      <Part part={props.contents[2].part} exercises={props.contents[2].exercises}/>
    </>
  )
}

export default Content
