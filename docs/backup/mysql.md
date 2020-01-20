# MySQL Backup Strategies

### A. Server Level Strategies: **Easiest**

A1. Enabling Automated backups with Server Cloud provider


### B. DB & Table Level Strategies

B1. Take occasional backup from `phpMyAdmin` and store in your `local computer hard disk`
B2. Setup cron to take backup and store in hard disk with `mysqldump` and `server hard disk`
B3. 

#### B1. Take occasional backup from `phpMyAdmin` and store in your `local computer hard disk`

Good for: Less than 10 active daily users

- Risk Level: Highest
- Difficulty Level: Very Easy
- Effort: Manual
- Security: Less Secure - Backup is in local hard disk, others may able to access, if your local computer is not secured
- Storage Guarantee: Your local computer hard disk may get corrupted
- Cost: No Extra Cost
- Network Usage: egress

#### B2. Setup cron to take backup and store in `server hard disk` with `mysqldump` 

Good for: Less than 100 active daily users

- Risk Level: Normal
- Difficulty Level: Easy
- Effort: Automated
- Security: Secured - Backup is in server local hard disk
- Storage Guarantee: Guranteed - Your local computer hard disk may get corrupted
- Cost: No Extra Cost
- Network Usage: No Usage

Note: with this(**B2**), use **A1**(Entire server daily backup) to easily keep backups that are restorable and 2 levels of backup, 1st is server backup and 2nd is DB level backup



