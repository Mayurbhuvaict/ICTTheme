import CMS from '../../../constant/sw-cms.constant';

Shopware.Component.register('sw-cms-block-gaisbock-text-image-slider',()=>import('./component'));
Shopware.Component.register('sw-cms-preview-gaisbock-text-image-slider',()=>import('./preview'));

Shopware.Service('cmsService').registerCmsBlock({
    name:'ict-text-image-slider',
    label:'sw-cms.blocks.gaisbockTextImageSlider.label',
    category:'ict-cms-elements',
    component:'sw-cms-block-ict-text-image-slider',
    previewComponent:'sw-cms-preview-ict-text-image-slider',
    defaultConfig: {
        marginBottom: '20px',
        marginTop: '20px',
        marginLeft: '20px',
        marginRight: '20px',
        sizingMode: 'boxed',
    },
    slots:{
        gaisbockTextImageSlider:{
            type:'ict-text-image-slider',
            default: {
                config: {
                    displayMode: { source: 'static', value: 'cover' },
                },
                data: {
                    media: {
                        value: CMS.MEDIA.previewCamera,
                        source: 'default',
                    },
                },
            },
        }
    }
})