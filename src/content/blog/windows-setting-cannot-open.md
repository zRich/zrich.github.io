---
title: "Windows 11 设置无法打开修复方法"
description: "Windows 11 更新之后，无法打开，该如何修复？"
# slug: win-setting-problem
pubDate: "Feb 02 2023"
authors: [richzhao]
heroImage: "/images/windows-11-logo.webp"
tags: [Windows]
---

![Cover Page](/images/IMG_1444.JPG)

## 问题描述

我的 Windows 电脑安装的是正版 Windows 11 专业版。 自动更新是打开的，我也经常安装最新的布丁。

但是前天我发现打开 __设置__ 变成了没有任何反应。

## 尝试过的方法

我 __google__ 了好几个方法，都一一尝试了。其中有一个出现多的方法是执行下面的命令。

### 1. IrisService

其中搜到最多的是通过命令行输入这个命令。

```bash
HKCUSOFTWAREMicrosoftWindowsCurrentVersionIrisService /f && shutdown -r -t 0
```

其中一个搜索结果还提供了输入这个命令的图片，从图上可以看出来，这个命令其实是。

```bash
IrisService /f && shutdown -r -t 0

```
不管是哪一个都是错的，在我的电脑上这个命令不存在。

![IrisServer Error](/img/IrisService-Error.png)

### 2. SFC 工具

微软的官方支持网站上提供了一个通过 __SFC__ 修复工具的方法。这个工具正确执行了，但是没有效果，它没有解决我的问题，__设置__ 还是打不开。

![SFC Error](/img/SFC-Error.png)

### 3. DISM 修复工具

这个方法也是微软官方支持网站提供的方法，但是很遗憾，它也没有解决问题。

![DISM Error](/img/DISM-Error.png)

## 最后的解决办法

还是咱们码农的力量强大，我最后在 __CSDN__ 上找到了最终能修复问题的方法。

解决问题步骤：

### 1. 以管理员身份在命令行中执行

```bash
Get-AppXPackage | Foreach {Add-AppxPackage -DisableDevelopmentMode -Register "$($_.InstallLocation)\AppXManifest.xml"}
```
该命令中间可能输出错误信息，直接忽略。

![Get-AppXPackage Error](/img/Get-AppXPackage.png)

### 2. 重新启动电脑

参考CSDN的[帖子地址](https://blog.csdn.net/HU__CHENG/article/details/126584953)
