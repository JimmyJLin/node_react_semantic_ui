import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import LazyLoad from 'react-lazy-load';
import { fetchPawsomePalBlogs } from '../../actions';

import { Container, Card, Image, Divider } from 'semantic-ui-react'

import './_blogs.scss'

class PawsomeBlogs extends Component {
  state = {
    pawsomeBlogs: []
  }
  async componentDidMount(){
    await this.props.fetchPawsomePalBlogs()
    await this.setState({
      pawsomeBlogs: this.props.blogs
    })
    // console.log('pawsomeBlogs', this.state.pawsomeBlogs)
  }

  renderAllBlogs(){
    const { pawsomeBlogs } = this.state

    const renderingPawsomeBlogs = pawsomeBlogs.map((e) => {
      const { id, title, image, body_html, handle } = e
      const blogData = {
        id: id
      }
      return (
        <Card
          data={blogData}
          key={id}
          as={NavLink}
          to={{
            pathname: `/blog/pawsomeblogs/${handle}`,
            state: {
              blogId: id
            }
          }}
        >
          <LazyLoad>
            <Image src={image.src} fluid />
          </LazyLoad>
          <Card.Content>
            <Card.Header> { title } </Card.Header>
            <Card.Description>
              <div dangerouslySetInnerHTML={{ __html: body_html }}>
              </div>
            </Card.Description>
          </Card.Content>
        </Card>
      )
    })

    return renderingPawsomeBlogs

  }

  render() {
    return (
      <Container id="blogs">
        <h2 id="title">Pawsome Pals Blog</h2>
        <Divider className="TopAndBottomPadding" />

        <Card.Group itemsPerRow={3} stackable>
            {this.renderAllBlogs()}
        </Card.Group>

      </Container>
    )
  }
}

function mapStateToProps({ blogs }) {
  return { blogs };
}

export default  connect(mapStateToProps, { fetchPawsomePalBlogs })(PawsomeBlogs);
