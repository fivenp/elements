webpackJsonp([85574410511922],{'./node_modules/babel-loader/lib/index.js?{"plugins":["/Users/mschwoerer/Develop/qipp/elements/documentation/node_modules/gatsby/dist/utils/babel-plugin-extract-graphql.js","/Users/mschwoerer/Develop/qipp/elements/documentation/node_modules/babel-plugin-add-module-exports/lib/index.js","/Users/mschwoerer/Develop/qipp/elements/documentation/node_modules/babel-plugin-transform-object-assign/lib/index.js"],"presets":[["/Users/mschwoerer/Develop/qipp/elements/documentation/node_modules/babel-preset-env/lib/index.js",{"loose":true,"uglify":true,"modules":"commonjs","targets":{"browsers":["> 1%","last 2 versions","IE >= 9"]},"exclude":["transform-regenerator","transform-es2015-typeof-symbol"]}],"/Users/mschwoerer/Develop/qipp/elements/documentation/node_modules/babel-preset-stage-0/lib/index.js","/Users/mschwoerer/Develop/qipp/elements/documentation/node_modules/babel-preset-react/lib/index.js"],"cacheDirectory":true}!./src/pages/behaviours/ThemeProvider.js':function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var r=n("./node_modules/babel-runtime/helpers/classCallCheck.js"),l=o(r),s=n("./node_modules/babel-runtime/helpers/possibleConstructorReturn.js"),a=o(s),m=n("./node_modules/babel-runtime/helpers/inherits.js"),d=o(m),u=n("./node_modules/react/react.js"),i=o(u),p=n("../src/atoms/View.jsx"),c=o(p),h=n("./src/components/Example.js"),f=o(h),b=n("./src/components/Notes.jsx"),v=o(b),w=n("./src/components/Editor.jsx"),T=o(w),g=n("../src/behaviour/ThemeProvider.jsx"),x=o(g),y=n("../src/molecules/Button.jsx"),E=(o(y),function(e){function t(){return(0,l.default)(this,t),(0,a.default)(this,e.apply(this,arguments))}return(0,d.default)(t,e),t.prototype.render=function(){return i.default.createElement(c.default,null,i.default.createElement(v.default,{for:x.default}),i.default.createElement("h3",null,"How themes are provided"),i.default.createElement("p",null,"To get started with theming, first wrap your application in the <ThemeProvider>."),i.default.createElement(T.default,{mode:"diff",code:"import React from 'react';\n+ import {\n+   ThemeProvider\n+ } from '@allthings/elements/behavior/ThemeProvider';\n\n  export default class Application extends React.Component {\n    render() {\n      return (\n+       <ThemeProvider theme={{primary: 'red'}}>\n          <Button>\n            This is a red button\n          </Button>\n+       </ThemeProvider>\n      );\n    }\n  }"}),i.default.createElement("h3",null,"How to theme a component"),i.default.createElement("p",null,"To make a component themable a higher-order-component (HoC) is provided. With this HoC you can wrap your component.",i.default.createElement("br",null),i.default.createElement("pre",null,"withTheme(Component, [mapThemeToProps], [displayName])")),i.default.createElement(T.default,{code:"import { withTheme } from '@allthings/elements/behaviours/ThemeProvider'"}),i.default.createElement("p",null,"Simply wrap a component with ",i.default.createElement("code",null,"withTheme")," and a property"," ",i.default.createElement("code",null,"theme")," is passed in:"),i.default.createElement(T.default,{code:"const Component = ({ theme }) => (\n  <div style={{ background: theme.primary }}>Component</div>\n)\n\nconst ThemedComponent = withTheme(Component)"}),i.default.createElement("p",null,"You can also directly map the theme values to the properties via the second parameter ",i.default.createElement("code",null,"mapThemeToProps"),". All other properties will also be passed through."),i.default.createElement(T.default,{code:"const Component = ({ background }) => (\n  <div style={{ background }}>Component</div>\n)\n\nconst ThemedComponent = withTheme(\n  Component,\n  theme => ({ background: theme.primary })\n)"}),i.default.createElement(f.default,null,'<ThemeProvider theme={{ primary: \'#ffe464\' }} root>\n  <View direction="column" flex="nogrow">\n    <Button>Default button</Button>\n    <br />\n    <ThemeProvider theme={{ primary: \'#333\' }}>\n      <View flex="flex" direction="column">\n        <Button>Themed button</Button>\n        <br />\n        <Button color="#e225ae">Customized + themed button</Button>\n      </View>\n    </ThemeProvider>\n  </View>\n</ThemeProvider>'))},t}(i.default.Component));t.default=E,e.exports=t.default}});
//# sourceMappingURL=component---src-pages-behaviours-theme-provider-js-4e41163a498890305217.js.map