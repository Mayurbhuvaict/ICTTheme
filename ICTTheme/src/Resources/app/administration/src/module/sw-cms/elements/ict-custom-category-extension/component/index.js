import template from './sw-cms-el-ict-custom-category-extension.html.twig';
import './sw-cms-el-ict-custom-category-extension.scss';
export default {
    template,

    methods: {
        createdComponent() {
            this.initElementConfig('ict-custom-category-extension');
            this.initElementData('ict-custom-category-extension');
        },
    },
}