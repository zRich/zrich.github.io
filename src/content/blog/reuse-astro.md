---
title: "Netlfiy 托管站点 AWS 域名设置过程"
description: "过渡用一下Astro"
# slug: win-setting-problem
pubDate: "Jan 16 2024"
authors: [richzhao]
heroImage: "/images/aws/aws_logo.png"
tags: [Astro, AWS, domain name, 域名]
---

![Cover Page](/images/IMG_1444.JPG)

## 问题描述

我原来的域名11月份已经过期了，由于过期之前没有提前续买竟然还不能续买了。我查了一下竟然惊喜地发现 `zhaozhenhua.com` 是可以注册购买的，索性在 AWS 买了这个新的域名。

这个站点托管在 `netlify.com`, 需要在 `netlify.com` 和 `AWS` 设置域名解析。

我的另一个域名 `https://openevangel.com` 也是 `netlify.com` 和 `AWS` 这样的组合。所以以为设置应该是很简单的。

但是，还是花了些时间才搞得定。

好记性不如烂笔头，记录一下设置过程。

## 托管站点

在 `netlify.com` 托管站点，如果域名不是在 `netlify.com` 注册的，`netlify.com` 会提示在域名服务商那里设置 `Domane Name`

![netlify name service](/images/netlify/netlify-dns.png)

## 设置Name Service 

登录到 AWS 在 `Router 53` 域名下面设置 `Name Servers`

![AWS Name Servers](/images/aws/name-servers.png)

在 `Router 53` 到 `Hosted Zone` 下面修改路由配置。

![AWS Hosted Zones](/image/aws/hosted-zone.png)

接下来就是等待生效，说是是 24 小时生效，其实一般几分钟就好！

## 发布到 netlify

`netlify` 可以从 `github.com` 拉取代码、编译、发布。由于我用到 `Astro` 是最新版到 `4.1`，`netlify` 并不支持。这时需要用到另外一种发布模式。

编译好，push 到 github， 让 netlify 直接部署编译后到文件。

`Astro` 的编译目录是 `dist`， 修改 `.gitingore` 文件，确保该文件夹不被忽略。在本地编译，成功之后，`push` 到 github. 

在 `netlify` 设置部署，不执行编译命令，设置部署目录是 `dist`. 

![netlify deply config](/images/netlify/deploy-config.png)
