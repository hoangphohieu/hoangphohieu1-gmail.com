
import React, { Component } from 'react';
import XLSX from 'xlsx';
import _ from 'lodash';
import Bigtable from './BigTable';


class InputExcel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: null,
      dayExcel: null,
      mouthExcel: null
    }
  }


  //WARNING! To be deprecated in React v17. Use componentDidMount instead.
  componentWillMount() {
    this.props.getPCFail();
  }


  ProcessExcel = (data) => {
    //Read the Excel File data.
    var workbook = XLSX.read(data, {
      type: 'binary'
    });


    let dataExcel = workbook.Sheets.Sheet1;

    let rickDataExcel = {
      "Sheet1": []
    };



    for (let j = 2; j <= 5000; j++) {
      let rawPick = _.pick(dataExcel, [`A${j}`, `B${j}`, `C${j}`, `D${j}`, `E${j}`]);

      if (_.size(rawPick) === 5) {
        let rickPick = {
          idClient: rawPick[`A${j}`].w,
          country: rawPick[`B${j}`].w,
          amount: rawPick[`C${j}`].w,
          idDesign: rawPick[`D${j}`].w,
          phoneCase: rawPick[`E${j}`].w,

        }
        rickDataExcel.Sheet1.push(rickPick);

      }
    }

    this.setState({
      items: rickDataExcel,

    })


  };


  readSingleFile = (e) => {
    let _this = this;
    let timeExcel = e.target.files[0].name;


    timeExcel = timeExcel.split(".");
    timeExcel = timeExcel[0];
    timeExcel = timeExcel.split("_");
    let mouthExcel = timeExcel[1];
    let dayExcel = timeExcel[0];
    dayExcel = dayExcel.slice(3);
    this.setState({ dayExcel: dayExcel, mouthExcel: mouthExcel })



    //Validate whether File is valid Excel file.
    var regex = /^([a-zA-Z0-9\s_\\.\-:])+(.xls|.xlsx)$/;
    if (regex.test(e.target.value.toLowerCase())) {
      if (typeof (FileReader) != "undefined") {
        var reader = new FileReader();

        //For Browsers other than IE.
        if (reader.readAsBinaryString) {
          reader.onload = function (e) {

            // console.log(e.target.result);

            _this.ProcessExcel(e.target.result);
          };
          reader.readAsBinaryString(e.target.files[0]);
        } else {
          //For IE Browser.
          reader.onload = function (e) {
            var data = "";
            var bytes = new Uint8Array(e.target.result);
            for (var i = 0; i < bytes.byteLength; i++) {
              data += String.fromCharCode(bytes[i]);
            }
            _this.ProcessExcel(data);
          };
          reader.readAsArrayBuffer(e.target.files[0]);
        }
      } else {
        alert("This browser does not support HTML5.");
      }
    } else {
      alert("Please upload a valid Excel file.");
    }
  }


  render() {
    

    return (
      <div className="App ">
        <input type="file" id="fileinput" className="btn btn-warning" onChange={this.readSingleFile} style={{ display: "none" }} />
        <label htmlFor="fileinput" className="input_exel_file btn btn-warning">File Excel</label>
        <div id="dvExcel" />

        <Bigtable itemsLocal={this.state.items} day={this.state.dayExcel} mounth={this.state.mouthExcel} {...this.props}/>
      </div>
    );
  }
}

export default InputExcel;
