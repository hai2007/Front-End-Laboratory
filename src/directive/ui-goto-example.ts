import { Directive } from 'nefbl'
import xhtml from '@hai2007/tool/xhtml';

import examples from '../../examples/lazy-load';

@Directive({
    selector: "ui-goto-example"
})
export default class {
    $inserted(el, binding) {

        // 设置按钮样式
        xhtml.setStyles(el, {
            margin: "10px 30px",
            background: "red",
            color: "white",
            padding: "5px 10px",
            border: "none",
            outline: "none",
            cursor: "pointer"
        });

        // 绑定点击事件
        xhtml.bind(el, 'click', () => {
            examples[binding.exp]().then(data => {
                localStorage.setItem('hai2007-sweethome-editor-html-code', data.default);
                xhtml.toNode('<a target="_blank" href="/SweetHome/#/editor">打开在线代码演示页面</a>').click();
            });
        });


    }
}
