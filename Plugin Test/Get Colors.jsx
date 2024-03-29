function getColors() {
    try {
        var tmp_file = new File(Folder.temp.fsName + "/" + "~tmp.psd");
        var d = new ActionDescriptor();
        var d1 = new ActionDescriptor();
        d1.putBoolean(stringIDToTypeID("maximizeCompatibility"), false);
        d.putObject(stringIDToTypeID("as"), stringIDToTypeID("photoshop35Format"), d1);
        d.putPath(stringIDToTypeID("in"), tmp_file);
        d.putBoolean(stringIDToTypeID("copy"), true);
        d.putBoolean(stringIDToTypeID("spot"), false);
        d.putBoolean(stringIDToTypeID("alphaChannels"), false);
        d.putBoolean(stringIDToTypeID("layers"), false);
        d.putBoolean(stringIDToTypeID("embedProfiles"), false);
        d.putBoolean(stringIDToTypeID("annotType"), false);
        executeAction(stringIDToTypeID("save"), d, DialogModes.NO);
        var s = "";
        if (!tmp_file.open("r")) {
            throw ("tmp file open error");
        }
        tmp_file.encoding = "BINARY";
        tmp_file.seek(25, 0);
        s = tmp_file.read(1);
        if (s.charCodeAt(0) != 2) {
            throw ("wrong color mode");
        }
        s = tmp_file.read(4);
        var len = s.charCodeAt(0) << 24 | s.charCodeAt(1) << 16 | s.charCodeAt(2) << 8 | s.charCodeAt(3);
        if (len != 0x300) {
            throw ("wrong color len");
        }
        var table = tmp_file.read(len);
        s = tmp_file.read(4);
        var len = s.charCodeAt(0) << 24 | s.charCodeAt(1) << 16 | s.charCodeAt(2) << 8 | s.charCodeAt(3);
        var data = tmp_file.read(len);
        tmp_file.close();
        tmp_file.remove();
        var color_cnt = 256;
        var transp_idx = 0xFFFF;
        var n = data.indexOf("8BIM" + String.fromCharCode(0x04, 0x16, 0, 0, 0, 0, 0, 2));
        if (n >= 0) {
            color_cnt = data.charCodeAt(n + 12) << 8 | data.charCodeAt(n + 13);
        }
        var n = data.indexOf("8BIM" + String.fromCharCode(0x04, 0x17, 0, 0, 0, 0, 0, 2));
        if (n >= 0) {
            transp_idx = data.charCodeAt(n + 12) << 8 | data.charCodeAt(n + 13);
        }
        var chipColors = [];
        for (var i = 0; i < color_cnt; i++) {
            chipColors.push([table.charCodeAt(i), table.charCodeAt(256 + i), table.charCodeAt(512 + i)]);
        }
        alert(chipColors);
        return chipColors;
    } catch (e) {
        return false;
    }
}
getColors()