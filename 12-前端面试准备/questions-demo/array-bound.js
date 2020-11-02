// js的数组索引越界
var a = []; //定义一个空数组
//改变length属性,使得a成为一个装满的稀疏数组.数组的最大元素个数为Math.pow(2, 32) - 1个(4294967295),
//  由于数组索引从0开始,所以最大的索引号就是Math.pow(2, 32) - 2
a[Math.pow(2, 32) - 2] = "最大索引";
console.log(a[Math.pow(2, 32) - 2], "Math.pow(2, 32) - 2")
console.log("a.length === Math.pow(2, 32) - 1:", a.length === Math.pow(2, 32) - 1); //true,a的length已经不能再大了
try {
    a.push("我比最大索引还大1", "我比最大索引还大2");//再往里面push元素,抛出异常
} catch (e) {
    console.log(e instanceof RangeError); // true,数组越界
    console.log("数组越界", e); // true,数组越界
}
console.log(a.length === Math.pow(2, 32) - 1); // true,长度没变,还是4294967295,那元素呢?push进去没有? 
console.log(a[Math.pow(2, 32) - 1])
console.log(a[Math.pow(2, 32) - 1] === "我比最大索引还大1"); // true,居然能访问,而且值还存进去了!
console.log(a[Math.pow(2, 32)])
console.log(a[Math.pow(2, 32)] === "我比最大索引还大2"); // true,这个也是!
try {
    a.push("我比最大索引还大3?"); // 再push一个
} catch (e) {
    console.log(e instanceof RangeError); // true,仍然报错
    console.log("数组越界", e); // true,数组越界
}
console.log(a[Math.pow(2, 32) + 1]); //undefined,没有存上?
console.log(a[Math.pow(2, 32) - 1]) //"我比最大索引还大3?",原来是覆盖了第一个越界的元素
console.log(a[Math.pow(2, 32)]) //"我比最大索引还大2",这个没被覆盖