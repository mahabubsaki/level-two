/*
Comparison Query Operators-
1)$eq : This is equal operator which only match the values given in object . Basically a js filter version where we give condition with ===. Query Object => {<field> : {$eq : <Desired Value>}}

2)$neq : Works completely reverse of $eq operator. This is not equal operator which only match expect the values given in object . Basically a js filter version where we give condition with !==. Query Object => {<field> : {$neq : <Desired Value>}}

3)$gt : This greater than operator works on numercial value which match the greater value given in object. Basically a js filter version where we give condition with >. Query Object => {<field> : {$gt : <Desired Value>}}

4)$gte : This greater than operator works on numercial value which match the greater or equal value given in object. Basically a js filter version where we give condition with >=. Query Object => {<field> : {$gte : <Desired Value>}}

5)$lt : This less than operator works on numercial value which match the less  value given in object. Basically a js filter version where we give condition with <. Query Object => {<field> : {$lt : <Desired Value>}}

6)$lte : This less than operator works on numercial value which match the less or equal  value given in object. Basically a js filter version where we give condition with <=. Query Object => {<field> : {$lt : <Desired Value>}}
=================>We can specify multiple operators with comma in operator object <=================

7)$in : This  operator expect a array of values by which values it will match and return the desired values. Query Object => {<field> : {$in : [<Desired value>,<Desired value>]}}

8)$in :Works completely reverse way from $in. This  operator expect a array of values by expect those values it will match and return the desired values. Query Object => {<field> : {$nin : [<Desired value>,<Desired value>]}}

Logical Query Operators-
1)$and : This operator works similer like && operator of js , it expects an array of query by which it will match and return us a value. Query => $and : [{<field1>:<desired value1>},{<field2>:<desired value2>}]

2)$or :Works completely reverse way from $and This operator works similer like || operator of js , it expects an array of query by which it will match and return us a value. Query => $or : [{<field1>:<desired value1>},{<field2>:<desired value2>}]

Other Query Operators-
1)$exits : We can check if a property exist or not in a collection . Query Object => {<field> : {$exists : boolean}} => true will give all the documents which have matching field and false will give reverse

2)$type : We can find data by a fields type in a collection . Query Object => {<field> : {$type : 'int'}} => it will give all the documents which have our desired fields value type is integar
3)$size : we can find data by size with thios operator

4)$all : We can find from a documents specific array items with this operator. Same as JS includes method but includes only find only 1 value from array but here we can specify multiple value Query Object => {<field> : {$all : ['<first desired value>','<second desired value>']}}

5)$elemMatch : This operator used to find documents in array  where we can specify multiple property to match.Query Object => {<field> : {$elemMatch : {<query1>,<query2>}}}


In summary, the key difference between $all and $elemMatch is that $all checks if an array field contains all the specified values, while $elemMatch checks if at least one array element matches multiple conditions.

We should use $all on primitive type array and $elemMatch on array of object

*/