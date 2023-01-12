---
title: 论我在搭建Cloudreve网盘时遇到的坑
tags: []
id: '564'
categories:
  - - 普通文章
date: 2022-02-27 14:22:33
---

## 一/准备

用php语言的网盘例如可道云加载太慢，正好在看了blog.ltya.top的hax免费vps教程，尝试了好几次用宝塔面板做了许多事，例如反代GitHub等。在设置过程中，先是要把程序压缩包放入任意目录（我直接用宝塔面板上传到了一个静态网站目录中，然后按照官方文档：

```
#解压获取到的主程序
tar -zxvf cloudreve_VERSION_OS_ARCH.tar.gz​
# 赋予执行权限
chmod +x ./cloudreve
​# 启动 
Cloudreve./cloudreve
```

之后按照它给的地址登录，查看是否正常。（用官方的ipv6转v4）

## （二/可选：配置域名，ssl）

用你的平台aaaa解析你服务器的IPv6地址（我使用的是cloudflare），并在你在宝塔创建的网站设置中添加它，在选项中找到反代管理，新建一个，填写地址http://127.0.0.1:你的cloudere端口号。这样，你就可以在你的域名中访问你的云盘了。在宝塔面板-网站设置-ssl设置中将你的ssl证书放入（可使用freessl）。这样，就可以对接one driver等存储了。

（三/离线下载Aria2)

用国内大佬的一键安装脚本安装（详见[https://github.luqizhi.workers.dev/P3TERX/aria2.sh](https://github.luqizhi.workers.dev/P3TERX/aria2.sh)）

## 官方文档：

*   为了确保能正常使用，请先安装基础组件`wget`、`curl`、`ca-certificates`：

```
apt install wget curl ca-certificates
```

*   下载脚本

```
wget -N git.io/aria2.sh && chmod +x aria2.sh
```

*   运行脚本

```
./aria2.sh
```

*   选择你要执行的选项

```
 Aria2 一键安装管理脚本 增强版 [v2.7.4] by P3TERX.COM
 
  0. 升级脚本
 ———————————————————————
  1. 安装 Aria2
  2. 更新 Aria2
  3. 卸载 Aria2
 ———————————————————————
  4. 启动 Aria2
  5. 停止 Aria2
  6. 重启 Aria2
 ———————————————————————
  7. 修改 配置
  8. 查看 配置
  9. 查看 日志
 10. 清空 日志
 ———————————————————————
 11. 手动更新 BT-Tracker
 12. 自动更新 BT-Tracker
 ———————————————————————

 Aria2 状态: 已安装  已启动

 自动更新 BT-Tracker: 已开启

 请输入数字 [0-12]:
```

（若你与我一样使用只**支持ipv6的主机，记得在配置文件中把“允许ipv6”改成Ture**）

安装后将地址与密钥复制到设置-离线下载节点中。

## 三/接入google云盘

(https://www.unvone.com/72825.html)

```
curl https://rclone.org/install.sh  sudo bash
rclone config
n
12345
16(找到googledrive)
回车
回车
n
n
```

打开链接（我信任）

允许

```
Configure this as a team drive?
y) Yes
n) No (default)
y/n> 挂载共享网盘选择 y 挂载自己的网盘目录选 n

y
q
```

挂载：

```
mkdir -p /12345

/usr/bin/rclone mount 12345: /12345 \
 --umask 0000 \
 --default-permissions \
 --allow-non-empty \
 --allow-other \
 --buffer-size 32M \
 --dir-cache-time 12h \
 --vfs-read-chunk-size 64M \
 --vfs-read-chunk-size-limit 1G &
```

自动挂载：

```
cat > /etc/systemd/system/rclone.service <<EOF
[Unit]
Description=Rclone
AssertPathIsDirectory=LocalFolder
After=network-online.target

[Service]
Type=simple
ExecStart=/usr/bin/rclone mount 12345: /12345 \
 --umask 0000 \
 --default-permissions \
 --allow-non-empty \
 --allow-other \
 --buffer-size 32M \
 --dir-cache-time 12h \
 --vfs-read-chunk-size 64M \
 --vfs-read-chunk-size-limit 1G &

ExecStop=/bin/fusermount -u LocalFolder
Restart=on-abort
User=root

[Install]
WantedBy=default.target
EOF
```

启动

```
systemctl start rclone
```

开机启动

```
systemctl enable rclone
```

重新启动

```
systemctl restart rclone
```

停止

```
systemctl stop rclone
```

**最后，在设置-储存设置中添加本地储存 /12345**

**_教程来自网络，若有侵权，请联系我。_**