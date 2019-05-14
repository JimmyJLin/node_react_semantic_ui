import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FacebookShareButton, FacebookIcon, LinkedinShareButton, LinkedinIcon,  GooglePlusShareButton, GooglePlusIcon, TwitterShareButton, TwitterIcon, WhatsappShareButton, WhatsappIcon, RedditShareButton, RedditIcon, TumblrShareButton, TumblrIcon,  EmailShareButton, EmailIcon } from 'react-share';
import { setSpinner, fetchOneBlog } from '../../actions';

import { Container, Divider, Image, Grid } from 'semantic-ui-react'

const allthingsfrenchieUrl = 'https://allthingsfrenchie-staging.herokuapp.com'

class Blog extends Component {
  state = {
    blog: []
  }

  async componentWillMount(){

    const blogId = this.props.location.state;

    // console.log('inside componentWillMount', blogId)
    await this.props.fetchOneBlog(blogId)
    // console.log('this.props', this.props)
    await this.setState({
      blog: this.props.blog
    })

    // console.log('blog', this.state.blog)


    const spinner = {
      isLoading: false
    }
    await this.props.setSpinner(spinner)

  }

  renderingOneBlog(){
    const blog = this.state.blog;
    const {handle, image, body_html} = this.state.blog;
    if( _.isEmpty(blog) === false ) {
      const shareUrl = allthingsfrenchieUrl + this.props.location.pathname
      // console.log('shareUrl', shareUrl)
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
                <Container textAlign='center' id="social-share">
                  <FacebookShareButton className="social-padding" url={shareUrl}>
                    <FacebookIcon size={32} round={true} />
                  </FacebookShareButton>

                  <LinkedinShareButton className="social-padding" url={shareUrl}>
                    <LinkedinIcon size={32} round={true} />
                  </LinkedinShareButton>

                  <GooglePlusShareButton className="social-padding" url={shareUrl}>
                    <GooglePlusIcon size={32} round={true} />
                  </GooglePlusShareButton>

                  <TwitterShareButton className="social-padding" url={shareUrl}>
                    <TwitterIcon size={32} round={true} />
                  </TwitterShareButton>

                  <WhatsappShareButton className="social-padding" url={shareUrl}>
                    <WhatsappIcon size={32} round={true} />
                  </WhatsappShareButton>

                  <RedditShareButton className="social-padding" url={shareUrl}>
                    <RedditIcon size={32} round={true} />
                  </RedditShareButton>

                  <TumblrShareButton className="social-padding" url={shareUrl}>
                    <TumblrIcon size={32} round={true} />
                  </TumblrShareButton>

                  <EmailShareButton className="social-padding" url={shareUrl}>
                    <EmailIcon size={32} round={true} />
                  </EmailShareButton>
                </Container>
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
