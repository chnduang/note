(window.webpackJsonp=window.webpackJsonp||[]).push([[189],{479:function(t,s,n){"use strict";n.r(s);var a=n(4),e=Object(a.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"配置flutter运行环境"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#配置flutter运行环境"}},[t._v("#")]),t._v(" 配置Flutter运行环境")]),t._v(" "),s("p",[t._v("配置阿里镜像源")]),t._v(" "),s("blockquote",[s("p",[t._v("修改掉项目下的android目录下的"),s("code",[t._v("build.gradle")]),t._v("文件，把google() 和 jcenter()这两行去掉。改为阿里的链接")])]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("buildscript "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    ext"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("kotlin_version "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'1.3.50'")]),t._v("\n    repositories "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//        google()")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//        jcenter()")]),t._v("\n        maven "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" url "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'https://maven.aliyun.com/repository/google'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        maven "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" url "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'https://maven.aliyun.com/repository/jcenter'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        maven "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" url "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'http://maven.aliyun.com/nexus/content/groups/public'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    dependencies "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        classpath "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'com.android.tools.build:gradle:3.5.0'")]),t._v("\n        classpath "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"org.jetbrains.kotlin:kotlin-gradle-plugin:$kotlin_version"')]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\nallprojects "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    repositories "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//        google()")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//        jcenter()")]),t._v("\n        maven "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" url "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'https://maven.aliyun.com/repository/google'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        maven "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" url "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'https://maven.aliyun.com/repository/jcenter'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        maven "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" url "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'http://maven.aliyun.com/nexus/content/groups/public'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\nrootProject"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("buildDir "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'../build'")]),t._v("\nsubprojects "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    project"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("buildDir "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"${rootProject.buildDir}/${project.name}"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\nsubprojects "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    project"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("evaluationDependsOn")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("':app'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\njs\ntask "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("clean")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("type")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" Delete")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("delete")]),t._v(" rootProject"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("buildDir\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n")])])]),s("h5",{attrs:{id:"修改flutter-sdk-安装目录下的flutter-gradle"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#修改flutter-sdk-安装目录下的flutter-gradle"}},[t._v("#")]),t._v(" 修改Flutter  SDK 安装目录下的"),s("code",[t._v("flutter.gradle")])]),t._v(" "),s("blockquote",[s("p",[t._v("在SDK目录下的")]),t._v(" "),s("p",[t._v("packages\\flutter_tools\\gradle")])]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("buildscript "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    repositories "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//jcenter()")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// maven {")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//     url 'https://dl.google.com/dl/android/maven2'")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// }")]),t._v("\n        maven"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            url "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'https://maven.aliyun.com/repository/jcenter'")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        maven"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            url "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'http://maven.aliyun.com/nexus/content/groups/public'")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    dependencies "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        classpath "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'com.android.tools.build:gradle:3.1.2'")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])])}),[],!1,null,null,null);s.default=e.exports}}]);