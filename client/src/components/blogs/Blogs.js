import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchPawsomePalBlogs } from '../../actions';

import { Container, Grid, Button, Card, Image } from 'semantic-ui-react'

import './_blogs.scss'

class Blogs extends Component {
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

  renderLatestBlogs(){
    const { pawsomeBlogs } = this.state

    const renderingPawsomeBlogs = pawsomeBlogs.slice(0, 3).map((e) => {
      const { id, title, image, body_html } = e
      const blogData = {
        id: id
      }
      return (
        <Card
          data={blogData}
          key={id}
          as={NavLink}
          to={`/blog/pawsomeblogs/${id}`}
        >
          <Image src={image.src} fluid />
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

        <Card.Group itemsPerRow={3} stackable>
          {this.renderLatestBlogs()}
        </Card.Group>

        <Grid.Row className="buttonContainer">
          <Button as={Link} className="moreButton" to="/blog/pawsomeblogs" color="black">
            <Button.Content visible>
              Read More ... >
            </Button.Content>
          </Button>
        </Grid.Row>

      </Container>
    )
  }
}

function mapStateToProps({ blogs }) {
  return { blogs };
}

export default  connect(mapStateToProps, { fetchPawsomePalBlogs })(Blogs);
