# 错误记录

> 记录，开发中遇到的环境，请求，各种报错相关的的记录以及解决办法

## 1. 环境错误

1. vscode npm脚本启动
    ```
    > Executing task: yarn run start <
    zsh:1: command not found: yarn
    终端进程“zsh '-c', 'yarn run start'”已终止，退出代码: 127。
    终端将被任务重用，按任意键关闭。
    ```
> 解决办法  
> 安装后没有重新启动vscode导致的，重启后解决，相似的在终端中执行命令不生效，也可能是安装相关命令工具后没有重启后的原因

## 2. 开发时错误