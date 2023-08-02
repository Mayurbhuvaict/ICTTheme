Shopware.Component.register('sw-cms-el-preview-ict-about-title-text-image', () => import('./preview'));

Shopware.Component.register('sw-cms-el-config-ict-about-title-text-image', () => import('./config'));

Shopware.Component.register('sw-cms-el-ict-about-title-text-image', () => import('./component'));

Shopware.Service('cmsService').registerCmsElement({
    name: 'ict-about-title-text-image',
    label:'sw-cms.blocks.ictAboutTitleTextImage.config.label',
    component: 'sw-cms-el-ict-about-title-text-image',
    configComponent: 'sw-cms-el-config-ict-about-title-text-image',
    previewComponent: 'sw-cms-el-preview-ict-about-title-text-image',
    defaultConfig: {
        position:{
            source: 'static',
            value: 'left',
        },
        titleMedia:{
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
        minHeight: {
            source: 'static',
            value: '340px',
        },
        verticalAlign: {
            source: 'static',
            value: null,
        },
        title: {
            source: 'static',
            value: 'Lorem Ipsum dolor sit amet'
        },
        content: {
            source: 'static',
            value: `
                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, 
                sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, 
                sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. 
                Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. 
                </p>
            `.trim(),
        },
        aboutMedia: {
            source: 'static',
            value: null,
            required: true,
            entity: {
                name: 'media',
            },
        }
    }
});