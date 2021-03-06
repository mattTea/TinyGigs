import React from 'react';

export default class GigSearch extends React.Component {

  // propTypes: {
  //   gigType: React.PropTypes.string.isRequired
  // },
  
  onFormSubmit = (e) => {
    e.preventDefault();

    var gigs = this.refs.gigs; // there are no refs highlighted in the form below?

    this.props.onSearch(gigs); // if valid, call the parent 'onSearch' function
  }

  render() {
    var {gigType} = this.props;

    var renderFindGigsButton = () => {
      if (gigType === 'theatre') {
        return <button className="button">Find tiny <span style={{color: "white"}}>plays</span></button>
      } else {
        return <button className="button">Find tiny <span style={{color: "white"}}>gigs</span></button>
      }
    };

    return (
      <div>
        <form onSubmit={this.onFormSubmit}>
          {renderFindGigsButton()}
        </form>
      </div>
    );
  }
};
