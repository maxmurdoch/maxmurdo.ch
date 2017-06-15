import {Component} from 'react'
import R from 'ramda'
import tumblr from 'tumblr.js'
import {hh, ul, li} from 'react-hyperscript-helpers'

class Mood extends Component {
  constructor(props) {
    super(props)
    this.state = {
      posts: []
    }
  }

  componentDidMount() {
    fetch(
      `https://api.tumblr.com/v2/blog/maxmurdoch.tumblr.com/posts?api_key=KGcPldTmGEoIeXcfOZJTs6NSWRBDFGClVQ99earSHwO6NnTDZX`,
      {mode: `no-cors`}
    )
      .then(response => response.status)
      .then(data => console.log(data))
      .catch(error => console.log(`error`, error.stack))

    const client = tumblr.createClient({
      consumer_key: `KGcPldTmGEoIeXcfOZJTs6NSWRBDFGClVQ99earSHwO6NnTDZX`,
      returnPromises: true
    })

    client.blogPosts(`maxmurdoch.tumblr.com`, (err, data) => {
      console.log(err, data)
      this.setState({
        posts: data.response.posts
      })
    })
  }

  render() {
    return ul(R.map(post => li(post.description)), this.state.posts)
  }
}

export default hh(Mood)
