git checkout source
rm -r output_live
git subtree add --prefix output_live origin master --squash
sculpin generate --env=live
git add -f output_live
git commit -m "Bump"
git subtree push --prefix=output_live origin master
git reset --hard origin/source
