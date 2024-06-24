### 初始化
git config --global user.name ""
git config --global user.email ""
git init
### 暂存区
git add <file>
git rm --cached <file>
git status
git add .
### 提交
git commit -m "备注"
git log 
### 回退上一次
git reset --hard HEAD^
### 所有记录
git reflog
### 先查看所有记录然后指向某个位置，指针可又git reflog获取或者git log的前6个字母
git reset --hard 目的指针
### 由分支回到暂存区---修改注释、重新提交
git reset --soft HEAD^
### 撤销上一个版本的提交
git revert HEAD
### 查看分支
git branch
* 表示当前的分支
### 创建分支
git branch <分支名>
### 切换分支
git checkout <分支名>
### 合并分支
git merge <分支名>
### 删除分支
git branch -d <分支名>