@echo off
cd /d "D:\新建文件夹 (3)\个人简历网站"
echo Adding all files...
git add -A
echo Committing...
git commit -m "更新作品集 - 完整数据"
echo Pushing to GitHub...
git push
echo Done!
pause