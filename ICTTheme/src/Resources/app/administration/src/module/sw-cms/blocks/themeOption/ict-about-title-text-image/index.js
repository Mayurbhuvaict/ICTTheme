import CMS from "../../../constant/sw-cms.constant";

/**
 * @private
 * @package content
 */
Shopware.Component.register('sw-cms-preview-ict-about-title-text-image', () => import('./preview'));

/**
 * @private
 * @package content
 */
Shopware.Component.register('sw-cms-block-ict-about-title-text-image', () => import('./component'));

Shopware.Service('cmsService').registerCmsBlock({
    name:'ict-about-title-text-image',
    label:'sw-cms.blocks.ictAboutTitleTextImage.label',
    category:'ict-cms-elements',
    component: 'sw-cms-block-ict-about-title-text-image',
    previewComponent: 'sw-cms-preview-ict-about-title-text-image',
    defaultConfig: {
        marginBottom: '20px',
        marginTop: '20px',
        marginLeft: '20px',
        marginRight: '20px',
        sizingMode: 'boxed',
    },
    slots: {
        ictAboutTitleTextImage: {
            type: 'ict-about-title-text-image',
            default: {
                config: {
                    displayMode: { source: 'static', value: 'standard' },
                },
                data: {
                    titleMedia: {
                        value: CMS.MEDIA.previewMountain,
                        source: 'default',
                    },
                    aboutMedia: {
                        value: CMS.MEDIA.previewMountain,
                        source: 'default',
                    }
                },
            },
        }
    },
});