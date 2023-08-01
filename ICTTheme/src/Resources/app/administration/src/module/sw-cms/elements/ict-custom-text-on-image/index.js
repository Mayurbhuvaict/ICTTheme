Shopware.Component.register('sw-cms-el-preview-ict-custom-text-on-image', () => import('./preview'));
/**
 * @private
 * @package content
 */
Shopware.Component.register('sw-cms-el-config-ict-custom-text-on-image', () => import('./config'));
/**
 * @private
 * @package content
 */
Shopware.Component.register('sw-cms-el-ict-custom-text-on-image', () => import('./component'));
Shopware.Service('cmsService').registerCmsElement({
    name: 'ict-custom-text-on-image',
    label: 'sw-cms.elements.ictCustomTextOnImage.label',
    component: 'sw-cms-el-ict-custom-text-on-image',
    configComponent: 'sw-cms-el-config-ict-custom-text-on-image',
    previewComponent: 'sw-cms-el-preview-ict-custom-text-on-image',
    defaultConfig: {
        content: {
            source: 'static',
            value: `<h2>Lorem Ipsum dolor sit amet</h2>`.trim(),
        },
        verticalAlign: {
            source: 'static',
            value: null,
        },
        media: {
            source: 'static',
            value: null,
            required: false,
            entity: {
                name: 'media',
            },
        },
    },
});