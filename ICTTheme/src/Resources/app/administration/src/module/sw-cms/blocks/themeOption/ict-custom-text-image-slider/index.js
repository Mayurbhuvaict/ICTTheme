import CMS from "../../../constant/sw-cms.constant";
Shopware.Component.register('sw-cms-block-ict-custom-text-image-slider',()=>import('./component'));
Shopware.Component.register('sw-cms-preview-ict-custom-text-image-slider',()=>import('./preview'));

Shopware.Service('cmsService').registerCmsBlock({
    name:'ict-custom-text-image-slider',
    label:'Custom Text Image Slider',
    category:'ict-cms-elements',
    component:'sw-cms-block-ict-custom-text-image-slider',
    previewComponent:'sw-cms-preview-ict-custom-text-image-slider',
    defaultConfig: {
        marginBottom: '20px',
        marginTop: '20px',
        marginLeft: '20px',
        marginRight: '20px',
        sizingMode: 'boxed',
    },
    slots: {
        'ictCustomTextImageSlider': {
            type: 'ict-custom-text-image-slider',
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
