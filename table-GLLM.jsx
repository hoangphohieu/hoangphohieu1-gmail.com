"object" != typeof JSON && (JSON = {}), function () { "use strict"; var rx_one = /^[\],:{}\s]*$/, rx_two = /\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, rx_three = /"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, rx_four = /(?:^|:|,)(?:\s*\[)+/g, rx_escapable = /[\\"\u0000-\u001f\u007f-\u009f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g, rx_dangerous = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g, gap, indent, meta, rep; function f(t) { return t < 10 ? "0" + t : t } function this_value() { return this.valueOf() } function quote(t) { return rx_escapable.lastIndex = 0, rx_escapable.test(t) ? '"' + t.replace(rx_escapable, function (t) { var e = meta[t]; return "string" == typeof e ? e : "\\u" + ("0000" + t.charCodeAt(0).toString(16)).slice(-4) }) + '"' : '"' + t + '"' } function str(t, e) { var r, n, o, u, f, a = gap, i = e[t]; switch (i && "object" == typeof i && "function" == typeof i.toJSON && (i = i.toJSON(t)), "function" == typeof rep && (i = rep.call(e, t, i)), typeof i) { case "string": return quote(i); case "number": return isFinite(i) ? String(i) : "null"; case "boolean": case "null": return String(i); case "object": if (!i) return "null"; if (gap += indent, f = [], "[object Array]" === Object.prototype.toString.apply(i)) { for (u = i.length, r = 0; r < u; r += 1)f[r] = str(r, i) || "null"; return o = 0 === f.length ? "[]" : gap ? "[\n" + gap + f.join(",\n" + gap) + "\n" + a + "]" : "[" + f.join(",") + "]", gap = a, o } if (rep && "object" == typeof rep) for (u = rep.length, r = 0; r < u; r += 1)"string" == typeof rep[r] && (o = str(n = rep[r], i)) && f.push(quote(n) + (gap ? ": " : ":") + o); else for (n in i) Object.prototype.hasOwnProperty.call(i, n) && (o = str(n, i)) && f.push(quote(n) + (gap ? ": " : ":") + o); return o = 0 === f.length ? "{}" : gap ? "{\n" + gap + f.join(",\n" + gap) + "\n" + a + "}" : "{" + f.join(",") + "}", gap = a, o } } "function" != typeof Date.prototype.toJSON && (Date.prototype.toJSON = function () { return isFinite(this.valueOf()) ? this.getUTCFullYear() + "-" + f(this.getUTCMonth() + 1) + "-" + f(this.getUTCDate()) + "T" + f(this.getUTCHours()) + ":" + f(this.getUTCMinutes()) + ":" + f(this.getUTCSeconds()) + "Z" : null }, Boolean.prototype.toJSON = this_value, Number.prototype.toJSON = this_value, String.prototype.toJSON = this_value), "function" != typeof JSON.stringify && (meta = { "\b": "\\b", "\t": "\\t", "\n": "\\n", "\f": "\\f", "\r": "\\r", '"': '\\"', "\\": "\\\\" }, JSON.stringify = function (t, e, r) { var n; if (gap = "", indent = "", "number" == typeof r) for (n = 0; n < r; n += 1)indent += " "; else "string" == typeof r && (indent = r); if (rep = e, e && "function" != typeof e && ("object" != typeof e || "number" != typeof e.length)) throw new Error("JSON.stringify"); return str("", { "": t }) }), "function" != typeof JSON.parse && (JSON.parse = function (text, reviver) { var j; function walk(t, e) { var r, n, o = t[e]; if (o && "object" == typeof o) for (r in o) Object.prototype.hasOwnProperty.call(o, r) && (void 0 !== (n = walk(o, r)) ? o[r] = n : delete o[r]); return reviver.call(t, e, o) } if (text = String(text), rx_dangerous.lastIndex = 0, rx_dangerous.test(text) && (text = text.replace(rx_dangerous, function (t) { return "\\u" + ("0000" + t.charCodeAt(0).toString(16)).slice(-4) })), rx_one.test(text.replace(rx_two, "@").replace(rx_three, "]").replace(rx_four, ""))) return j = eval("(" + text + ")"), "function" == typeof reviver ? walk({ "": j }, "") : j; throw new SyntaxError("JSON.parse") }) }();
app.preferences.rulerUnits = Units.PIXELS; // hệ đo pixel

// tao folder in an
var folderInAn = Folder("~/Desktop/in an");
if (!folderInAn.exists) { folderInAn.create(); }

var fileDialog = app.openDialog();
var file = new File(fileDialog);
file.open("r");
var strFile;
strFile = file.read();
file.close();
// read data from json
var data = JSON.parse(strFile);
var arr = data.data;
var day = data.day;
var mounth = data.mounth;
var wAll = 2400, hAll = 1200;
hAll = Math.round(hAll / 0.084667);
wAll = Math.round(wAll / 0.084667);


var wtem = 50; var htem = 30;
wtem = Math.round(wtem / 0.084667);
htem = Math.round(htem / 0.084667);




var yPosition, xPosition, hLast, wLast;
var stt = 0;

// for loop
for (var i = 0; i <= arr.length - 1; i++) {
    app.documents.add(wAll, hAll, 300, "GLLM");
    app.activeDocument.layerSets.add();
    app.activeDocument.activeLayer.name = "CMYK";
    app.activeDocument.layerSets.add();
    app.activeDocument.activeLayer.name = "SPOT";

    yPosition = 0;
    xPosition = 0;
    hLast = 0;
    wLast = 0;
    var lastName = "";

    // for loop items
    for (var j = 0; j <= arr[i].length - 1; j++) {
        var wphone = arr[i][j].pixel.w;
        var hphone = arr[i][j].pixel.h;
        wphone = Math.round(wphone / 0.084667);
        hphone = Math.round(hphone / 0.084667);
        stt = arr[i][j].stt;
        if (yPosition + hLast + hphone <= hAll) {
            if (wLast == wphone) {
                yPosition = yPosition + hLast;
                hLast = hphone;
                wLast = wphone;
            }
            else {
                yPosition = 0;
                xPosition = xPosition + wLast;
                hLast = hphone;
                wLast = wphone;
            }
        }
        else {
            yPosition = 0;
            xPosition = xPosition + wLast;
            hLast = hphone;
            wLast = wphone;
        }


        try {
            app.open(File("~/Desktop/file design/" + arr[i][j].idDesign + ".tif"));
        } catch (error) {
            app.documents.add(1200, 2400, 300, "aaaa");
        }
        if (app.activeDocument.width !== 1200 || app.activeDocument.height !== 2400) {
            alert(arr[i][j].idDesign, " khác cỡ 1200 x 2400 !")
        }
        else if (app.activeDocument.artLayers.length === 1) {
            app.activeDocument.activeLayer.name = "1";
            app.activeDocument.activeLayer.duplicate(app.activeDocument.activeLayer, ElementPlacement.PLACEBEFORE); // nhân đôi layer
            app.activeDocument.resizeCanvas(wphone, hphone); // resize canvas về cỡ cần in với loại điện thoại
            { // resize layer về cỡ cần in
                if ((hphone / wphone) < 2) { var newSize = (wphone * 100 / 1200) }
                else { var newSize = (hphone * 100 / 2400) }
                app.activeDocument.artLayers["1 copy"].resize(newSize, newSize, AnchorPosition.MIDDLECENTER);
                app.activeDocument.mergeVisibleLayers(); // gộp all layer 

            }
            { // xử lý file in và duplicate sang bàn GLLM
                app.activeDocument.activeLayer.name = arr[i][j].stt; // đặt tên cho layer voi stt
                app.activeDocument.activeLayer.duplicate(app.documents["GLLM"].layerSets["CMYK"], ElementPlacement.PLACEATBEGINNING);// đưa file in sang bên bàn in
                app.activeDocument.artLayers.add();
                app.activeDocument.artLayers.getByName(arr[i][j].stt).remove();
                app.doAction("strokeRed1px", "GLLM");

                app.activeDocument.artLayers.add();
                app.activeDocument.activeLayer.kind = LayerKind.TEXT;
                app.activeDocument.activeLayer.textItem.contents = arr[i][j].stt;
                app.activeDocument.activeLayer.textItem.size = 30;
                var textColor = new SolidColor;
                textColor.rgb.red = 255;
                textColor.rgb.green = 0;
                textColor.rgb.blue = 0;
                app.activeDocument.activeLayer.textItem.color = textColor;
                app.activeDocument.activeLayer.name = "1 copy";
                app.doAction("moveCenter", "GLLM");
                app.activeDocument.activeLayer.name = "1 copy 2";


                if (arr[i][j].name != lastName) {
                    app.activeDocument.artLayers.add();
                    app.activeDocument.activeLayer.kind = LayerKind.TEXT;
                    app.activeDocument.activeLayer.textItem.contents = arr[i][j].name;
                    app.activeDocument.activeLayer.textItem.size = 40;
                    app.activeDocument.activeLayer.textItem.color = textColor;
                    app.activeDocument.activeLayer.name = "1 copy";
                    app.doAction("moveCenter", "GLLM");
                    app.activeDocument.activeLayer.translate(0, 300);
                    lastName = arr[i][j].name;
                }
                app.activeDocument.mergeVisibleLayers();
                app.activeDocument.activeLayer.name = arr[i][j].stt;

                app.activeDocument.activeLayer.duplicate(app.documents["GLLM"].layerSets["SPOT"], ElementPlacement.PLACEATBEGINNING);// đưa file in sang bên bàn in
                app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);
            }

            { // translate layer đến vị trí cần in
                app.activeDocument.activeLayer = app.activeDocument.layerSets["CMYK"].artLayers.getByName(arr[i][j].stt);
                app.doAction("moveZero", "silicon");
                app.activeDocument.activeLayer.translate(xPosition, yPosition * (-1));
                app.activeDocument.activeLayer = app.activeDocument.layerSets["SPOT"].artLayers.getByName(arr[i][j].stt);
                app.doAction("moveZero", "silicon");
                app.activeDocument.activeLayer.translate(xPosition, yPosition * (-1));
                if (j > 0) app.activeDocument.activeLayer.merge();
                app.activeDocument.activeLayer.name = "SPOTKhung";
            }
        }
        else { alert("file design không > 1 layer !") };


    }

    { // xử lý sau khi duplicate hết items
        app.activeDocument.activeLayer = app.activeDocument.layerSets["SPOT"].artLayers.getByName("SPOTKhung");
        var PSpotKhung = app.activeDocument.activeLayer.bounds;
        app.activeDocument.crop(PSpotKhung, 0, PSpotKhung[2] - PSpotKhung[0], PSpotKhung[3] - PSpotKhung[1]);
        app.activeDocument.rotateCanvas(180);
        app.doAction("selectArea", "GLLM");
        app.doAction("createSPOTWithArea", "GLLM");
    }
    { // lưu file khung
        app.activeDocument.layerSets.getByName("SPOT").visible = false;
        app.activeDocument.layerSets.getByName("CMYK").visible = false;
        var folder1 = Folder("~/Desktop/in an/Glass " + (i + 1) + " ngay " + day);
        if (!folder1.exists) { folder1.create(); }
        app.activeDocument.saveAs(Folder("~/Desktop/in an/Glass " + (i + 1) + " ngay " + day + "/khung.tif"), TiffSaveOptions, false, Extension.LOWERCASE);

    }// lưu file in
    {
        app.activeDocument.channels.getByName("Spot Color 1").remove();
        app.activeDocument.layerSets.getByName("CMYK").visible = true;
        var PCMYK = app.activeDocument.layerSets.getByName("CMYK").bounds;
        app.activeDocument.activeLayer = app.activeDocument.layerSets.getByName("CMYK");
        app.doAction("createSmarkOBJ", "GLLM");
        app.doAction("selectArea", "GLLM");
        app.doAction("createSPOTWithArea", "GLLM");
        app.activeDocument.saveAs(Folder("~/Desktop/in an/Glass " + (i + 1) + " ngay " + day + "/in.tif"), TiffSaveOptions, false, Extension.LOWERCASE);

    }
    app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);
}