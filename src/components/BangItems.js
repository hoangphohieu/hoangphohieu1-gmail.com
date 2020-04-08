import React, { Component } from 'react';
import MotBanInTo from './MotBanInTo';
class Bang12Items extends Component {
      constructor(props, context) {
            super(props, context);
            this.state = {
                  psdDone: false
            }
      }
      psdDone = () => { this.setState({ psdDone: true }) }
      render() {
            let items = this.props.itemsBang12Items;
            console.log(items);

            let danhSachItem;
            if (items !== undefined) {
                  danhSachItem = items.map((item, key) =>
                        <MotBanInTo
                              key={key}
                              idClient={item.idClient}
                              phoneCase={item.name}
                              idDesign={item.idDesign}
                              amount={item.amount}
                              dayExcel={this.state.dayExcel}
                              country={item.country}
                              numberPosition={item.stt}
                              {...this.props}
                        />)
            }
            return (


                  <div className="container-fluid khoangcasch mt-5">
                        <div className={"container-fluid " + ((this.state.psdDone === true) ? "psd_done" : "")} style={{ width: 1840 }}>
                              <div className="row border_khung">
                                    <div className="col-12 border_khung" style={{ height: 70 }}>
                                          <h1 style={{ fontSize: 35 }}>
                                                Ban {this.props.numberTable + 1} {` excel ${this.props.day} - ${this.props.mounth}`}
                                                <button type="button" className="btn btn-primary ml-5" onClick={this.psdDone}>Done</button>
                                          </h1>

                                    </div>
                                    <div className="col-12">
                                          <div className="row">
                                                {danhSachItem}
                                          </div>
                                    </div>

                              </div>
                        </div>

                  </div>
            );
      }
}

export default Bang12Items;