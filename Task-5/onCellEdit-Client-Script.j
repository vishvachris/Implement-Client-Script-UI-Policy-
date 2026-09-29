function onCellEdit(sysIDs, table, oldValues, newValue, callback) {

    alert('State cannot be changed from the list. Please open the Incident.');

    // Cancel the list edit
    callback(false, oldValues);
}
