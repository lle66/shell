var shell = require('shelljs')
//touch(文件名) 新建文件

//字段替换
shell.sed('-i', '111', '222', 'test.txt');
//删除
shell.rm('-rf','re.txt')
//复制文件到指定文件
shell.cp('test.txt','testCopy.txt')
//打印所有的文件名
shell.ls('-A').forEach(name => {
  //shell.echo(name);
})
// cat返回文件
//shell.echo(shell.cat('-n','test.txt'))
//pwd 获取当前目录
const res = shell.pwd()
//shell.echo(res)
//find 查找文件
//const r = shell.find('.').filter(function(file) { return file.match(/.txt$/); });
// grep从指定文件中抓取符合正则的行
shell.grep('-l','/22$/', 'test.txt')
//打开test.js 执行node
shell.cat('test.js').exec('node');
//mkdir创建目录
//shell.mkdir('-p','./src/pp')
//返回上一级目录
//shell.cd('..');
// 打开图片，但是这个在git bash 没法直接输11.png打开
shell.exec('taskkill /f /t /im photolaunch.exe')
//shell.cd('../study').exec('Fuck学习强国.exe')
if (!shell.which('git')){//在环境变量PATH中寻找指定命令的地址，判断该命令是否可执行，返回该命令的绝对地址
    shell.echo('Error: Git commit failed');
    shell.exit(1);
}
//exec执行所传入的命令 要同步运行外部工具。。
//if (shell.exec('git commit -am "Auto-commit"').code !== 0){
 //   shell.echo('Error: Git commit failed');
 //   shell.exit(1);
//}
// 还有 head（头） tail（尾） touch(创建文件) sort(内容排序) test(文件类型判断)
//to将shellString输出至指定文件,相当于脚本语言中的
//shell.cat('test.txt','testCopy.txt').to('output.txt');
//toEnd()将shellString追加至指定文件,相当于脚本语言中的
//env['VAR_NAME']
//指向process.env