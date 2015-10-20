sculpin generate --env=live
git checkout master
git add output_live
git commit -m "Bump"
git subtree push --prefix output_live origin master
git checkout -
