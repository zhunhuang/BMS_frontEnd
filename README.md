This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
主要目的是练习如何使用react+antd+echarts 来构建一个后台管理系统的前端项目。

## 本地调试

  按照以下步骤本地运行项目：
  
  #### `npm run build`
  该命令会编译打包该项目。运行结束后会在项目根目录下生成build文件夹。
  
  #### `npm install -g json-server`
  全局安装json-server， 一个用作mock json数据和简单的静态服务器的npm包。由于静态资源访问和访问mock的json数据都在同一个端口，所以还能够避免本地调试时遇到的ajax跨域问题。
  
  #### `json-server data.json --static ./build`
  在项目根目录下运行，启动项目。mock的数据全部在data.json文件中，静态资源则指定为根目录下的build目录。
  
  #### 如何本地调试？
  修改data.json中的mock数据，需要重新运行`json-server`, 修改了源代码，则需要重新运行`npm run build`进行打包。之后刷新页面即可见到改动后的效果。
  
  ----
  下面内容是由`create-react-app`初始化时自动生成的，留着或许有点参考。
  
  ## Available Scripts
  
  In the project directory, you can run:
  
  ### `npm start`
  
  Runs the app in the development mode.<br>
  Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
  
  The page will reload if you make edits.<br>
  You will also see any lint errors in the console.
  
  ### `npm test`
  
  Launches the test runner in the interactive watch mode.<br>
  See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.
  
  ### `npm run build`
  
  Builds the app for production to the `build` folder.<br>
  It correctly bundles React in production mode and optimizes the build for the best performance.
  
  The build is minified and the filenames include the hashes.<br>
  Your app is ready to be deployed!
  
  See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
  
  ### `npm run eject`
  
  **Note: this is a one-way operation. Once you `eject`, you can’t go back!**
  
  If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.
  
  Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.
  
  You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.
  
  ## Learn More
  
  You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).
  
  To learn React, check out the [React documentation](https://reactjs.org/).
