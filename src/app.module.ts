import { Module } from 'nefbl'

// 首页
import AppComponent from './App/index'

// 组件
import search from './component/search/index'

// 指令
import uiBind from 'sprout-ui/nefbl/directive/ui-bind'
import uiModel from 'sprout-ui/nefbl/directive/ui-model'
import uiOn from 'sprout-ui/nefbl/directive/ui-on'
import uiLazy from 'sprout-ui/nefbl/directive/ui-lazy'
import uiCode from './directive/ui-code'
import uiGotoExample from './directive/ui-goto-example'

@Module({
    declarations: [
        AppComponent,
        uiBind, uiModel, uiOn,
        search,
        uiLazy, uiCode, uiGotoExample
    ],
    imports: [],
    exports: [],
    bootstrap: AppComponent
})
export default class {

}
