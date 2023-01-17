import React, {Component} from "react";

class PersonCard extends Component {
  constructor(props) {
    super(props);
    this.state = {age: this.props.age};
  }

  ageSum = () => {
    this.setState({age: this.state.age + 1});
    console.log(this.props.age);
  };

  render() {
    const {firstName, lastName, hairColor} = this.props;
    let {age} = this.state;
    return (
      <div>
        <h1>
          {lastName}, {firstName}
        </h1>
        <p>Age: {age}</p>
        <p>Hair Color: {hairColor}</p>
        <button onClick={this.ageSum}>
          Birthday button for {firstName} {lastName}
        </button>
      </div>
    );
  }
}

export default PersonCard;
