import { Module } from 'nefbl'

// 首页
import AppComponent from './App/index'

// 组件
import search from './component/search/index'

// 指令
import uiBind from 'sprout-ui/nefbl/directive/ui-bind'
import uiModel from 'sprout-ui/nefbl/directive/ui-model'
import uiOn from 'sprout-ui/nefbl/directive/ui-on'
import uiLazy from './directive/ui-lazy'

@Module({
    declarations: [
        AppComponent,
        uiBind, uiModel, uiOn,
        search,
        uiLazy
    ],
    imports: [],
    exports: [],
    bootstrap: AppComponent
})
export default class {

}
