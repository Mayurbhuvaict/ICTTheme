import CMS from "../../../constant/sw-cms.constant";
Shopware.Component.register('sw-cms-block-ict-category-image-text',()=>import('./component'));
Shopware.Component.register('sw-cms-preview-ict-category-image-text',()=>import('./preview'));

Shopware.Service('cmsService').registerCmsBlock({
    name:'ict-category-image-text',
    label:'sw-cms.blocks.ictCategoryImageText.label',
    category:'ict-cms-elements',
    component:'sw-cms-block-ict-category-image-text',
    previewComponent:'sw-cms-preview-ict-category-image-text',
    allowedPageTypes:['product_list'],
    defaultConfig: {
        marginBottom: '20px',
        marginTop: '20px',
        marginLeft: '20px',
        marginRight: '20px',
        sizingMode: 'boxed',
    },
    slots: {
        ictCategoryImage: {
            type: 'ict-category-image-text',
            default: {
                config: {
                    displayMode: { source: 'static', value: 'cover' },
                },
                data: {
                    media: {
                        value: CMS.MEDIA.SMALL.previewCamera,
                        source: 'default',
                    },
                },
            },
        }
    }
})
