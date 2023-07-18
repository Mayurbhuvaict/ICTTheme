import CMS from '../../../constant/sw-cms.constant';
Shopware.Component.register('sw-cms-block-ict-custom-category-extension',()=>import('./component'));
Shopware.Component.register('sw-cms-preview-ict-custom-category-extension',()=>import('./preview'));

Shopware.Service('cmsService').registerCmsBlock({
   name:'ict-custom-category-extension',
   label:'sw-cms.block.ictCustomCategoryExtension.label',
   category:'ict-cms-elements',
   component:'sw-cms-block-ict-custom-category-extension',
   previewComponent:'sw-cms-preview-ict-custom-category-extension',
   allowedPageTypes:['product_list'],
   defaultConfig: {
      marginBottom: '20px',
      marginTop: '20px',
      marginLeft: '20px',
      marginRight: '20px',
      sizingMode: 'boxed',
   },
   slots: {
      ictCustomCategoryExtension:{
          type: 'ict-custom-category-extension',
          default: {
              config: {
                  displayMode: { source: 'static', value: 'cover' },
              },
              data: {
                  media: {
                      value: CMS.MEDIA.SMALL.previewCamera,
                      source: 'default',
                  },
              },
          },
      }
   },
});