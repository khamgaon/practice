class ProfilePicture extends React.Component {
  render(){
    var user = this.props.user;
    return (
      <View>
        <Image uri="user.profilePhoto.uri" width={...}/>
        <Slider onChange={value => this.setSize(value)}/>
      </View>
    )
  }
}



module.exports  = Relay.createContainer(ProfilePicture, {
    initialVariables  : {
      size : 32
    },
    fragments : {
      user : () => Relay.QL`
        fragment on User {
          profilePhoto(size: $size) {
            uri,
          },
        }
      `
    }
})
