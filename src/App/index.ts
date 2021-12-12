import { Component, ref } from 'nefbl'
import urlFormat from '../tool/urlFormat'

import lazyLoad from './lazy-load'

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

    goHome() {

        window.location.href = '#/Index'
        this.loadPage('Index')

    }

    $mounted() {

        let pagename = urlFormat(window.location.href).router[0]

        if (!(pagename in lazyLoad)) pagename = 'Index'

        this.loadPage(pagename)

    }

    loadPage(pagename) {
        lazyLoad[pagename]().then(data => {

            this.page = data.default

        })
    }

}

