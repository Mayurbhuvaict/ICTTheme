Shopware.Component.register('sw-cms-preview-ict-custom-text-on-image',()=>import('./preview'));
Shopware.Component.register('sw-cms-block-ict-custom-text-on-image',()=>import('./component'));

Shopware.Service('cmsService').registerCmsBlock({
    name:'ict-custom-text-on-image',
    label:'sw-cms.blocks.ictCustomTextOnImage.label',
    category:'ict-cms-elements',
    component: 'sw-cms-block-ict-custom-text-on-image',
    previewComponent: 'sw-cms-preview-ict-custom-text-on-image',
    defaultConfig: {
        marginBottom: '20px',
        marginTop: '20px',
        marginLeft: '20px',
        marginRight: '20px',
        sizingMode: 'boxed',
        backgroundMedia: {
            url: '/administration/static/img/cms/preview_mountain_large.jpg',
        },
    },
    slots: {
        ictTextOnImage: 'ict-custom-text-on-image',
    },
});