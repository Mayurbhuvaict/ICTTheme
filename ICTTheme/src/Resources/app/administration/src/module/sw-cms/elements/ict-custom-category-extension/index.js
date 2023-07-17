Shopware.register('sw-cms-el-ict-custom-category-extension',()=>import('./component'));
Shopware.register('sw-cms-el-config-ict-custom-category-extension',()=>import('./config'));
Shopware.register('sw-cms-el-preview-ict-custom-category-extension',()=>import('./preview'));

Shopware.Service('cmsService').registerCmsElement({

});