import CMS from '../../../constant/sw-cms.constant';
Shopware.Component.register('sw-cms-preview-ict-switch-image-text', () => import('./preview'));
Shopware.Component.register('sw-cms-block-ict-switch-image-text', () => import('./component'));
Shopware.Service('cmsService').registerCmsBlock({
    name: 'ict-switch-image-text',
    label: 'sw-cms.blocks.ictTextImage.ictSwitchImageTextBubble.label',
    category: 'ict-cms-elements',
    component: 'sw-cms-block-ict-switch-image-text',
    previewComponent: 'sw-cms-preview-ict-switch-image-text',
    defaultConfig: {
        marginBottom: '20px',
        marginTop: '20px',
        marginLeft: '20px',
        marginRight: '20px',
        sizingMode: 'boxed',
    },
    slots: {
        ictSwitchImageText: {
            type: 'ict-switch-image-text',
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
