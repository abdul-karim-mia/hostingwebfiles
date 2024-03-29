
function dup() {

    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putClass(charIDToTypeID('Dcmn'));
    desc1.putReference(charIDToTypeID('null'), ref1);
    var ref2 = new ActionReference();
    ref2.putEnumerated(charIDToTypeID('Lyr '), charIDToTypeID('Ordn'), charIDToTypeID('Trgt'));
    desc1.putReference(charIDToTypeID('Usng'), ref2);
    desc1.putInteger(charIDToTypeID('Vrsn'), 5);
    executeAction(charIDToTypeID('Mk  '), desc1, DialogModes.NO);

};


dup()