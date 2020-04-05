import * as type from "../constants";
export default function callAPi(param) {
      // console.log(param);

      return new Promise((resolve, reject) => {
            let url =param ;
            // let url = type.URL_PC_FAIL ;
            // console.log("GetTacking",url);


            fetch(url, {
                  method: "GET"
            })
                  .then(response => response.json())
                  .then(res => {
                        // console.log(res);

                        resolve(res);
                  })
                  .catch(err => {
                        reject(err)
                  })
      })
}
