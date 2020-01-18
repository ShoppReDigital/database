# Replication may not increase complete performance, Rows Archival & Indexing fields really improves performance

We use 3 mysql servers for running handling workloads

1. Production Write & Read(Realtime) - `pdb1`
2. Archive - `adb1`
3. Logs = `ldb1`

and then we use Replication to optimise reads

1.1. Production - Secondary Read - CronJobs & Event Processing - `read1-pdb1`
1.2. Replica for Business Intelligence - `bi1-adb1`


## 1. Production Workload

Data is useful in the current time, Technically `updated_at` is less than 3 months data will stored in 
