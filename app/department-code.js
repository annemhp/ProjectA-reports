System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var DepartmentCode;
    return {
        setters:[],
        execute: function() {
            DepartmentCode = (function () {
                function DepartmentCode() {
                    this.departments = [
                        { id: 'electricity', label: 'Electricity' },
                        { id: 'police', label: 'Police' },
                        { id: 'irrigation', label: 'Irrigation' },
                        { id: 'transportation', label: 'Transportation' }
                    ];
                    this.departmentsMap = {
                        'electricity': 'Electricity',
                        'police': 'Police',
                        'irrigation': 'Irrigation',
                        'transportation': 'Transportation',
                    };
                }
                return DepartmentCode;
            }());
            exports_1("DepartmentCode", DepartmentCode);
        }
    }
});
//# sourceMappingURL=department-code.js.map