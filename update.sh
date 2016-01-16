git checkout source
rm -r output_live/*
mkdir output_live
git read-tree --prefix=output_live/ -u origin/master
git reset HEAD
git subtree pull --prefix=output_live origin master
sculpin generate --env=live
git add output_live
git commit -m "Bump"
git subtree push --prefix=output_live origin master
git reset --hard origin/source
