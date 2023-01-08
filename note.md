# Microfrontend Knowledge

## Babel config

babel 是一个 JavaScript 编译器，它可以将最新的 JavaScript 语法转换为旧版浏览器或环境能够识别的语法。

这个配置中列出了两个 preset，也就是预设的转换规则集合。

'@babel/preset-react' 是一个 preset，它会将 JSX 语法转 换为 JavaScript 语法。

'@babel/preset-env' 是一个 preset，它会根据配置的目标浏览器或运行环境，自动将最新的 JavaScript 语法转换为旧版浏览器或环境能够识别的语法。

'@babel/plugin-transform-runtime' 是一个 Babel 插件，它会在转换 JavaScript 代码时，自动引入 runtime 库，以便在运行时提供常用的工具函数和 polyfill。

总的来说，这个配置会将 JSX 和最新的 JavaScript 语法转换为旧版浏览器或环境能够识别的语法，并在运行时提供常用的工具函数和 polyfill。

## Microfrontends merit and drawback

Microfrontends 是一种将大型前端应用程序拆分成小的、可独立部署的模块的架构方式。这种方式有许多优点和缺点。

优点：

增强可维护性：将应用程序拆分成较小的模块可以使其更容易维护。

增强可扩展性：微前端架构允许你从多个团队同时构建应用程序，从而提高开发效率。

更好的代码分离：微前端架构允许更好地分离前端代码，从而使团队更容易协作。

更快的交付速度：微前端架构允许团队快速部署新功能，提高交付效率。

缺点：

复杂性增加：微前端架构增加了系统的复杂性，需要更多的工具和技术来支持。

兼容性问题：由于每个模块都是独立的，因此可能存在兼容性问题。

调试困难：在微前端架构中，由于有多个团队和模块参与开发，调试可能会变得困难。

性能问题：由于需要加载多个模块，应用程序的性能可能会受到影响。

## amazon s3

Amazon S3（Simple Storage Service）是一项云存储服务，用户可以使用它来存储和检索任意数量的数据。S3 的功能包括：

文件存储：用户可以将文件存储在 S3 中，并设置访问权限，使其他人能够访问这些文件。

数据备份：用户可以使用 S3 来备份自己的数据，这样就不用担心数据丢失了。

网站托管：用户可以使用 S3 来托管自己的网站，而无需担心服务器的问题。

内容分发：用户可以使用 S3 来分发内容，例如视频、音频、文档等，这样可以让内容更快速地加载。

总之，S3 是一项强大的云存储服务，可以帮助用户存储和管理数据，并提供多种功能。

## CDN

Content Delivery Network（CDN）是一种分布式网络，它可以使网站内容从最近的服务器节点获取，从而为用户提供更快的访问速度。 CDN 通常由许多边缘服务器组成，这些服务器被分布在全球各地，可以为用户提供优质的网络体验。CDN 通常用于加载静态内容，例如图像、视频、文件等，但也可以用于加载动态内容。 CDN 可以帮助网站减少流量和带宽使用，提高网站的可用性和安全性。

## HtmlwebpackPlugin

HtmlWebpackPlugin 是 Webpack 插件，用于生成 HTML 文件并将打包后的 JavaScript 文件注入 HTML 文件中。

在上述代码中，插件会使用 public/index.html 作为模板，并将打包后的 JavaScript 文件注入模板中。

这意味着，如果您有一个单独的 HTML 文件，它可以用作您的项目的入口点，并且您希望打包后的 JavaScript 文件能够在 HTML 文件中被加载，那么 HtmlWebpackPlugin 可能会很有用。

## github action vs husky

GitHub Actions 是 GitHub 的一项功能，可以让您在推送代码、发布版本、或者更新项目时自动运行工作流程。您可以使用 GitHub Actions 来自动构建、测试、部署代码，或者进行其他自动化任务。

Husky 是一个 Node.js 包，用于在 Git 项目中添加钩子。您可以使用 Husky 来在推送代码或执行其他 Git 操作时自动运行脚本。

因此，GitHub Actions 和 Husky 可以用于在 Git 项目中自动执行脚本或工作流程。但是，GitHub Actions 是专为 GitHub 而设计的，而 Husky 可以在任何 Git 项目中使用。

## AWS Setup and Configuration Cheetsheet

This lecture note is not intended to be a replacement for the videos, but to serve as a cheat sheet for students who want to quickly run thru the AWS configuration steps or easily see if they missed a step. It will also help navigate through the changes to the AWS UI since the course was recorded.

S3 Bucket Creation and Configuration
Go to AWS Management Console and use the search bar to find S3

Click Create Bucket

Specify an AWS Region

Provide unique Bucket Name and click Create Bucket

Click the new Bucket you have created from the Bucket list.

Select Properties

Scroll down to Static website hosting and click Edit

Change to Enable

Enter index.html in the Index document field

Click Save changes

Select Permissions

Click Edit in Block all public access

Untick the Block all public access box.

Click Save changes

Type confirm in the field and click Confirm

Find the Bucket Policy and click Edit

Click Policy generator

Change Policy type to S3 Bucket Policy

Set Principle to \*

Set Action to Get Object

Copy the S3 bucket ARN to add to the ARN field and add /_ to the end.
eg: arn:aws:s3:::mfe-dashboard/_

Click Add Statement

Click Generate Policy

Copy paste the generated policy text to the Policy editor

Click Save changes

CloudFront setup
Go to AWS Management Console and use the search bar to find CloudFront

Click Create distribution

Set Origin domain to your S3 bucket

Find the Default cache behavior section and change Viewer protocol policy to Redirect HTTP to HTTPS

Scroll down and click Create Distribution

After Distribution creation has finalized click the Distribution from the list, find its Settings and click Edit

Scroll down to find the Default root object field and enter /container/latest/index.html

Click Save changes

Click Error pages

Click Create custom error response

Change HTTP error code to 403: Forbidden

Change Customize error response to Yes

Set Response page path to /container/latest/index.html

Set HTTP Response Code to 200: OK

Create IAM user
Go to AWS Management Console and use the search bar to find IAM

In IAM dashboard, click Users in the left sidebar

Click Add Users

Enter a unique name in the User name field

In Select AWS credential type tick Access Key - Programmatic access

Click Next: Permissions

Select Attach existing policies directly

Use search bar to find and tick AmazonS3FullAccess and CloudFrontFullAccess

Click Next: Tags

Click Next: Review

Click Create user
