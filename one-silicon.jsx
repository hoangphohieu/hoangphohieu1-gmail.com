
/*
Code for Import https://scriptui.joonas.me — (Triple click to select): 
{"activeId":15,"items":{"item-0":{"id":0,"type":"Dialog","parentId":false,"style":{"enabled":true,"varName":null,"windowType":"Dialog","creationProps":{"su1PanelCoordinates":false,"maximizeButton":false,"minimizeButton":false,"independent":false,"closeButton":true,"borderless":false,"resizeable":false},"text":"in silicon","preferredSize":[300,200],"margins":16,"orientation":"column","spacing":10,"alignChildren":["center","top"]}},"item-3":{"id":3,"type":"Panel","parentId":9,"style":{"enabled":true,"varName":null,"creationProps":{"borderStyle":"etched","su1PanelCoordinates":false},"text":"Chiều rộng","preferredSize":[130,0],"margins":10,"orientation":"column","spacing":10,"alignChildren":["fill","top"],"alignment":null}},"item-4":{"id":4,"type":"EditText","parentId":3,"style":{"enabled":true,"varName":null,"creationProps":{"noecho":false,"readonly":false,"multiline":false,"scrollable":false,"borderless":false,"enterKeySignalsOnChange":false},"softWrap":false,"text":"20","justify":"left","preferredSize":[0,0],"alignment":null,"helpTip":null}},"item-5":{"id":5,"type":"Panel","parentId":9,"style":{"enabled":true,"varName":null,"creationProps":{"borderStyle":"etched","su1PanelCoordinates":false},"text":"Chiều cao","preferredSize":[130,0],"margins":10,"orientation":"column","spacing":10,"alignChildren":["fill","top"],"alignment":null}},"item-6":{"id":6,"type":"EditText","parentId":5,"style":{"enabled":true,"varName":null,"creationProps":{"noecho":false,"readonly":false,"multiline":false,"scrollable":false,"borderless":false,"enterKeySignalsOnChange":false},"softWrap":false,"text":"20","justify":"left","preferredSize":[0,0],"alignment":null,"helpTip":null}},"item-7":{"id":7,"type":"StaticText","parentId":8,"style":{"enabled":true,"varName":null,"creationProps":{"truncate":"none","multiline":false,"scrolling":false},"softWrap":true,"text":"Đơn vị: mm","justify":"left","preferredSize":[0,0],"alignment":null,"helpTip":null}},"item-8":{"id":8,"type":"Group","parentId":0,"style":{"enabled":true,"varName":null,"preferredSize":[0,0],"margins":0,"orientation":"row","spacing":10,"alignChildren":["left","center"],"alignment":null}},"item-9":{"id":9,"type":"Group","parentId":0,"style":{"enabled":true,"varName":null,"preferredSize":[0,0],"margins":0,"orientation":"row","spacing":10,"alignChildren":["left","center"],"alignment":null}},"item-11":{"id":11,"type":"Panel","parentId":0,"style":{"enabled":true,"varName":null,"creationProps":{"borderStyle":"etched","su1PanelCoordinates":false},"text":"Mã Design","preferredSize":[272,0],"margins":10,"orientation":"column","spacing":10,"alignChildren":["fill","top"],"alignment":null}},"item-12":{"id":12,"type":"EditText","parentId":11,"style":{"enabled":true,"varName":null,"creationProps":{"noecho":false,"readonly":false,"multiline":false,"scrollable":false,"borderless":false,"enterKeySignalsOnChange":false},"softWrap":false,"text":"aaa1","justify":"left","preferredSize":[0,0],"alignment":null,"helpTip":null}},"item-13":{"id":13,"type":"Group","parentId":0,"style":{"enabled":true,"varName":null,"preferredSize":[0,0],"margins":0,"orientation":"row","spacing":40,"alignChildren":["center","center"],"alignment":null}},"item-14":{"id":14,"type":"Button","parentId":13,"style":{"enabled":true,"varName":null,"text":"OK","justify":"left","preferredSize":[0,0],"alignment":null,"helpTip":null}},"item-15":{"id":15,"type":"Button","parentId":13,"style":{"enabled":true,"varName":null,"text":"Hủy","justify":"center","preferredSize":[0,0],"alignment":null,"helpTip":null}}},"order":[0,8,7,9,5,6,3,4,11,12,13,14,15],"settings":{"importJSON":true,"indentSize":false,"cepExport":false,"includeCSSJS":true,"showDialog":true,"functionWrapper":false,"afterEffectsDockable":false,"itemReferenceList":"None"}}
*/

// DIALOG
// ======
app.preferences.rulerUnits = Units.PIXELS; // hệ đo pixel
{ // UI dialog
    var dialog = new Window("dialog");
    dialog.text = "in silicon";
    dialog.preferredSize.width = 300;
    dialog.preferredSize.height = 200;
    dialog.orientation = "column";
    dialog.alignChildren = ["center", "top"];
    dialog.spacing = 10;
    dialog.margins = 16;

    // GROUP1
    // ======
    var group1 = dialog.add("group", undefined, { name: "group1" });
    group1.orientation = "row";
    group1.alignChildren = ["left", "center"];
    group1.spacing = 10;
    group1.margins = 0;

    var statictext1 = group1.add("statictext", undefined, undefined, { name: "statictext1" });
    statictext1.text = "Đơn vị: mm";

    // GROUP2
    // ======
    var group2 = dialog.add("group", undefined, { name: "group2" });
    group2.orientation = "row";
    group2.alignChildren = ["left", "center"];
    group2.spacing = 10;
    group2.margins = 0;

    // PANEL1
    // ======
    var panel1 = group2.add("panel", undefined, undefined, { name: "panel1" });
    panel1.text = "Chiều rộng";
    panel1.preferredSize.width = 130;
    panel1.orientation = "column";
    panel1.alignChildren = ["fill", "top"];
    panel1.spacing = 10;
    panel1.margins = 10;

    var edittext1 = panel1.add('edittext {properties: {name: "edittext1"}}');
    edittext1.text = "";

    // PANEL2
    // ======
    var panel2 = group2.add("panel", undefined, undefined, { name: "panel2" });
    panel2.text = "Chiều cao";
    panel2.preferredSize.width = 130;
    panel2.orientation = "column";
    panel2.alignChildren = ["fill", "top"];
    panel2.spacing = 10;
    panel2.margins = 10;

    var edittext2 = panel2.add('edittext {properties: {name: "edittext2"}}');
    edittext2.text = "";

    // PANEL3
    // ======
    var panel3 = dialog.add("panel", undefined, undefined, { name: "panel3" });
    panel3.text = "Mã Design";
    panel3.preferredSize.width = 272;
    panel3.orientation = "column";
    panel3.alignChildren = ["fill", "top"];
    panel3.spacing = 10;
    panel3.margins = 10;

    var edittext3 = panel3.add('edittext {properties: {name: "edittext3"}}');
    edittext3.text = "";

    // GROUP3
    // ======
    var group3 = dialog.add("group", undefined, { name: "group3" });
    group3.orientation = "row";
    group3.alignChildren = ["center", "center"];
    group3.spacing = 40;
    group3.margins = 0;

    var button1 = group3.add("button", undefined, undefined, { name: "button1" });
    button1.text = "OK";
    button1.justify = "left";

    var button2 = group3.add("button", undefined, undefined, { name: "button2" });
    button2.text = "Hủy";
}

button1.onClick = function () { // on click oke


    if (edittext1.text == "") {
        alert("Nhập đẩy đủ thông tin !");
    }
    else if (isNaN(Number(edittext1.text))) {
        alert("Nhập sai thông tin !");
    }
    else if (edittext2.text == "") {
        alert("Nhập đẩy đủ thông tin !");
    }
    else if (isNaN(Number(edittext2.text))) {
        alert("Nhập sai thông tin !");
    }
    else if (edittext3.text == "") {
        alert("Nhập đẩy đủ thông tin !");
    }

    else {  // bắt đầu xử lý ảnh

        try {
            var wphone = edittext1.text;
            var hphone = edittext2.text;
            var idDesign = edittext3.text;
            var paddingPrintTB = 5;
            var paddingPrintLR = 5;
            wphone = Math.round(wphone / 0.084667);
            hphone = Math.round(hphone / 0.084667);

            app.open(File("~/Desktop/file design/" + idDesign + ".tif"));


            var checkIdDesign = idDesign.split("-");
            checkIdDesign = checkIdDesign[checkIdDesign.length - 1];
            if (checkIdDesign !== "spot") {
                if (app.activeDocument.artLayers.length === 1) { // nhân đôi layer, kiểm tra nếu có 2 layer là phải làm lại từ đầu
                    app.activeDocument.activeLayer.name = "1";
                    app.activeDocument.activeLayer.duplicate(app.activeDocument.activeLayer, ElementPlacement.PLACEBEFORE); // nhân đôi layer
                    app.activeDocument.resizeCanvas(wphone, hphone); // resize canvas về cỡ cần in với loại điện thoại

                    { // resize layer về cỡ cần in
                        if ((hphone / wphone) < 2) { var newSize = (wphone * 100 / 1200) }
                        else { var newSize = (hphone * 100 / 2400) }
                        app.activeDocument.artLayers["1 copy"].resize(newSize, newSize, AnchorPosition.MIDDLECENTER);
                    }


                    app.activeDocument.mergeVisibleLayers(); // gộp all layer 

                    app.doAction("createRectangle120", "silicon");
                    // app.doAction("createRectangle80", "silicon");
                    var cropw = (wphone - Math.round(paddingPrintLR / 0.084667)) * 100 / 1000;
                    var croph = (hphone - Math.round(paddingPrintTB / 0.084667)) * 100 / 1500;
                    app.activeDocument.activeLayer.resize(cropw, croph, AnchorPosition.MIDDLECENTER);
                    app.doAction("selectAreaLayer", "silicon");
                    app.activeDocument.artLayers.getByName("Rounded Rectangle 1").remove();

                    app.doAction("duplicateSelection", "silicon"); // tạo layer mới từ vùng chọn
                    app.activeDocument.activeLayer.name = "2";
                    app.doAction("createSpot", "silicon");
                    app.activeDocument.artLayers.getByName("Background").visible = false;
                    app.activeDocument.artLayers.getByName("2").visible = false;
                    app.doAction("createSpotChannel", 'silicon');
                    app.activeDocument.artLayers.getByName("Background").visible = true;
                    app.activeDocument.artLayers.getByName("2").visible = true;
                    app.doAction("createCMYKOne", "silicon");


                }
                else { alert("file design khong > 1 layer") };

            }
            // else {
            //     if (app.activeDocument.artLayers.length === 1) { // nhân đôi layer, kiểm tra nếu có 2 layer là phải làm lại từ đầu
            //         app.activeDocument.rotateCanvas(180);
            //         app.activeDocument.activeLayer.name = "1";
            //         app.activeDocument.artLayers.add();
            //         app.doAction("strokeWhite1px", "silicon");
            //         app.activeDocument.mergeVisibleLayers();

            //         app.activeDocument.activeLayer.duplicate(app.activeDocument.activeLayer, ElementPlacement.PLACEBEFORE); // nhân đôi layer
            //         app.activeDocument.resizeCanvas(wphone, hphone); // resize canvas về cỡ cần in với loại điện thoại

            //         { // resize layer về cỡ cần in
            //             if ((hphone / wphone) < 2) { var newSize = (wphone * 100 / 1200) }
            //             else { var newSize = (hphone * 100 / 2400) }
            //             app.activeDocument.artLayers[0].resize(newSize, newSize, AnchorPosition.MIDDLECENTER);
            //         }

            //         // app.doAction("moveCenter", "silicon");
            //         { // xử lý và đưa ảnh sang bàn silicon
            //             app.activeDocument.mergeVisibleLayers(); // gộp all layer 
            //             app.activeDocument.selection.selectAll(); // chọn tất cả ctrl + A
            //             // app.doAction("smooth120", "silicon"); // tạo smooth - có 2 loại 120 va 80   
            //             app.doAction("createRectangle120", "silicon");
            //             // app.doAction("createRectangle80", "silicon");
            //             var cropw = wphone * 100 / 1000;
            //             var croph = hphone * 100 / 1500;
            //             app.activeDocument.activeLayer.resize(cropw, croph, AnchorPosition.MIDDLECENTER);
            //             app.doAction("selectAreaLayer", "silicon");
            //             app.activeDocument.artLayers.getByName("Rounded Rectangle 1").remove();

            //             app.doAction("duplicateSelection", "silicon"); // tạo layer mới từ vùng chọn
            //             app.doAction("strokeWhite1px", "silicon");
            //             app.activeDocument.activeLayer.name = arr[ban][i][j].stt; // đặt tên cho layer voi stt
            //             app.activeDocument.activeLayer.duplicate(app.documents["silicon"].layerSets["CMYK"], ElementPlacement.PLACEATBEGINNING);// đưa file in sang bên bàn in
            //             app.activeDocument.activeLayer.name = "2";
            //             app.doAction("createSpot-spot", "silicon");
            //             app.doAction("strokeWhite1px", "silicon");
            //             app.activeDocument.artLayers[0].name = arr[ban][i][j].stt; // đặt tên cho layer voi stt
            //             app.activeDocument.activeLayer.duplicate(app.documents["silicon"].layerSets["SPOT"], ElementPlacement.PLACEATBEGINNING);// đưa file in sang bên bàn in
            //             app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);
            //         }

            //         { // translate layer đến vị trí cần in
            //             app.activeDocument.activeLayer = app.activeDocument.layerSets["CMYK"].artLayers.getByName(arr[ban][i][j].stt);
            //             app.doAction("moveZero", "silicon");
            //             app.activeDocument.activeLayer.translate(paddingLeft + j * wk + Math.round(paddingPrintLR / 0.084667), (paddingBottom + i * hk + Math.round(paddingPrintTB / 0.084667)) * (-1));
            //             app.activeDocument.activeLayer = app.activeDocument.layerSets["SPOT"].artLayers.getByName(arr[ban][i][j].stt);
            //             app.doAction("moveZero", "silicon");
            //             app.activeDocument.activeLayer.translate(paddingLeft + j * wk + Math.round(paddingPrintLR / 0.084667), (paddingBottom + i * hk + Math.round(paddingPrintTB / 0.084667)) * (-1));
            //         }

            //     }
            //     else { alert("file design khong > 1 layer") };
            // }

        } catch (error) {
            alert("sai mã Design !")
        }
    }




    dialog.hide();


    // alert(edittext1.text);

};
button2.onClick = function () { // onclick hủy
    dialog.hide();
};
dialog.show();


if (app.documents.length !== 0) {
    var nameCheckSave=app.activeDocument.name;
    nameCheckSave=nameCheckSave.split(".")[0];
    nameCheckSave=nameCheckSave.toString().toLowerCase();
    var nameCheckSave2=edittext3.text.toString().toLowerCase();
  

    if (nameCheckSave == nameCheckSave2) {
        app.doAction("saveFileOne", "silicon");
        app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);
    }

}
// app.activeDocument.saveAs(Folder("~/Desktop/in an/"), TiffSaveOptions, false, Extension.LOWERCASE);
// app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);