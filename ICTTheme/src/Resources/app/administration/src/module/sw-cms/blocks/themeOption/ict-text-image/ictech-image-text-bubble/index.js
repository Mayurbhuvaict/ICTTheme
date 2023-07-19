/**
 * @private
 * @package content
 */
Shopware.Component.register('sw-cms-preview-ictech-image-text-bubble', () => import('./preview'));
/**
 * @private
 * @package content
 */
Shopware.Component.register('sw-cms-block-ictech-image-text-bubble', () => import('./component'));

/**
 * @private
 * @package content
 */

Shopware.Service('cmsService').registerCmsBlock({
    name: 'ictech-image-text-bubble',
    label: 'sw-cms.blocks.ictTextImage.ictImageTextBubble.label',
    category: 'ict-cms-elements',
    component: 'sw-cms-block-ictech-image-text-bubble',
    previewComponent: 'sw-cms-preview-ictech-image-text-bubble',
    defaultConfig: {
        marginBottom: '20px',
        marginTop: '20px',
        marginLeft: '20px',
        marginRight: '20px',
        sizingMode: 'boxed'
    },
    slots: {
        ictImage: {
            type: 'ictech-image-text-bubble',
            default: {
                config: {
                    displayMode: { source: 'static', value: 'standard' },
                },
                data: {
                    media: {
                        value: "administration/static/img/cms/preview_mountain_small.jpg",
                        source: 'default',
                    },
                },
            },
        },
        ictText: 'text',
    },
});
