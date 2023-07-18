import template from './sw-cms-el-config-ict-custom-category-extension.html.twig';

export default {
    template,

    methods: {
        createdComponent() {
            this.initElementConfig('ict-custom-category-extension');
        },
    }
}