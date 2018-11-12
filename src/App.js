import React, { Component } from 'react';

// Components
// import EditToggle from './components/EditToggle';
import ColorChanger from './components/ColorChanger';
// import SizeChanger from './components/SizeChanger';
// import FamilyChanger from './components/FamilyChanger';
import TextContainer from './components/TextContainer';

class App extends Component {
  //constructor
  constructor(){
    super()
    this.state = {
      fontColor: 'black',
      fontSize: 12,
      fontFamily: 'monospace',
      allowEdit: 'true'
  }
  this.updateColor = this.updateColor.bind(this)
  this.updateSize = this.updateSize.bind(this)
  this.updateFamily = this.updateFamily.bind(this)
  this.updateEditStatus = this.updateEditStatus.bind(this)
}

//updateColor
updateColor(color){
  this.setState({ fontColor: color })
}
//updateSize
updateSize(size){
  this.setState({ fontSize: size })
}
//updateFamily
updateFamily(val){
  this.setState({ fontFamily: val })
}
//updateEditStatus
updateEditStatus(status){
  this.setState({ allowEdit: status })
}

  render() {
    return (
      <div>
        <div className="headerBar">
          {/* <EditToggle /> */}
          <ColorChanger changeColor={this.updateColor} />
          {/* <SizeChanger/> */}
          {/* <FamilyChanger/> */}
        </div>
        <div className="textArea">
          <TextContainer color={this.state.fontColor} />
        </div>
      </div>
    )
  }
}

export default App;
