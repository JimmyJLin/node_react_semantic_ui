import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setSpinner, fetchOneBlog } from '../../actions';

import { Container, Divider, Image, Grid } from 'semantic-ui-react'

class Blog extends Component {
  state = {
    blog: []
  }

  async componentWillMount(){

    const blogId = this.props.location.state;

    console.log('inside componentWillMount', blogId)
    await this.props.fetchOneBlog(blogId)
    // console.log('this.props', this.props)
    await this.setState({
      blog: this.props.blog
    })

    console.log('blog', this.state.blog)


    const spinner = {
      isLoading: false
    }
    await this.props.setSpinner(spinner)

  }

  renderingOneBlog(){
    const blog = this.state.blog;
    const {handle, image, body_html} = this.state.blog;
    if( _.isEmpty(blog) === false ) {
      // console.log('YESSS')
      return(
        <div>
          <h2 className="centerAlign smallTopAndBottomPadding">{handle}</h2>

          <Grid divided='vertically'>
            <Grid.Row columns={2}>
              <Grid.Column>
                <Image src={image.src} size='large' rounded centered />
              </Grid.Column>
              <Grid.Column>
                <div className="centerAlign TopAndBottomPadding" dangerouslySetInnerHTML={{ __html: body_html }}>
                </div>
              </Grid.Column>
            </Grid.Row>
          </Grid>

        </div>
      )
    }
  }

  render(){
    return(
      <Container id="blog">
        <h1 className="centerAlign TopAndBottomPadding">PAWSOME PALS</h1>

        <Divider />

        {this.renderingOneBlog()}

      </Container>
    )
  }
}

function mapStateToProps({ spinner, blog }) {
  return { spinner, blog };
}
export default connect(mapStateToProps, { setSpinner, fetchOneBlog })(Blog);
