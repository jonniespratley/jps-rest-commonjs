
/*
  DS
  This is a class that has database access methods and routes method calls to the adapter specficied.
 */
exports.DS = (function() {
  function DS(options) {
    this.options = options;
    return this;
  }

  DS.prototype.findOne = function(col, id) {
    return "findOne " + col + " " + id;
  };

  DS.prototype.findAll = function(col) {
    return "findAll " + col;
  };

  DS.prototype.createRecord = function(col, obj) {
    return obj;
  };

  DS.prototype.save = function(col, obj) {
    return obj;
  };

  return DS;

})();

//# sourceMappingURL=DS.js.map
