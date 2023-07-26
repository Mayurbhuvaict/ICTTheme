import CMS from "../../../constant/sw-cms.constant";

Shopware.Component.register('sw-cms-block-ict-listpage-text-image',()=>import('./component'));
Shopware.Component.register('sw-cms-preview-ict-listpage-text-image',()=>import('./preview'));

Shopware.Service('cmsService').registerCmsBlock({
    name: 'ict-listpage-text-image',
    label: 'sw-cms.blocks.ictTextImage.ictSwitchImageTextBubble.label',
    category: 'ict-cms-elements',
    component: 'sw-cms-block-ict-listpage-text-image',
    previewComponent: 'sw-cms-preview-ict-listpage-text-image',
    allowedPageTypes:['product_list'],
    defaultConfig: {
        marginBottom: '20px',
        marginTop: '20px',
        marginLeft: '20px',
        marginRight: '20px',
        sizingMode: 'boxed',
    },
    slots: {
        ictListpageImageText: {
            type: 'ict-listpage-text-image',
            default: {
                config: {
                    displayMode: { source: 'static', value: 'standard' },
                },
                data: {
                    media: {
                        value: CMS.MEDIA.previewMountain,
                        source: 'default',
                    },
                },
            },
        },
    },
});
