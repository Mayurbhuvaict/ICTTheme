/**
 * @private
 * @package content
 */
Shopware.Component.register('sw-cms-preview-ict-text', () => import('./preview'));
/**
 * @private
 * @package content
 */
Shopware.Component.register('sw-cms-block-ict-text', () => import('./component'));

/**
 * @private
 * @package content
 */
Shopware.Service('cmsService').registerCmsBlock({
    name: 'ict-text',
    label: 'sw-cms.blocks.IctText.label',
    category: 'text',
    component: 'sw-cms-block-ict-text',
    previewComponent: 'sw-cms-preview-ict-text',
    defaultConfig: {
        marginBottom: '20px',
        marginTop: '20px',
        marginLeft: '20px',
        marginRight: '20px',
        sizingMode: 'boxed',
    },
    slots: {
        content: 'ict-text',
    },
});
