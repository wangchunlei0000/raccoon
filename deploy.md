# Deploy

`github` 支持 `push` 驱动 构建部署

---
```
npm install gh-pages --save-dev
```

---
user - settings - developer settings - personal access tokens - tokens(generate new token) - 复制token信息

repo - settings - secrets - actions - new repository secret - 输入token信息 (secret name: DEPLOY_TOKEN)

---

repo - actions - new workflow - 创建构建脚本

---

repo - settings - pages - build and deployment - source - deploy from a branch - branch - gh-pages 