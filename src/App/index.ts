import { Component, ref } from 'nefbl'
import urlFormat from '../tool/urlFormat'

let lazyLoad = {
    Index: () => import('./Index/index')
}

import style from './index.scss'
import template from './index.html'

@Component({
    selector: "app-root",
    template,
    styles: [style]
})

export default class {

    page: any

    $setup() {
        return {
            page: ref(null)
        }
    }

    $mounted() {

        let pagename = urlFormat(window.location.href).router[0]

        if (!(pagename in lazyLoad)) pagename = 'Index'

        lazyLoad[pagename]().then(data => {

            this.page = data.default

        })

    }

}

