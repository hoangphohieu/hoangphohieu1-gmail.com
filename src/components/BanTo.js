import React, { Component } from 'react';
import BangItems from './BangItems';
import copy from 'copy-to-clipboard';
import _ from 'lodash';
class BanTo extends Component {
       copyData =(param)=>{copy(param)}

      render() {
            let items = this.props.itemsBanTo;
            let danhSachItem;

            // console.log(items);


            if (items !== undefined) {
                  danhSachItem = items.map((item, key) => <BangItems key={key} ban={"to"} itemsBang12Items={item} numberTable={key} {...this.props} />)
            }
            return (<React.Fragment>
                  {danhSachItem}
            </React.Fragment>
            );
      }
}

export default BanTo;