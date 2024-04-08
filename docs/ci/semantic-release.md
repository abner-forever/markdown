# **semantic-release**

> [semantic-release](https://semantic-release.gitbook.io/semantic-release/) 是一个自动发版工器，可以自动生成release版本，记录代码变更信息，CI构建时自动更新package版本号

## **使用**

```bash
npm i *semantic-release —save-dev*
//or
yarn add *semantic-release -D

// 运行
npm run semantic-release

// 或者 免安装
npx semantic-release
```

## **配置**

1. 在项目的项目根目录添加.releaserc 文件

```json
{
  "branch": "master",
  "plugins": [
    "@semantic-release/commit-analyzer",
    "@semantic-release/release-notes-generator",
    [
      "@semantic-release/github",
      {
        "assets": [
            "dist/**"    // 配置对应的资源会上传的github
        ]
      }
    ],
    [
      "@semantic-release/npm", // 必须配置此项才会更新package.json
      {
        "npmPublish": false   // 是否发不到npm
      }
    ],
    [
      "@semantic-release/changelog",
      {
        "changelogFile": "CHANGELOG.md"
      }
    ],
    [
      "@semantic-release/git",
      {
        "assets": [
          "package.json",   // 更新package.json中的版本号
          "CHANGELOG.md"
        ],
        "message": "chore(release): ${nextRelease.version} [skip ci]\\\\n\\\\n${nextRelease.notes}"
      }
    ]
  ],
  "preset": "angular"
}
```

1. 添加script命令

```bash
"release": "semantic-release"
```

1. 在githuab的设置选项中添加token配置，具体可参考官网文档的 [配置说明](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token)
2. 在CI文件中的build命令后执行 release命令即可

## **注意**

1. 自动生成本地CHANGELOG.md文件。
   - @semantic-release/git和 @semantic-release/changelog 配合使用生成项目中的changelog.md文件

2. 什么情况下会自动更新package.json的版本号

   1. feat, fix 即新增功能或者修复问题

   3. 需要添加@semantic-release/npm 配置才会更新package.json 若不发布npm 就配置npmPublish 为false