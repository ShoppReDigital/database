# Replication is not Backup

- Copying and keeping files in another location is not a good practice to do backup of database
- Using archiving mechanisms(zip) to store backups with read only is good practice


- Zipped files are read only so anyone can't edit the files inside it, if anyone like to access any files, then they will extract and use that file
- so alteration will not happen
- Replicated files can be edited and tracking the changes is not possible with version control systems like git
