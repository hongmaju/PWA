// var http = require('http');
// http.createServer(function (request, response) {
//     // 发送 HTTP 头部
//     // HTTP 状态值: 200 : OK
//     // 内容类型: text/plain
//     response.writeHead(200, {'Content-Type': 'text/plain'});
//
// // 发送响应数据 "Hello World"
// response.end('Hello World\n');
// }).listen(8080);
// 终端打印如下信息
// console.log('Server running at http://127.0.0.1:8080/');

let http=require("http"); //引入核心http模块
let mime={
    '.js':'application/javascript',
    '.css':'text/css'
}
let fs=require("fs");
//创建一个函数，req代表客户端，res代表服务器可写流
let listener=(req,res)=>{
//res是可写流，有write和end
    if(req.url==="/"){
        //设置编码
        res.setHeader('Content-Type','text/html;charset=utf-8');
        fs.createReadStream('index.html').pipe(res);
    }else{
        if(fs.existsSync(`${req.url}`)) {
            res.setHeader('Content-Type',mime[req.url.match(/\.\w+$/)[0]] +';charset=utf-8');
            fs.createReadStream(`.${req.url}`).pipe(res);
        }else{
            res.statusCode=404;
            res.end();
        }
    }

}
let port=8080;
//创建一个服务，放入一个监听函数，
let server=http.createServer(listener);
//
server.listen(port,function () {
    //启动成功后
    console.log(`start${port}`);
})


