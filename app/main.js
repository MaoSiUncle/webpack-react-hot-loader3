/**
 * Created by yunlong on 16/9/27.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import Test from './components/Test'
import { AppContainer } from 'react-hot-loader';//新版本需要 AppContainer 包裹整个App 以便热替。
ReactDOM.render(<AppContainer>
        <Test/>
    </AppContainer>,document.getElementById('test'));
// Hot Module Replacement API
if (module.hot) {//react-hot-loader 暴露了module，所以需要添加如下代码进行判断。
    module.hot.accept('./components/Test', () => {
        const Test = require('./components/Test').default;
        ReactDOM.render(
            <AppContainer>
                <Test/>
            </AppContainer>
            ,
            document.getElementById('test')
        );
    });
}
