/**
 *
 * @description: after any changes!!
 *
 * 1) delete:  require-config.js  (into pub/static)
 * 2) use:     php bin/magento c:f && php bin/magento s:s:d -f && chmod -R 777 *
 */

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
