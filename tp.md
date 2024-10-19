# Lap2Part1 Exo2

### D:\study\M1\CAW\labGit
λ mkdir  learnGit.

D:\study\M1\CAW\labGit
λ ls
learnGit/

D:\study\M1\CAW\labGit
λ cd learnGit\

D:\study\M1\CAW\labGit\learnGit
λ git init
Initialized empty Git repository in D:/study/M1/CAW/labGit/learnGit/.git/

D:\study\M1\CAW\labGit\learnGit
λ touch three.txt

D:\study\M1\CAW\labGit\learnGit (master)
λ ls
three.txt

D:\study\M1\CAW\labGit\learnGit (master)
λ git add three.txt

D:\study\M1\CAW\labGit\learnGit (master)
λ git status
On branch master

No commits yet

Changes to be committed:
  (use "git rm --cached <file>..." to unstage)
        new file:   three.txt


D:\study\M1\CAW\labGit\learnGit (master)
λ git commit -m "three.txt added"
[master (root-commit) 8e1b057] three.txt added
 1 file changed, 0 insertions(+), 0 deletions(-)
 create mode 100644 three.txt

D:\study\M1\CAW\labGit\learnGit (master)
λ git log
commit 8e1b05773f7bdc3c2bb8df5ed8057cf8b27b4e32 (HEAD -> master)
Author: Fekharmensour <fekharmansour@gmail.com>
Date:   Sat Oct 19 17:50:02 2024 +0100

    three.txt added

D:\study\M1\CAW\labGit\learnGit (master)
λ touch four.txt

D:\study\M1\CAW\labGit\learnGit (master)
λ git add four.txt

D:\study\M1\CAW\labGit\learnGit (master)
λ git commit -m "four.txt added"
[master e6cdf51] four.txt added
 1 file changed, 0 insertions(+), 0 deletions(-)
 create mode 100644 four.txt

D:\study\M1\CAW\labGit\learnGit (master)
λ rm three.txt

D:\study\M1\CAW\labGit\learnGit (master)
λ ls
four.txt

D:\study\M1\CAW\labGit\learnGit (master)
λ git status
On branch master
Changes not staged for commit:
  (use "git add/rm <file>..." to update what will be committed)
  (use "git restore <file>..." to discard changes in working directory)
        deleted:    three.txt

no changes added to commit (use "git add" and/or "git commit -a")

D:\study\M1\CAW\labGit\learnGit (master)
λ git add .

D:\study\M1\CAW\labGit\learnGit (master)
λ git status
On branch master
Changes to be committed:
  (use "git restore --staged <file>..." to unstage)
        deleted:    three.txt


D:\study\M1\CAW\labGit\learnGit (master)
λ git commit -m "delete three.txt"
[master 83a516a] delete three.txt
 1 file changed, 0 insertions(+), 0 deletions(-)
 delete mode 100644 three.txt

D:\study\M1\CAW\labGit\learnGit (master)
λ git log
commit 83a516afc6778c09c9d8e331a0fd19ec3cfdca98 (HEAD -> master)
Author: Fekharmensour <fekharmansour@gmail.com>
Date:   Sat Oct 19 17:51:39 2024 +0100

    delete three.txt

commit e6cdf51c4bf106b3bd43b7d96da31585041cb245
Author: Fekharmensour <fekharmansour@gmail.com>
Date:   Sat Oct 19 17:50:43 2024 +0100

    four.txt added

commit 8e1b05773f7bdc3c2bb8df5ed8057cf8b27b4e32
Author: Fekharmensour <fekharmansour@gmail.com>
Date:   Sat Oct 19 17:50:02 2024 +0100

    three.txt added

D:\study\M1\CAW\labGit\learnGit (master)
