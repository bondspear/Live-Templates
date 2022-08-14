var config = {
        map: {
            '*': {
                'VendorName_ModuleName/js/base_component': 'VendorName_ModuleName/js/custom_component',
                'VendorName_ModuleName/base_template.html': 'VendorName_ModuleName/custom_template.html'
            }
        },
        config: {
            mixins: {
                'VendorName_ModuleName/js/base_component' :
                    {
                        'VendorName_ModuleName/js/base_component-mixin':true
                    }
            }
        }
}
