import React, { Component } from 'react';
import copy from 'copy-to-clipboard';
class ItemBanTo extends Component {
      constructor(props) {
            super(props);
            this.state = {
                  copy: false
            }
      }

      tempAlert = (msg, duration) => {
            var el = document.createElement("div");
            el.setAttribute("style", "position:fixed;z-index:1000;top:10px;left:46%;background-color:#80ced6;padding:10px;font-size:2rem;color:white");
            el.innerHTML = msg;
            setTimeout(function () {
                  el.parentNode.removeChild(el);
            }, duration);
            document.body.appendChild(el);
      }

      copyVanban = (param) => {

            copy(param);
            this.tempAlert(param, 200);
      }
      inLai = (param) => {
            this.props.addNewItem(param)
      }

      render() {
            let { idDesign, idClient, phoneCase, printScreen, numberPosition, amount } = this.props;
            return (
                  <div className={"col-2  border_khung mot_ban_to "} style={{ position: 'relative' }}>
                        {(amount > 1) ? <p className="amount-css">{amount}</p> : ""}
                        <p className={" code_design" + ((amount > 1) ? " any_more " : "")} onClick={() => this.copyVanban(idClient)}>{idClient}</p>
                        <p className={"code_phone_case"}>{phoneCase}</p>
                        <p className={"code_day_excel"}>{(amount >= 1) ? (this.props.day + " -") : ""} <span>{(idDesign !== null) ? ((this.props.country.toLowerCase() === "us" || this.props.country.toLowerCase() === "united states") ? "US" : "WW") : ""}</span></p>
                        <p className={"p_ban_to" + (printScreen === true) ? "design_idDesign_banTo" : ""} style={{ color: "blue" }} onClick={() => this.copyVanban(idDesign)}>{idDesign}</p>
                        }
                        <p className="numberPosition">{numberPosition}</p>



                  </div>
            );
      }
}

export default ItemBanTo;