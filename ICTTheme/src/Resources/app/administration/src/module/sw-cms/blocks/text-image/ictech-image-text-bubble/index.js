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
    label: 'sw-cms.blocks.textImage.imageTextBubble.label',
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
    slots:{
        ictechImageTextBubble: 'ictech-image-text-bubble'
    }
});
