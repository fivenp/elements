webpackJsonp([0xa1034fbe7cd9],{'./node_modules/babel-loader/lib/index.js?{"plugins":["/Users/mschwoerer/Develop/qipp/elements/documentation/node_modules/gatsby/dist/utils/babel-plugin-extract-graphql.js","/Users/mschwoerer/Develop/qipp/elements/documentation/node_modules/babel-plugin-add-module-exports/lib/index.js","/Users/mschwoerer/Develop/qipp/elements/documentation/node_modules/babel-plugin-transform-object-assign/lib/index.js"],"presets":[["/Users/mschwoerer/Develop/qipp/elements/documentation/node_modules/babel-preset-env/lib/index.js",{"loose":true,"uglify":true,"modules":"commonjs","targets":{"browsers":["> 1%","last 2 versions","IE >= 9"]},"exclude":["transform-regenerator","transform-es2015-typeof-symbol"]}],"/Users/mschwoerer/Develop/qipp/elements/documentation/node_modules/babel-preset-stage-0/lib/index.js","/Users/mschwoerer/Develop/qipp/elements/documentation/node_modules/babel-preset-react/lib/index.js"],"cacheDirectory":true}!./src/pages/molecules/List.js':function(e,t,s){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var r=s("./node_modules/babel-runtime/helpers/classCallCheck.js"),o=n(r),i=s("./node_modules/babel-runtime/helpers/possibleConstructorReturn.js"),l=n(i),d=s("./node_modules/babel-runtime/helpers/inherits.js"),a=n(d),u=s("./node_modules/react/react.js"),c=n(u),m=s("../src/organisms/CardList/GroupedCardList.jsx"),p=(n(m),s("../src/molecules/List/ListItem.jsx")),f=(n(p),s("../src/molecules/List/List.jsx")),x=n(f),g=s("../src/molecules/List/ListSpinner.jsx"),h=(n(g),s("../src/molecules/List/ChevronRightListItem.jsx")),L=(n(h),s("../src/atoms/Image.jsx")),_=(n(L),s("../src/molecules/Card/index.js"),s("../src/atoms/Text.jsx")),j=(n(_),s("../src/atoms/View.jsx")),C=n(j),I=s("./src/components/Example.js"),b=n(I),T=s("./src/components/Notes.jsx"),w=n(T),v=function(e){function t(){return(0,o.default)(this,t),(0,l.default)(this,e.apply(this,arguments))}return(0,a.default)(t,e),t.prototype.render=function(){return c.default.createElement(C.default,null,c.default.createElement(w.default,{for:x.default}),c.default.createElement("h3",null,"A simple list"),c.default.createElement(b.default,null,"\n          <Card>\n            <List>\n              <ListItem>\n                <Text>Item 1</Text>\n              </ListItem>\n              <ListItem>\n                <Text>Item 2</Text>\n              </ListItem>\n              <ListItem>\n                <Text>Item 3</Text>\n              </ListItem>\n              <ListItem>\n                <Text>Item 4</Text>\n              </ListItem>\n              <ChevronRightListItem onClick={_ => _}>\n                <Text>ChevronRightListItem to show indicator</Text>\n              </ChevronRightListItem>\n            </List>\n          </Card>\n        "),c.default.createElement("h3",null,"Complex list with images"),c.default.createElement(b.default,null,'\n          <View>\n            <GroupedCardList title="A list with images">\n              <View direction="row">\n                <Image src={\'https://placeimg.com/80/80/people?t=1\'} />\n                <ChevronRightListItem flex="grow">\n                  <Text>Jules</Text>\n                </ChevronRightListItem>\n              </View>\n              <View direction="row">\n                <Image src={\'https://placeimg.com/80/80/people?t=2\'} />\n                <ListItem flex="grow">\n                  <Text>Luan</Text>\n                </ListItem>\n              </View>\n              <View direction="row">\n                <Image src={\'https://placeimg.com/80/80/people?t=3\'} />\n                <ListItem flex="grow">\n                  <Text>Uli</Text>\n                </ListItem>\n              </View>\n            </GroupedCardList>\n            <ListSpinner />\n          </View>\n        '))},t}(c.default.Component);t.default=v,v.__docgenInfo={description:""},"undefined"!=typeof REACT_DOCS&&(REACT_DOCS["src/pages/molecules/List.js"]={name:"ListStory",docgenInfo:v.__docgenInfo,path:"src/pages/molecules/List.js"}),e.exports=t.default},"../src/atoms/GroupTitle.jsx":function(e,t,s){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var r=s("./node_modules/react/react.js"),o=n(r),i=s("./node_modules/prop-types/index.js"),l=n(i),d=s("../src/atoms/Inset.jsx"),a=n(d),u=s("../src/atoms/Text.jsx"),c=n(u),m=function(e){var t=e.children;return o.default.createElement(a.default,{horizontal:!0,vertical:!0},o.default.createElement(c.default,{size:"l",strong:!0,color:"titleColor"},t))};m.displayName="GroupTitle",m.propTypes={children:l.default.node},t.default=m,m.__docgenInfo={description:"",props:{children:{type:{name:"node"},required:!1,description:""}}},"undefined"!=typeof REACT_DOCS&&(REACT_DOCS["../src/atoms/GroupTitle.jsx"]={name:"GroupTitle",docgenInfo:m.__docgenInfo,path:"../src/atoms/GroupTitle.jsx"}),e.exports=t.default},"../src/organisms/CardList/GroupedCardList.jsx":function(e,t,s){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var r=s("./node_modules/babel-runtime/helpers/objectWithoutProperties.js"),o=n(r),i=s("./node_modules/react/react.js"),l=n(i),d=s("./node_modules/prop-types/index.js"),a=n(d),u=s("../src/organisms/CardList/CardList.jsx"),c=n(u),m=s("../node_modules/@allthings/react-view/lib/index.js"),p=n(m),f=s("../src/atoms/GroupTitle.jsx"),x=n(f),g=function(e){var t=e.title,s=e.children,n=(0,o.default)(e,["title","children"]);return l.default.createElement(p.default,n,l.default.createElement(x.default,null,t),l.default.createElement(c.default,null,s))};g.displayName="GroupedCardList",g.propTypes={children:a.default.node,e2e:a.default.string,title:a.default.string},t.default=g,g.__docgenInfo={description:"",props:{children:{type:{name:"node"},required:!1,description:"See ListItem and View"},e2e:{type:{name:"string"},required:!1,description:""},title:{type:{name:"string"},required:!1,description:"The title for the CardList"}}},"undefined"!=typeof REACT_DOCS&&(REACT_DOCS["../src/organisms/CardList/GroupedCardList.jsx"]={name:"GroupedCardList",docgenInfo:g.__docgenInfo,path:"../src/organisms/CardList/GroupedCardList.jsx"}),e.exports=t.default}});