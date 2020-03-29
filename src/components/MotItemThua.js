import React, { Component } from 'react';

class MotItemThua extends Component {
      constructor(props) {
            super(props);
            this.state = { valueInput: this.props.phoneCase }
      }
      changeInput = (e) => {
            this.setState({ valueInput: e.target.value })
      }
      changeItem=(param)=>{
            this.props.patchItem(param);
            this.setState({valueInput: this.props.phoneCase})
      }
      render() {
            console.log(this.state.valueInput);
            
            let { id, idDesign, idClient, phoneCase } = this.props;

            return (
                  <div className="d-flex justify-content-center">
                        <span className="item_thua">{idClient}</span>
                        <span className="item_thua">{idDesign}</span>

                        <input type="text"
                              placeholder="Recipient's username"
                              className="input_item_thua item_thua"
                              defaultValue={phoneCase}
                              onChange={this.changeInput}
                        />
                        <button type="button" className="btn btn-warning" onClick={()=>this.changeItem({id:id,phoneCase:this.state.valueInput})}>Thay đổi</button>



                  </div>
            );
      }
}

export default MotItemThua;