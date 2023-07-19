Shopware.Component.register('sw-cms-el-ict-custom-category-extension',()=>import('./component'));
Shopware.Component.register('sw-cms-el-config-ict-custom-category-extension',()=>import('./config'));
Shopware.Component.register('sw-cms-el-preview-ict-custom-category-extension',()=>import('./preview'));

Shopware.Service('cmsService').registerCmsElement({
    name:'ict-custom-category-extension',
    label:'sw-cms.blocks.ictCustomCategoryExtension.label',
    component:'sw-cms-el-ict-custom-category-extension',
    configComponent:'sw-cms-el-config-ict-custom-category-extension',
    previewComponent:'sw-cms-el-preview-ict-custom-category-extension',
    disabledConfigInfoTextKey: 'sw-cms.elements.noltenCustomPropertyButton.infoText.navigationElement',
    collect: Shopware.Service('cmsService').getCollectFunction(),
});