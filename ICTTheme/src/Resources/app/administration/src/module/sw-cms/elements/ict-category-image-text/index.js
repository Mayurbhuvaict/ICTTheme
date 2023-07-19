Shopware.Component.register('sw-cms-el-ict-category-image-text',()=>import('./component'));
Shopware.Component.register('sw-cms-el-config-ict-category-image-text',()=>import('./config'));
Shopware.Component.register('sw-cms-el-preview-ict-category-image-text',()=>import('./preview'));

Shopware.Service('cmsService').registerCmsElement({
    name:'ict-category-image-text',
    label:'sw-cms.blocks.ictCategoryImageText.label',
    component:'sw-cms-el-ict-category-image-text',
    configComponent:'sw-cms-el-config-ict-category-image-text',
    previewComponent:'sw-cms-el-preview-ict-category-image-text',
    disabledConfigInfoTextKey: 'sw-cms.elements.disabledConfigInfoTextKey',
    collect: Shopware.Service('cmsService').getCollectFunction(),
})