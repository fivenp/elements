webpackJsonp([0xa1034fbe7cd9],{'./node_modules/babel-loader/lib/index.js?{"plugins":["/Users/mschwoerer/Develop/qipp/elements/documentation/node_modules/gatsby/dist/utils/babel-plugin-extract-graphql.js","/Users/mschwoerer/Develop/qipp/elements/documentation/node_modules/babel-plugin-add-module-exports/lib/index.js","/Users/mschwoerer/Develop/qipp/elements/documentation/node_modules/babel-plugin-transform-object-assign/lib/index.js"],"presets":[["/Users/mschwoerer/Develop/qipp/elements/documentation/node_modules/babel-preset-env/lib/index.js",{"loose":true,"uglify":true,"modules":"commonjs","targets":{"browsers":["> 1%","last 2 versions","IE >= 9"]},"exclude":["transform-regenerator","transform-es2015-typeof-symbol"]}],"/Users/mschwoerer/Develop/qipp/elements/documentation/node_modules/babel-preset-stage-0/lib/index.js","/Users/mschwoerer/Develop/qipp/elements/documentation/node_modules/babel-preset-react/lib/index.js"],"cacheDirectory":true}!./src/pages/molecules/List.js':function(e,t,s){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var l=s("./node_modules/babel-runtime/helpers/classCallCheck.js"),o=n(l),r=s("./node_modules/babel-runtime/helpers/possibleConstructorReturn.js"),i=n(r),a=s("./node_modules/babel-runtime/helpers/inherits.js"),d=n(a),u=s("./node_modules/react/react.js"),m=n(u),c=s("../src/organisms/CardList/GroupedCardList.jsx"),p=(n(c),s("../src/molecules/List/ListItem.jsx")),f=(n(p),s("../src/molecules/List/List.jsx")),x=n(f),h=s("../src/molecules/List/ListSpinner.jsx"),b=(n(h),s("../src/molecules/List/ChevronRightListItem.jsx")),j=(n(b),s("../src/atoms/Image.jsx")),g=(n(j),s("../src/molecules/Card/index.js"),s("../src/atoms/Text.jsx")),_=(n(g),s("../src/atoms/View.jsx")),L=n(_),v=s("./src/components/Example.js"),I=n(v),w=s("./src/components/Notes.jsx"),C=n(w),T=function(e){function t(){return(0,o.default)(this,t),(0,i.default)(this,e.apply(this,arguments))}return(0,d.default)(t,e),t.prototype.render=function(){return m.default.createElement(L.default,null,m.default.createElement(C.default,{for:x.default}),m.default.createElement("h3",null,"A simple list"),m.default.createElement(I.default,null,"\n          <Card>\n            <List>\n              <ListItem>\n                <Text>Item 1</Text>\n              </ListItem>\n              <ListItem>\n                <Text>Item 2</Text>\n              </ListItem>\n              <ListItem>\n                <Text>Item 3</Text>\n              </ListItem>\n              <ListItem>\n                <Text>Item 4</Text>\n              </ListItem>\n              <ChevronRightListItem onClick={_ => _}>\n                <Text>ChevronRightListItem to show indicator</Text>\n              </ChevronRightListItem>\n            </List>\n          </Card>\n        "),m.default.createElement("h3",null,"Complex list with images"),m.default.createElement(I.default,null,'\n          <View>\n            <GroupedCardList title="A list with images">\n              <View direction="row">\n                <Image src={\'https://placeimg.com/80/80/people?t=1\'} />\n                <ChevronRightListItem flex="grow">\n                  <Text>Jules</Text>\n                </ChevronRightListItem>\n              </View>\n              <View direction="row">\n                <Image src={\'https://placeimg.com/80/80/people?t=2\'} />\n                <ListItem flex="grow">\n                  <Text>Luan</Text>\n                </ListItem>\n              </View>\n              <View direction="row">\n                <Image src={\'https://placeimg.com/80/80/people?t=3\'} />\n                <ListItem flex="grow">\n                  <Text>Uli</Text>\n                </ListItem>\n              </View>\n            </GroupedCardList>\n            <ListSpinner />\n          </View>\n        '))},t}(m.default.Component);t.default=T,e.exports=t.default},"../src/atoms/GroupTitle.jsx":function(e,t,s){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var l=s("./node_modules/react/react.js"),o=n(l),r=s("./node_modules/prop-types/index.js"),i=n(r),a=s("../src/atoms/Inset.jsx"),d=n(a),u=s("../src/atoms/Text.jsx"),m=n(u),c=function(e){var t=e.children;return o.default.createElement(d.default,{horizontal:!0,vertical:!0},o.default.createElement(m.default,{size:"l",strong:!0,color:"titleColor"},t))};c.propTypes={children:i.default.node},t.default=c,e.exports=t.default},"../src/atoms/Inset.jsx":function(e,t,s){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var l=s("./node_modules/babel-runtime/helpers/extends.js"),o=n(l),r=s("./node_modules/babel-runtime/helpers/objectWithoutProperties.js"),i=n(r),a=s("./node_modules/react/react.js"),d=n(a),u=s("./node_modules/prop-types/index.js"),m=n(u),c=s("../node_modules/@allthings/react-view/lib/index.js"),p=n(c),f=s("./node_modules/glamor/lib/index.js"),x=function(e){var t=e.horizontal,s=e.vertical;return(0,f.css)({paddingLeft:t&&15,paddingRight:t&&15,paddingTop:s&&15,paddingBottom:s&&15})},h=function(e){var t=e.horizontal,s=e.vertical,n=(0,i.default)(e,["horizontal","vertical"]);return d.default.createElement(p.default,(0,o.default)({},x({horizontal:t,vertical:s}),n))};h.propTypes={vertical:m.default.bool,horizontal:m.default.bool},h.defaultProps={horizontal:!0},t.default=h,e.exports=t.default},"../src/organisms/CardList/GroupedCardList.jsx":function(e,t,s){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var l=s("./node_modules/babel-runtime/helpers/objectWithoutProperties.js"),o=n(l),r=s("./node_modules/react/react.js"),i=n(r),a=s("./node_modules/prop-types/index.js"),d=n(a),u=s("../src/organisms/CardList/CardList.jsx"),m=n(u),c=s("../node_modules/@allthings/react-view/lib/index.js"),p=n(c),f=s("../src/atoms/GroupTitle.jsx"),x=n(f),h=function(e){var t=e.title,s=e.children,n=(0,o.default)(e,["title","children"]);return i.default.createElement(p.default,n,i.default.createElement(x.default,null,t),i.default.createElement(m.default,null,s))};h.propTypes={children:d.default.node,e2e:d.default.string,title:d.default.string},t.default=h,e.exports=t.default}});
//# sourceMappingURL=component---src-pages-molecules-list-js-73c5a072d23d64b29389.js.map