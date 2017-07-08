import React, {PropTypes}from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as courseActions from '../../actions/courseActions';
class CoursesPage extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      course: {title: ""}
    };

    this.onTiltleChange = this.onTiltleChange.bind(this);
    this.onClickSave = this.onClickSave.bind(this);
    this.coureRow = this.coureRow.bind(this);
  }

  onTiltleChange(event) {
    const course = this.state.course;
    course.title = event.target.value;
    this.setState({course: course});
  }

  coureRow(course, index) {
    return <div key={index}>{course.title}</div>;
  }

  onClickSave() {
    this.props.actions.createCourse(this.state.course);
  }

  render() {
    return (
      <div >
        <h1>Courses</h1>
          {this.props.courses.map(this.coureRow)}
        <h1>Add Course</h1>
        <input type="text"
               onChange={this.onTiltleChange}
               value={this.state.course.title}/>

        <input type="submit"
               onClick={this.onClickSave}
               value="Save"/>
      </div>
    );
  }
}

//state.courses is the object we expose in the reducerr



function mapStateToProps(state, ownProps) {
  return {
    courses: state.courses
  };
}

function mapDispatchToProp(dispatch){
  return {
    actions: bindActionCreators(courseActions,dispatch)
  };
}
CoursesPage.propTypes = {
  courses: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

export default connect(mapStateToProps,mapDispatchToProp)(CoursesPage);

