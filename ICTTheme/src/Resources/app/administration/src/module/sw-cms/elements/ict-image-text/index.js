/**
 * @private
 * @package content
 */
Shopware.Component.register('sw-cms-el-preview-ict-image-text', () => import('./preview'));
/**
 * @private
 * @package content
 */
Shopware.Component.register('sw-cms-el-config-ict-image-text', () => import('./config'));
/**
 * @private
 * @package content
 */
Shopware.Component.register('sw-cms-el-ict-image-text', () => import('./component'));

/**
 * @private
 * @package content
 */
Shopware.Service('cmsService').registerCmsElement({
    name: 'ict-image-text-bubble',
    label: 'sw-cms.elements.ictechImages.label',
    component: 'sw-cms-el-ict-image-text',
    configComponent: 'sw-cms-el-config-ict-image-text',
    previewComponent: 'sw-cms-el-preview-ict-image-text',
    defaultConfig: {
        position:{
            source: 'static',
            value: 'left',
        },
        media: {
            source: 'static',
            value: null,
            required: true,
            entity: {
                name: 'media',
            },
        },
        displayMode: {
            source: 'static',
            value: 'standard',
        },
        url: {
            source: 'static',
            value: null,
        },
        newTab: {
            source: 'static',
            value: false,
        },
        minHeight: {
            source: 'static',
            value: '340px',
        },
        verticalAlign: {
            source: 'static',
            value: null,
        },
        content:{
            source: 'static',
            value: false,
        },
        collect: Shopware.Service('cmsService').getCollectFunction(),
    },
});
