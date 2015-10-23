sculpin generate --env=live
git subtree split --prefix output_live -b master
git push -f origin master:master
git branch -D master