(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{37:function(n,t,i){"use strict";i.r(t),t.default="<!DOCTYPE html>\n<html lang=\"zh-cn\">\n\n<head>\n    <meta charset=\"UTF-8\">\n    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\">\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n    <title>关于字符串解析的一点理解</title>\n    <script src='https://cdn.jsdelivr.net/npm/@hai2007/algorithm@0'><\/script>\n</head>\n\n<body>\n\n    <div>\n        Tips:你可以试试F12打开浏览器控制台查看打印结果！\n    </div>\n\n    <script>\n\n        console.log(algorithm.xhtmlToJson(`\n<group>\n    <arc c-bind:cx='_width*0.5' c-bind:cy='_height*0.5' c-bind:radius1='_min*0.5' radius2='100' deg='120deg' />\n    <group c-for='value in dataList'>\n        <circle c-bind:cx='value' c-on:click='doit0' c-bind:cy='value' radius='10'></circle>\n        <text c-bind:x='value+20' c-bind:y='value' c-bind:content='value' fill-color='red'></text>\n    </group>\n    <path>\n        <move-to x='10' y='10'></move-to>\n        <line-to x='100' y='100'></line-to>\n    </path>\n    <text c-bind:x='_width*0.5' c-bind:y='_height*0.5'>文字</text>\n</group>\n`))\n\n    <\/script>\n\n</body>\n\n</html>\n"}}]);