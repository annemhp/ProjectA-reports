System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var DepartmentCode;
    return {
        setters:[],
        execute: function() {
            DepartmentCode = (function () {
                function DepartmentCode() {
                    //"Education","R&B","Irrigation" ,"Health", "Revenue", "Municipality" ,
                    //        "Panchayat Raj","Govt Schemes", "Others"
                    this.departments = [
                        { id: 'Education', label: 'Education' },
                        { id: 'Irrigation', label: 'Irrigation' },
                        { id: 'Health', label: 'Health' },
                        { id: 'Revenue', label: 'Revenue' },
                        { id: 'Municipality', label: 'Municipality' },
                        { id: 'Panchayat Raj', label: 'Panchayat Raj' },
                        { id: 'Others', label: 'Others' },
                        { id: 'Govt Schemes', label: 'Govt Schemes' }
                    ];
                    this.departmentsMap = {
                        'Education': 'Education',
                        'Irrigation': 'Irrigation',
                        'Health': 'Health',
                        'Revenue': 'Revenue',
                        'Municipality': 'Municipality',
                        'Panchayat Raj': 'Panchayat Raj',
                        'Others': 'Others',
                        'Govt Schemes': 'Govt Schemes'
                    };
                }
                return DepartmentCode;
            }());
            exports_1("DepartmentCode", DepartmentCode);
        }
    }
});
//# sourceMappingURL=department-code.js.map