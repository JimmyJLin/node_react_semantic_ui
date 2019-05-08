import React, { Component } from 'react';
import { connect } from 'react-redux';

import { setSpinner, fetchOneBlog } from '../../actions';

class Blog extends Component {
  state = {
    blog: []
  }

  async componentDidMount(){
    const blogId = this.props.match.params;

    await this.props.fetchOneBlog(blogId)
    console.log('this.props', this.props)
    await this.setState({
      blog: this.props.blog
    })

    console.log('blog', this.state.blog)


    const spinner = {
      isLoading: false
    }
    await this.props.setSpinner(spinner)

  }

  render(){
    return(
      <div>One Blog</div>
    )
  }
}

function mapStateToProps({ spinner, blog }) {
  return { spinner, blog };
}
export default connect(mapStateToProps, { setSpinner, fetchOneBlog })(Blog);
