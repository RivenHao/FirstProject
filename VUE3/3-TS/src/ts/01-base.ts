// 类型系统
var myname:string = "zs"
var myname1 = "ls"
// myname = 100 不同类型会报错，提示错误信息
// myname.substring()
var myage:number = 100
// 可放两种类型
var myvalue:string|number = 100
// 放任意类型
var myany:any = true

// 数组
var mylist:string[] = ['aaa','bbb']
mylist.push('ddd')

var mylist2:number[] = [111,222]
mylist2.push(333)

var mylist3:(string|number)[] = ['aaa',111]

var mylist4:any[] = ['aa',11,false]

// 第二种风格
var mylist5:Array<string> = ['aaa','bbb']
var mylist6:Array<string|number> = ['aaa',111]
var mylist7:Array<any> = ['aaa',111,true]

// 对象
var myobj = {
    name:'zs',
    age:19
}
// 接 口写法
interface Obj{
    name:string,
    age:number
    location?:string // 可选属性
    [propName:string]:any // 不规则不固定不关注的属性
}
var myobj2:Obj
myobj = {
    name:'zs',
    age:19
}

// 函数
function test(a:number,b:number):number{
    return a+b
}
test(1,2)
export default {}