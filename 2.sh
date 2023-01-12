cd ~/1
hexo clean
hexo g
cd public
git init
git add .
git commit -m "auto"
git push --set-upstream git@github.com:luqizhi666/luqizhi666.github.io.git master -f
git push --set-upstream git@github.com:luqizhi666/luqizhi666.github.io.git master -f