function main (const param : (int * int); const storage : int) : (list(operation) * int) is
((nil:list(operation)),(storage + param.0 +param.1))