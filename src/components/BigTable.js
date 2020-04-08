import React, { Component } from 'react';
import BanTo from './BanTo';

import ItemThua from './ItemThua';
import _ from 'lodash';
import DownText from './DownText';
import FilesNone from './FilesNone';

class BigTable extends Component {
      constructor(props) {
            super(props);
            this.state = {
                  printScreen: false,
                  changePrint: false,
                  wkhay: 2400,
                  hkhay: 1200
            }
      }



      changeScreen = () => { this.setState({ printScreen: !this.state.printScreen }) }
      changePrint = () => { this.setState({ changePrint: !this.state.changePrint }) }
      render() {


            let items = this.props.itemsLocal;
            let itemSheet = JSON.parse(localStorage.PCProperties);
            let itemFail = JSON.parse(localStorage.PCFail);


            let itemCheck = [];
            let sumAmountBefore, sumAmountAfter, itemsFilter, itemThua;
            let amountAllPhoneCase = [];
            let allFileName = [];
            let dataSortItems = [];
            let arr = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], []];
            let danhsach2 = [];
            console.log(itemSheet);
            let danhSach = itemSheet.map(itemSheet1 => itemSheet1.nameDefault);
            // let danhSach = ["i6", "i6plus", "i7", "i7plus", "ix", "ixs", "ixr", "imax", "i11", "i11pro", "i11promax", "s7e", "s7", "s8", "s8plus", "note8", "s9", "s9plus", "note9", "s10e", "s10", "s10plus", "note10"
            //       , "note10plus", "sa50", "sa50s", "sa70", "sa6plus", "sj6plus", "of11", "of11pro", "oa5", "hp30", "hp30p", "hp20", "hp20p", "mate20p", "oneplus6"];

            {
                  itemSheet = itemSheet.map(param => {
                        let dataparam = [param.nameDefault, Number(param.width), Number(param.hight), param.nameVariant.split(",")];
                        dataparam[3] = dataparam[3].filter(param2 => { return param2 !== "" });
                        return dataparam
                  });
                  console.log(itemSheet);

            }





            if (items != null) {
                  // console.log(items.Sheet1);
                  items = items.Sheet1;
                  items = items.filter(item => (item.idClient !== undefined || item.amount !== undefined)); // lọc loại bỏ những item trắng
                  items = items.map(item => { return { ...item, amount: parseInt(item.amount) } }) // chuyển amount từ string sang number

                  sumAmountBefore = items.reduce((sum, item) => { // tính tổng amount
                        return (sum + parseInt(item.amount))
                  }, 0);
                  items = items.map(item => {
                        if (item.phoneCase === undefined) return item
                        else {
                              let itemFilter = itemSheet.filter(item2 => {
                                    let itemFilter2 = item2[3].filter(item3 => {
                                          if (item.phoneCase.trim().toLowerCase().endsWith(item3.trim().toLowerCase()) === true) {
                                                return true
                                          }
                                    });


                                    if (itemFilter2.length !== 0) { return true }
                                    else { return false }
                                    // đang code cái này
                              });
                              if (itemFilter.length === 1) {
                                    item.phoneCase = itemFilter[0][0];
                                    return item
                              }
                              else if (itemFilter.length > 1) {
                                    alert("kiểm tra lại endWith: " + item.phoneCase);
                                    window.location.reload();
                                    return item
                              }
                              else if (itemFilter.length === 0) {
                                    return item
                              }


                        }
                  });



                  for (let i = 0; i <= items.length - 1; i++) {  // lặp lại những item có amount >1
                        if (items[i].amount > 1) {
                              for (let j = 1; j < items[i].amount; j++) {
                                    items.push({ ...items[i], amount: 0 })
                              }
                        }
                  }

                  items = items.sort(function (a, b) { // lọc danh sách items theo idClient
                        var x = a.idClient.toLowerCase();
                        var y = b.idClient.toLowerCase();
                        if (x < y) { return -1; }
                        if (x > y) { return 1; }
                        return 0;
                  });

                  // console.log(items);
                  { // cái này để thông báo số lượng items trùng, nhưng đọc lại éo biết là đã code cái gì :)))
                        let obj = {}
                        for (let k = 0; k < items.length; k++) {
                              if (obj[items[k].idClient] === undefined) {
                                    obj[items[k].idClient] = [items[k]]
                              }
                              else {
                                    obj[items[k].idClient] = [...obj[items[k].idClient], items[k]]
                              }
                        }
                        obj = _.toPairs(obj);
                        obj = obj.map(param1 => {
                              return param1[1].map(param2 => {
                                    param2["amount"] = param1[1].length;
                                    return param2
                              })
                        })
                        obj = _.flattenDeep(obj);
                  }


                  // console.log(items);
                  itemsFilter = items.filter(items1 => {
                        let itemsFilter2 = itemSheet.filter(itemSheet1 => {
                              if (itemSheet1[0] === items1.phoneCase) { return true }
                              else { return false }
                        })
                        if (itemsFilter2.length !== 0) { return true }
                        else { return false }
                  })


                  // lấy item thừa 
                  itemThua = _.difference(items, itemsFilter);
                  // console.log(itemThua);

                  // lấy idDesign để xem file nào chưa có
                  allFileName = items.map(item => { return item.idDesign })


                  // đếm ốp
                  let allPhoneCase = [];
                  let bodem = {};

                  for (let j = 0; j < items.length; j++) { // lấy danh sách tên tất cả các đt trong items
                        if (allPhoneCase.indexOf(items[j].phoneCase) === -1)
                              allPhoneCase.push(items[j].phoneCase)
                  }

                  for (let j = 0; j < allPhoneCase.length; j++) {
                        let onePhoneCase = items.filter(item => { return item.phoneCase === allPhoneCase[j] });
                        let tenaaa = allPhoneCase[j];
                        bodem[tenaaa] = onePhoneCase.length;
                        // console.log(bodem);

                        amountAllPhoneCase.push(
                              <tr key={j}>
                                    <th scope="row">{j + 1}</th>
                                    <td className="cot_row">{allPhoneCase[j]}</td>
                                    <td className="cot_row">{onePhoneCase.length}</td>
                              </tr>)
                  }

                  danhsach2 = danhSach.map(param => {
                        if (bodem[param] !== undefined) return [param, bodem[param]]
                        else return [param, 0]
                  })
                  items = itemsFilter;
                  let pixel = this.state;
                  items = _.orderBy(items, ['phoneCase', 'idClient', 'idDesign'], ['asc', 'asc', 'desc']);
                  items = items.map((item, key) => { return { ...item, stt: key + 1 } });
                  items = items.map(item => { return { idClient: item.idClient, name: item.phoneCase, idDesign: item.idDesign.trim(), stt: item.stt, pixel: toPixel(item.phoneCase), country: item.country, amount: item.amount } })
                  // console.log(items);
                  function toPixel(toPixel1) {// toPixel1 là nameDefault
                        let dataToPixel1 = itemSheet.filter(itemSheet1 => {
                              if (toPixel1 === itemSheet1[0]) { return true }
                              else { return false }
                        })
                        if (dataToPixel1.length > 1) {
                              alert("trên sheet có dòng đt bị lặp", dataToPixel1);
                              console.log(dataToPixel1);

                              window.location.reload();
                        }
                        return { w: dataToPixel1[0][1], h: dataToPixel1[0][2] }
                  }
                  sumAmountAfter = items.length;

                  // chia khay
                  let hAll = pixel.hkhay;
                  let wAll = pixel.wkhay;
                  let hNow = hAll; let wNow = wAll;
                  let wLastCase = items[0].pixel.w;
                  let j = 0;

                  for (let i = 0; i <= items.length - 1; i++) {
                        let hI = items[i].pixel.h;
                        let wI = items[i].pixel.w;
                        // console.log(items[i].name);
                        if (((hNow - hI) >= 0) && ((wNow - wI) >= 0)) {
                              if ((wLastCase !== wI)) {
                                    if (wNow - wI - wLastCase >= 0) {

                                          arr[j].push(items[i]);
                                          hNow = hAll - hI;
                                          wNow = wNow - wLastCase;
                                          wLastCase = wI;
                                    }
                                    else {

                                          j = j + 1;
                                          arr[j].push(items[i]);
                                          hNow = hAll - hI;
                                          wNow = wAll;
                                          wLastCase = wI;
                                    }
                              }
                              else {

                                    arr[j].push(items[i]);
                                    hNow = hNow - hI;
                                    wLastCase = wI;

                              }

                        }
                        else if (((hNow - hI) >= 0) && ((wNow - wI) < 0)) {

                              j = j + 1;
                              arr[j].push(items[i]);
                              hNow = hAll - hI;
                              wNow = wAll;
                              wLastCase = wI;

                        }
                        else if (((hNow - hI) < 0) && ((wNow - wLastCase - wI) >= 0)) {

                              arr[j].push(items[i]);
                              hNow = hAll - hI;
                              wNow = wNow - wLastCase;
                              wLastCase = wI;

                        }
                        else if (((hNow - hI) < 0) && ((wNow - wLastCase - wI) < 0)) {

                              j = j + 1;
                              arr[j].push(items[i]);
                              hNow = hAll - hI;
                              wNow = wAll;
                              wLastCase = wI;


                        }
                        else {
                              alert("alert")
                        }
                  }
                  itemCheck = JSON.parse(JSON.stringify(items));

            } // het if param!==undefi param.namened
            arr = arr.filter(item => { return item.length > 0 });
            console.log(arr);

            itemFail = itemFail.filter(param4 => {
                  return (param4.idDesign !== null && param4.phoneCase !== null)
            })
            let itemNotPrint = [];
            {
                  for (let k = 0; k < itemCheck.length; k++) {
                        let itemC = [];
                        for (let m = 0; m < itemFail.length; m++) {
                              if ((itemFail[m].idDesign.toLowerCase().trim() === itemCheck[k].idDesign.toLowerCase().trim())
                                    && (itemFail[m].phoneCase.trim().toLowerCase() === itemCheck[k].name.toLowerCase().trim())
                              ) {
                                    itemC.push({ ...itemCheck[k], code: itemFail[m].stt });
                                    itemFail[m] = null;
                                    break;
                              }
                        }
                        itemFail = itemFail.filter(param3 => param3 !== null)
                        if (itemC.length !== 0) {
                              itemNotPrint.push(itemC[0]);
                        }
                  }
                  console.log(itemNotPrint);

                  return (
                        <React.Fragment>
                              {/* <button type="button" className="btn btn-primary mb-5 absolute inan" onClick={this.changePrint}>in ấn</button> */}
                              {(this.state.changePrint === true) ? "" :
                                    <div>
                                          <FilesNone dataNone={allFileName} itemNoPrint={itemNotPrint}  {...this.props} />
                                          <DownText dataMayInTo={arr} {...this.props} />
                                          <h2>Tổng tất cả phôi: {sumAmountAfter + " / " + sumAmountBefore}</h2>
                                          <h2>Số liệu bàn in: {arr.map(arr1 => <span className="so-lieu-ban">{arr1.length}</span>)}</h2>
                                          {/* <button type="button" className="btn btn-primary mb-5" onClick={this.changeScreen}>đổi theme</button> */}
                                          <ItemThua itemsThua={itemThua} {...this.props} />
                                    </div>

                              }
                              <BanTo itemsBanTo={arr} printScreen={this.state.printScreen} {...this.props} />


                              <div className="row justify-content-center">
                                    <div className="col-5">
                                          <h2 style={{ textAlign: 'center', marginTop: 50 }}>Tổng tất cả: {sumAmountAfter + "/" + sumAmountBefore}</h2>
                                          <table className="table table-striped table_amounts">
                                                <thead>
                                                      <tr>
                                                            <th scope="col">STT</th>
                                                            <th scope="col">Tên</th>
                                                            <th scope="col">Số lượng</th>
                                                      </tr>
                                                </thead>
                                                <tbody>
                                                      {amountAllPhoneCase}
                                                </tbody>
                                          </table>
                                    </div>
                                    <div className="col-5">
                                    <h2 style={{ textAlign: 'center', marginTop: 50 }}>Tổng tất cả: {sumAmountAfter + "/" + sumAmountBefore}</h2>
                                          <div className="row justify-content-around">
                                                <div className="col-3">
                                                      <table className="table  table_amounts">
                                                            <thead>
                                                                  <tr>
                                                                        <th scope="col">Tên</th>
                                                                  </tr>
                                                            </thead>
                                                            <tbody>
                                                                  {danhSach.map((param, key) => <tr key={key}>
                                                                        <td className="cot_row">{param}</td>
                                                                  </tr>)}
                                                            </tbody>
                                                      </table>
                                                </div>
                                                <div className="col-3">
                                                      <table className="table  table_amounts">
                                                            <thead>
                                                                  <tr>
                                                                        <th scope="col">Số lượng</th>
                                                                  </tr>
                                                            </thead>
                                                            <tbody>
                                                                  {danhsach2.map((param, key) => <tr key={key}>
                                                                        <td className="cot_row">{param[1]}</td>
                                                                  </tr>)}
                                                            </tbody>
                                                      </table>
                                                </div>
                                          </div>


                                    </div>

                              </div>


                        </React.Fragment>
                  );
            }
      }
}
export default BigTable;