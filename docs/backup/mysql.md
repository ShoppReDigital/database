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

##### Challenges

- Manual

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

##### Benefits

- No network costs
- Faster to restore database as dump exists in local

##### Challenges

- DB server hard disk consumed and risk of hard disk getting full
- Restoring server level backups take time.
- Backup is running in DB server, so CPU and RAM will also (over)utilised, It may degrade production performance

To solve challenges of B2, We planned for B3

#### B3. B2 with Amazon S3 or Minio(Open Source, Self Hosted) using s3cmd

- `mysqldump ... | s3cmd put - s3://bucket/file-name.sql`

Good for: 
- Technically: Greater than 100 active hourly users
- Business wise: Hourly $100+ revenue 

- Risk Level: Less Risk or No Risk
- Difficulty Level: Average
- Effort: One time setup, Daily work Automated
- Security: Secured - Backup is in Object Storage - Amazon s3 has proved Security
- Storage Guarantee: Double Guranteed - Enable Redundency if required
- Cost: Network Cost, Object Storage normally cheaper
- Network Usage: Used for Every Backup

Intervals: Hourly, Weekly and Monthly

#####  Benefits

- Challenges in B2 Solved
- Storage Cost Reduces

 **Note**: If you keep Database server hard disk($1/10g) size then Object storages($1/50GB) 
 
##### Challenges

 - Network costs increase based on how you use
 


