#!/bin/bash

#杀死原来的java进程
./kill_javaprocss.sh zlactivity-1.0.0.jar


runjarFile="zlactivity-1.0.0.jar"  
#进入代码文件夹，必须有git管理
cd /data/imcc/webapps/zlactivity/code
#更新代码
git pull origin master
#进入到需要打包运行的子项目
cd /data/imcc/webapps/zlactivity/code
#清理原来的jar包重新打包
mvn clean install -Dmaven.test.skip=true
#进入代码运行目录
cd /data/imcc/webapps/zlactivity/run
#备份上一版本
ctime=$(date  +%Y%m%d%H%M%S)
if [ -f ${runjarFile} ]; then  
　　cp -r zlactivity-1.0.0.jar ${ctime}-zlactivity-1.0.0.jar   
fi  
#删除原来的jar包
rm -rf zlactivity-1.0.0.jar
cp /data/imcc/webapps/zlactivity/code/target/zlactivity-1.0.0.jar zlactivity-1.0.0.jar
#后台运行
nohup java -jar zlactivity-1.0.0.jar --spring.profiles.active=dev > /data/imcc/webapps/zlactivity/zlactivity-1.0.0.log &
#监控日志
tail -f /data/imcc/webapps/zlactivity/zlactivity-1.0.0.log

:set ff=unix


