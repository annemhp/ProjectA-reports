System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var StatusCode;
    return {
        setters:[],
        execute: function() {
            StatusCode = (function () {
                function StatusCode() {
                    this.statuses = [
                        { id: 'open', label: 'Open' },
                        { id: 'inprogress', label: 'InProgress' },
                        { id: 'resolved', label: 'Resolved' },
                        { id: 'invalid', label: 'Invalid' }
                    ];
                    this.statusMap = {
                        'open': 'Open',
                        'inprogress': 'InProgress',
                        'resolved': 'Resolved',
                        'invalid': 'Invalid'
                    };
                }
                return StatusCode;
            }());
            exports_1("StatusCode", StatusCode);
        }
    }
});
//# sourceMappingURL=status-code.js.map