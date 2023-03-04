let studentRecords = [ 
    {name: 'John', id: 123, marks : 98 },
    {name: 'Baba', id: 101, marks : 23 },
    {name: 'yaga', id: 200, marks : 45 },
    {name: 'Wick', id: 115, marks : 75 } 
] 
// Question 1 : We are interested in retrieving only the name of the students and all the names should be in caps.
// OUTPUT:['JOHN', 'BABA', 'YAGA', 'WICK']

let arr=[];
studentRecords.forEach((studentName)=>{
    arr.push(studentName.name.toUpperCase())
})  
console.log(arr)

// method2
let newarr= studentRecords.map((stuName)=>{stuName.name.toUpperCase()})
console.log(newarr);

//method3
let result=[]
for(let i=0;i < studentRecords.length;i++){
    let obj=studentRecords[i];
    result.push((obj.name).toUpperCase())
}
console.log(result)
// 2."Question 2: Suppose we have the same dataset as above but this time we want to get the details of students who scored more than 50 marks.
// [{name: 'John', id: 123, marks : 98 },{name: 'Wick', id: 115, marks : 75 }]"
let array=[]
for(i in studentRecords){
    if(studentRecords[i].marks > 50){
        array.push(studentRecords[i]);
    } 
}
console.log(array)


// Question 3: Retrieve the details of students who scored more than 50 marks and have id greater than 120.
let ar=[]
for(i in studentRecords){
    if(studentRecords[i].marks > 50 && studentRecords[i].id > 120){
        ar.push(studentRecords[i]);
    } 
}
console.log(ar)

// Question 4: Consider the same scenario we have discussed above, but this time we would like to know the sum total of the marks of the students.
let sum=0;
for(i in studentRecords){
    sum = sum + studentRecords[i].marks
}
console.log(sum);

// Question 5: This time we want to get only the names of the students who scored more than 50 marks from the same dataset used above.
let ary=[];
for(i in studentRecords){
    if(studentRecords[i].marks > 50){
     ary.push(studentRecords[i].name);
    } 
}
console.log(ary);

// Question 6: This time we are required to print the sum of marks of the students with id > 120.
let aray=[]
for(i in studentRecords){
    if(studentRecords[i].id > 120){
        aray.push(studentRecords[i].marks);
    } 
}
console.log(aray)

// Question 7: This time we are required to print the total marks of the students with marks greater than 50 after a grace of 15 marks has been added to those students who scored less than 50.
let summ=0;
let a=[];
for( i in studentRecords){
    if(studentRecords[i].marks < 50){
        studentRecords[i].marks = studentRecords[i].marks + 15
    }
    if(studentRecords[i].marks > 50){
        a.push(studentRecords[i].marks)
    }
}
console.log(a);

//8. Create 6 objects , each object will have name, class, roll no as properties. Store these objects in an array of objects. 
let studentarr=[]
function records(name,classs,rollnum) {
    this.firstName = name;
    this.class = classs;
    this.roll = rollnum;
  }
const record1 = new records("suma", 7 , 5);
const record2 = new records("uma", 3 , 15);
const record3 = new records("seenu", 8 , 11);
const record4 = new records("singh", 4 , 5);
const record5 = new records("sweety", 8 , 20);
const record6 = new records("suman", 5 , 18);

studentarr.push(record1)
studentarr.push(record2)
studentarr.push(record3)
studentarr.push(record4)
studentarr.push(record5)
studentarr.push(record6)
console.log(studentarr);
// let objarr = [record1,record2,record3,record4,record5,record6]
// console.log(objarr);

