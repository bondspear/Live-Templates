var config = {
        map: {
            '*': {
                'VendorName_ModuleName/js/base_component': 'VendorName_ModuleName/js/custom_component'
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
