/**
 * @private
 * @package content
 */
Shopware.Component.register('sw-cms-el-preview-ict-text', () => import('./preview'));
/**
 * @private
 * @package content
 */
Shopware.Component.register('sw-cms-el-config-ict-text', () => import('./config'));
/**
 * @private
 * @package content
 */
Shopware.Component.register('sw-cms-el-ict-text', () => import('./component'));

/**
 * @private
 * @package content
 */
Shopware.Service('cmsService').registerCmsElement({
    name: 'ict-text',
    label: 'sw-cms.elements.ictText.label',
    component: 'sw-cms-el-ict-text',
    configComponent: 'sw-cms-el-config-ict-text',
    previewComponent: 'sw-cms-el-preview-ict-text',
    defaultConfig: {
        content: {
            source: 'static',
            value: `
                <h2>Lorem Ipsum dolor sit amet</h2>
                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, 
                Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
            `.trim(),
        },
        verticalAlign: {
            source: 'static',
            value: null,
        },
        url: {
            source: 'static',
            value: null,
        },
    },
});
