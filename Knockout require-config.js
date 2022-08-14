/** @description:   php bin/magento c:f && php bin/magento s:s:d -f (locale)   */
var config = {
        map: {
            '*': {
                'VendorName_ModuleName/js/base_component': 'VendorName_ModuleName/js/custom_component',
                'VendorName_ModuleName/template/base_template.html': 'VendorName_ModuleName/template/custom_template.html'
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
